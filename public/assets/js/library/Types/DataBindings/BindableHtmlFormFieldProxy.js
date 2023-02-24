'use strict';

import { DomHelper } from '../../Dom/DomHelper.js';
import { BindableProxy } from './BindableProxy.js';

/**
 * Represents a bindable HTML form field proxy.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class BindableHtmlFormFieldProxy extends BindableProxy
{
	/**
	 * Constructor method.
	 * @param {HTMLElement} formField The HTML form field to proxy.
	 * @todo Specify a distinguishable HTMl form element type enumeration of the parameter `fieldList`.
	 */
	constructor( formField )
	{
		super( formField, BindableHtmlFormFieldProxy.#bindEventHandlersToBindableProxy );
	}

	/**
	 * Static constructor method.
	 * @param {String} selector The CSS selector specifying the HTML form field element to proxy.
	 * @returns {BindableHtmlFormFieldProxy}
	 * @constructor
	 */
	static with_selector( selector )
	{
		return new BindableHtmlFormFieldProxy(
			DomHelper.querySelector( selector )
		);
	}

	/**
	 * Will be invoked after the instantiation of the bindable proxy.
	 * @param bindableProxy The instantiated bindable proxy.
	 */
	static #bindEventHandlersToBindableProxy( bindableProxy )
	{
		const eventHandler = ( event ) =>
		{
			bindableProxy._dispatchPropertyChangedEvent(
				'checkbox' === bindableProxy.delegatedObject.type
					? 'checked' :
					'value',
				bindableProxy.proxy
			);
		};

		bindableProxy.delegatedObject.inputEvent( eventHandler );
		bindableProxy.delegatedObject.changeEvent( eventHandler );
	}
}
