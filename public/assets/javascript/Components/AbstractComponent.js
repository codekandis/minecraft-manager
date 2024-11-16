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
	 * Stores the applications' settings.
	 * @type {Settings}
	 */
	__settings;

	/**
	 * Constructor method.
	 * @param {Settings} settings The applications' settings.
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

	_addWheelEventHandler( formFieldSelector, data, propertyName )
	{
		const formField = DomHelper.querySelector( formFieldSelector );
		formField.wheelEvent(
			( event ) =>
			{
				event.preventDefault();

				switch ( true )
				{
					case event.deltaY <= 1:
					{
						data[ propertyName ] = data[ propertyName ] + 1;

						break;
					}
					case event.deltaY >= 1:
					{
						data[ propertyName ] = data[ propertyName ] - 1;

						break;
					}
				}
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
