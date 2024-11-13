'use strict';

import { DomHelper } from '../../libraries/jotunheim/Dom/DomHelper.js';
import { AbstractBindable } from '../../libraries/jotunheim/Types/DataBindings/AbstractBindable.js';

/**
 * Represents the base class of any component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractComponent extends AbstractBindable
{
	/**
	 * Stores the application's settings.
	 * @type {Settings}
	 */
	__settings;

	/**
	 * Constructor method.
	 * @param {Settings} settings The application's settings.
	 */
	constructor( settings )
	{
		super();

		this.__settings = settings;
	}

	/**
	 * Attaches the event input and change event handlers to a form field specified by a selector.
	 * @param {String} formFieldSelector The selector of the HTML form field.
	 * @param {String} propertyName The name of the property.
	 */
	_attachEventDefaultValueMappings( formFieldSelector, propertyName )
	{
		const formField = DomHelper.querySelector( formFieldSelector );
		formField.inputEvent(
			( event ) =>
			{
				const value          = Number.parseInt( event.target.value );
				this[ propertyName ] = true === Number.isNaN( value )
					? String.empty
					: value
			}
		);
		formField.changeEvent(
			( event ) =>
			{
				const value          = Number.parseInt( event.target.value );
				this[ propertyName ] = true === Number.isNaN( value )
					? '0'
					: value
			}
		);
	}

	/**
	 * Adds all data bindings of the component.
	 */
	_addDataBindings()
	{
	}

	/**
	 * Adds all HTML form fields event handlers of the component.
	 */
	_addFormFieldsEventHandlers()
	{
	}

	/**
	 * Executes the component.
	 */
	execute()
	{
		this._addDataBindings();
		this._addFormFieldsEventHandlers();
	}
}
