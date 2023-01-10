'use strict';

import { DomHelper } from '../../library/Dom/DomHelper.js';
import { AbstractBindable } from '../../library/Types/DataBindings/AbstractBindable.js';

/**
 * Represents the base class of any component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractComponent extends AbstractBindable
{
	/**
	 * Stores the settings of the application.
	 * @type {Settings}
	 */
	__settings;

	/**
	 * Constructor method.
	 * @param {Settings} settings The settings of the application.
	 */
	constructor( settings )
	{
		super();

		this.__settings = settings;
	}

	/**
	 * Attaches the event input and change event handlers to a formfield specified by a selector.
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
