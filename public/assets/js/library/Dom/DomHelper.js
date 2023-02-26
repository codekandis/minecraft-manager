'use strict';

import { AbstractStatic } from '../Types/AbstractStatic.js';
import { DomElementNotFoundException } from './DomElementNotFoundException.js';
import { DomInsertPosition } from './DomInsertPosition.js';
import { DomSelectorNotResolvableException } from './DomSelectorNotResolvableException.js';

/**
 * Represents a DOM helper providing various methods to iterate and manipulate the DOM.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DomHelper extends AbstractStatic
{
	/**
	 * Gets the proper context.
	 * @param {?Document|?HTMLElement} context The document or HTML element to use as context, null if no context has been specified.
	 * @returns {Document|HTMLElement} The specified context, document if no context has been specified.
	 */
	static #getContext( context )
	{
		return null === context
			? document
			: context;
	}

	/**
	 * Determines if the document contains a specific HTML element.
	 * @param  {HTMLElement} element The HTML element to determine if it exists.
	 * @returns {Boolean} True if the document contains the HTML element, otherwise false.
	 */
	static contains( element )
	{
		return document.contains( element );
	}

	/**
	 * Queries the first HTML element specified by a CSS selector.
	 * @param {String} selector The CSS selector specifying the HTML element to query.
	 * @param {?Document|?HTMLElement} context The document or HTML element the queried HTML element must be a child of.
	 * @param {Boolean} throwExceptions True if an exception must be thrown if no HTML element has been found, otherwise false.
	 * @returns {?HTMLElement} The HTML element, if found, otherwise null.
	 * @throws {DomElementNotFoundException} The HTML element has not been found.
	 */
	static querySelector( selector, context = null, throwExceptions = true )
	{
		const element = this
			.#getContext( context )
			.querySelector( selector );

		if ( true === throwExceptions && null === element )
		{
			throw DomElementNotFoundException.with_unresolvableSelector( selector );
		}

		return element;
	}

	/**
	 * Queries all HTML elements matching a given CSS selector.
	 * @param {String} selector The CSS selector specifying the HTML elements to query.
	 * @param {?Document|?HTMLElement} context The document or HTML element the queried HTML elements must be children of.
	 * @param {Boolean} throwExceptions True if an exception must be thrown if no HTML elements has been found, otherwise false.
	 * @returns {HTMLElement[]} The HTML elements, if found, otherwise an empty array.
	 * @throws {DomElementNotFoundException} No HTML element has been found.
	 */
	static querySelectorAll( selector, context = null, throwExceptions = true )
	{
		const elements = this
			.#getContext( context )
			.querySelectorAll( selector );

		if ( true === throwExceptions && 0 === elements.length )
		{
			throw DomElementNotFoundException.with_unresolvableSelector( selector );
		}

		return elements;
	}

	/**
	 * Creates an HTML element from an HTML string. If the HTML string contains multiple HTML element only the first one will be returned.
	 * @param {String} htmlString The HTML string to create the HTML element from.
	 * @param {String} id The ID of the HTML element.
	 * @param {String} classNames The class names of the HTML element.
	 * @returns {HTMLElement} The created HTML element.
	 */
	static createElementFromString( htmlString, id = null, classNames = null )
	{
		const container     = document.createElement( 'div' );
		container.innerHTML = htmlString.trim();
		const element       = /** @type {HTMLElement} */ container.firstChild;

		if ( null !== id )
		{
			element.setAttribute( 'id', id );
		}
		if ( null !== classNames )
		{
			element.setAttribute( 'class', classNames );
		}

		return element;
	}

	/**
	 * Creates multiple HTML elements from an HTML string.
	 * @param {String} htmlString The HTML string to create the HTML elements from.
	 * @returns {NodeList} The created HTML elements.
	 */
	static createElementsFromString( htmlString )
	{
		const container     = document.createElement( 'div' );
		container.innerHTML = htmlString.trim();

		return container.childNodes;
	}

	/**
	 * Removes a specific HTML element.
	 * @param {HTMLElement} element The HTML element to remove.
	 * @param {Boolean} throwExceptions True if an exception must be thrown if no HTML element has been found, otherwise false.
	 * @throws {DomElementNotFoundException} The HTML element does not exist in the document.
	 */
	static remove( element, throwExceptions = true )
	{
		const elementExists = DomHelper.contains( element );

		if ( false === throwExceptions && false === elementExists )
		{
			throw DomElementNotFoundException.with_element( element );
		}

		element.remove();
	}

	/**
	 * Removes all HTML elements specified by a CSS selector.
	 * @param {String} selector The CSS selector specifying the HTML elements to query.
	 * @param {?Document|?HTMLElement} context The node the queried HTML element must be a child of.
	 * @param {Boolean} throwExceptions True if an exception must be thrown if no HTML element has been found, otherwise false.
	 */
	static removeBySelector( selector, context = null, throwExceptions = true )
	{
		const elements = this
			.#getContext( context )
			.querySelectorAll( selector );

		if ( true === throwExceptions && 0 === elements.length )
		{
			throw DomSelectorNotResolvableException.with_selector( selector );
		}

		elements.forEach(
			( element ) =>
			{
				element.remove();
			}
		);
	}

	/**
	 * Adds an event handler to an HTML element.
	 * @param {Object} element The HTML element to add the event handler to.
	 * @param {String} eventName The name of the event to add the event handler to.
	 * @param {Event_EventHandler} eventHandler The event handler to add.
	 */
	static addEventHandler( element, eventName, eventHandler )
	{
		element.addEventListener( eventName, eventHandler );
	}

	/**
	 * Adds event handlers to events of an HTML element specified by a variadic amount of event handler mappings.
	 * @param {Object} element The HTML element to add the event handlers to.
	 * @param {...EventHandlerMapping} eventHandlerMappings The event handler mappings.
	 */
	static addEventHandlers( element, ...eventHandlerMappings )
	{
		eventHandlerMappings.forEach(
			( eventHandlerMapping ) =>
			{
				eventHandlerMapping.eventHandlers.forEach(
					( eventHandler ) =>
					{
						DomHelper.addEventHandler( element, eventHandlerMapping.eventName, eventHandler );
					}
				);
			}
		);
	}

	/**
	 * Adds an event handler to all HTML elements specified by a CSS selector.
	 * @param {String} selector The CSS selector specifying the HTML elements to add the event handlers to.
	 * @param {String} eventName The name of the event to add the event handler to.
	 * @param {Event_EventHandler} eventHandler The event handler to add.
	 */
	static addEventHandlerBySelector( selector, eventName, eventHandler )
	{
		document
			.querySelectorAll( selector )
			.forEach(
				( element ) =>
				{
					DomHelper.addEventHandler( element, eventName, eventHandler );
				}
			);
	}

	/**
	 * Adds event handlers to events of an HTML element specified by a CSS selector and by a variadic amount of event handler mappings.
	 * @param {String} selector The CSS selector specifying the HTML elements to add the event handlers to.
	 * @param {...EventHandlerMapping} eventHandlerMappings The event handler mappings.
	 */
	static addEventHandlersBySelector( selector, ...eventHandlerMappings )
	{
		document
			.querySelectorAll( selector )
			.forEach(
				( element ) =>
				{
					DomHelper.addEventHandlers( element, ...eventHandlerMappings );
				}
			);
	}

	/**
	 * Appends a variadic amount of children to an HTML element's child nodes.
	 * @param {HTMLElement} element The HTML element to append the children to.
	 * @param {...HTMLElement} children The children to append.
	 */
	static appendChildren( element, ...children )
	{
		children.forEach(
			( child ) =>
			{
				element.appendChild( child );
			}
		);
	}

	/**
	 * Inserts a variadic amount of HTML elements before a specified HTML element.
	 * @param {HTMLElement} element The HTML element to insert the new HTML elements before.
	 * @param {...HTMLElement} insertions The HTML elements to insert.
	 */
	static insertBefore( element, ...insertions )
	{
		insertions.forEach(
			( insertion ) =>
			{
				element.parentNode.insertBefore( insertion, element );
			}
		);
	}

	/**
	 * Inserts a variadic amount of HTML elements after a specified HTML element.
	 * @param {HTMLElement} element The HTML element to insert the new HTML elements after.
	 * @param {...HTMLElement} insertions The HTML elements to insert.
	 */
	static insertAfter( element, ...insertions )
	{
		insertions.forEach(
			( insertion ) =>
			{
				element.parentNode.insertBefore( insertion, element.nextSibling );
			}
		);
	}

	/**
	 * Inserts a variadic amount of HTML elements before or after an HTML element specified by its position.
	 * @param {HTMLElement} element The HTML element to insert the new HTML elements befor or after.
	 * @param {String} position The position of the inserted HTML elements.
	 * @param {...HTMLElement} insertions The HTML elements to insert.
	 */
	static insert( element, position, ...insertions )
	{
		switch ( position )
		{
			case DomInsertPosition.BEFORE:
			{
				DomHelper.insertBefore( element, ...insertions );

				break;
			}
			case DomInsertPosition.AFTER:
			{
				DomHelper.insertAfter( element, ...insertions );

				break;
			}
		}
	}

	/**
	 * Replaces an HTML element with a specified variadic amount of HTML elements.
	 * @param {HTMLElement} element The HTML element to replace.
	 * @param {...HTMLElement} elementReplacements The new HTML elements to replace the HTML element with.
	 */
	static replaceWith( element, ...elementReplacements )
	{
		DomHelper.insertBefore( element, ...elementReplacements );
		element.remove();
	}
}
