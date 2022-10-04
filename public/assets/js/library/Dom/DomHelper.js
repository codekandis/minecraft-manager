'use strict';

import StaticAbstract from '../Types/StaticAbstract.js';
import DomElementNotFoundException from './DomElementNotFoundException.js';
import DomInsertPositions from './DomInsertPositions.js';

class DomHelper extends StaticAbstract
{
	static querySelector( selector, context = null, throwExceptions = true )
	{
		const element = ( null === context ? document : context ).querySelector( selector );

		if ( null === element && true === throwExceptions )
		{
			throw DomElementNotFoundException.with_unresolvableSelector( selector );
		}

		return element;
	}

	static querySelectorAll( selector, context = null, throwExceptions = true )
	{
		const elements = ( null === context ? document : context ).querySelectorAll( selector );

		if ( 0 === elements.length && true === throwExceptions )
		{
			throw DomElementNotFoundException.with_unresolvableSelector( selector );
		}

		return elements;
	}

	static createElementFromString( htmlString, idName = null, classNames = null )
	{
		const container     = document.createElement( 'div' );
		container.innerHTML = htmlString.trim();

		const element = container.firstChild;
		if ( null !== idName )
		{
			element.setAttribute( 'id', idName );
		}
		if ( null !== classNames )
		{
			element.setAttribute( 'class', classNames );
		}

		return element;
	}

	static createElementsFromString( htmlString )
	{
		const container     = document.createElement( 'div' );
		container.innerHTML = htmlString.trim();

		return container.childNodes;
	}

	static remove( selector )
	{
		document
			.querySelectorAll( selector )
			.forEach(
				( element ) =>
				{
					element.remove();
				}
			);
	}

	static addEventHandler( element, eventName, handler )
	{
		element.addEventListener( eventName, handler );
	}

	static addEventHandlers( element, eventHandlerMapping )
	{
		eventHandlerMapping.forEach(
			( eventHandler, eventName ) =>
			{

				DomHelper.addEventHandler( element, eventName, eventHandler );
			}
		);
	}

	static addEventHandlerBySelector( selector, eventName, handler )
	{
		document
			.querySelectorAll( selector )
			.forEach(
				( element ) =>
				{
					DomHelper.addEventHandler( element, eventName, handler );
				}
			);
	}

	static addEventHandlersBySelector( selector, eventHandlerMapping )
	{
		document
			.querySelectorAll( selector )
			.forEach(
				( element ) =>
				{
					DomHelper.addEventHandlers( element, eventHandlerMapping );
				}
			);
	}

	static appendChild( element, child )
	{
		element.appendChild( child );
	}

	static appendChildren( element, children )
	{
		children.forEach(
			( child ) =>
			{
				DomHelper.appendChild( element, child );
			}
		)
	}

	static insertBefore( element, insertion )
	{
		element.parentNode.insertBefore( insertion, element );
	}

	static insertAfter( element, insertion )
	{
		element.parentNode.insertBefore( insertion, element.nextSibling );
	}

	static insert( element, insertion, position )
	{
		switch ( position )
		{
			case DomInsertPositions.BEFORE:
			{
				DomHelper.insertBefore( element, insertion );
				break;
			}
			case DomInsertPositions.AFTER:
			{
				DomHelper.insertAfter( element, insertion );
				break;
			}
		}
	}

	static insertBeforeAll( elements, insertion )
	{
		elements.forEach(
			( element ) =>
			{
				DomHelper.insertBefore( element, insertion.cloneNode( true ) );
			}
		);
	}

	static insertAfterAll( elements, insertion )
	{
		elements.forEach(
			( element ) =>
			{
				DomHelper.insertAfter( element, insertion.cloneNode( true ) );
			}
		);
	}

	static insertAll( elements, insertion, position )
	{
		elements.forEach(
			( element ) =>
			{
				DomHelper.insert( element, insertion.cloneNode( true ), position );
			}
		);
	}

	static replaceWith( element, replacement )
	{
		element.parentNode.replaceChild( replacement, element );
	}

	static replaceWithAll( element, replacements )
	{
		let lastNode = replacements[ 0 ];
		DomHelper.replaceWith( element, replacements[ 0 ] );
		while ( 0 < replacements.length )
		{
			DomHelper.insertAfter( lastNode, replacements[ 0 ] );
			lastNode = lastNode.nextSibling;
		}
	}
}

export default DomHelper;
