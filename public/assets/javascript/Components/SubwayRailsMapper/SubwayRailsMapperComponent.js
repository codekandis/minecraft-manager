'use strict';

import { BindableHtmlElementProxy } from '../../../libraries/jotunheim/Dom/DataBindings/BindableHtmlElementProxy.js';
import { DomHelper } from '../../../libraries/jotunheim/Dom/DomHelper.js';
import { BooleanString } from '../../../libraries/jotunheim/Types/BooleanString.js';
import { DataBindingInitializationDirection } from '../../../libraries/jotunheim/Types/DataBindings/DataBindingInitializationDirection.js';
import { PropertyChangedEvent } from '../../../libraries/jotunheim/Types/DataBindings/PropertyChangedEvent.js';
import { AbstractComponent } from '../AbstractComponent.js';
import { LanternPositions } from './Entities/LanternPositions.js';
import { LanternPositionsPropertyNames } from './Enumerations/LanternPositionsPropertyNames.js';
import { FormFieldSelectors } from './Html/FormFieldSelectors.js';
import { ApiAjaxController } from './Net/Http/ApiAjaxController.js';

/**
 * Represents the subway rails mapper component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SubwayRailsMapperComponent extends AbstractComponent
{
	/**
	 * Stores the lantern positions.
	 * @type {LanternPositions}
	 */
	#_lanternPositions;

	/**
	 * Constructor method.
	 * @param {Settings} settings The settings of the javascript.
	 */
	constructor( settings )
	{
		super( settings );

		this.#initialize();
	}

	/**
	 * Sets if the current X position is valid.
	 * @param {Boolean} value True if the current X position is valid, otherwise false.
	 */
	set [ LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID ]( value )
	{
		this.#setPropertyValueAndDataIsValidAttribute( LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID, FormFieldSelectors.CURRENT_POSITION_X, value );
	}

	/**
	 * Sets if the current Y position is valid.
	 * @param {Boolean} value True if the current Y position is valid, otherwise false.
	 */
	set [ LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID ]( value )
	{
		this.#setPropertyValueAndDataIsValidAttribute( LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID, FormFieldSelectors.CURRENT_POSITION_Y, value );
	}

	/**
	 * Sets if the current Z position is valid.
	 * @param {Boolean} value True if the current Z position is valid, otherwise false.
	 */
	set [ LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID ]( value )
	{
		this.#setPropertyValueAndDataIsValidAttribute( LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID, FormFieldSelectors.CURRENT_POSITION_Z, value );
	}

	/**
	 * Initializes the component.
	 */
	#initialize()
	{
		this.#_lanternPositions = new LanternPositions( this.__settings );

		this.#readSubwayRailsMapperFromApi();
	}

	/**
	 * Sets the value of a property and its related HTML form field `data-is-valid` attribute.
	 * @param {String} propertyName The name of the property.
	 * @param {String} formFieldSelector The selector of the HTML form field.
	 * @param {*} value The value to set.
	 */
	#setPropertyValueAndDataIsValidAttribute( propertyName, formFieldSelector, value )
	{
		const element = DomHelper.querySelector( formFieldSelector );

		switch ( value )
		{
			case false:
			{
				element.setAttribute( 'data-value-is-valid', BooleanString.FALSE );
				break;
			}
			case true:
			{
				element.setAttribute( 'data-value-is-valid', BooleanString.TRUE );
				break;
			}
		}
	}

	/**
	 * Reads the lantern positions from the API.
	 */
	#readSubwayRailsMapperFromApi()
	{
		( new ApiAjaxController() )
			.readLanternPositions()
			.then(
				( lanternPositions ) =>
				{
					this.#_lanternPositions[ LanternPositionsPropertyNames.START_POSITION_X ] = lanternPositions[ LanternPositionsPropertyNames.START_POSITION_X ];
					this.#_lanternPositions[ LanternPositionsPropertyNames.START_POSITION_Y ] = lanternPositions[ LanternPositionsPropertyNames.START_POSITION_Y ];
					this.#_lanternPositions[ LanternPositionsPropertyNames.START_POSITION_Z ] = lanternPositions[ LanternPositionsPropertyNames.START_POSITION_Z ];

					this.#_lanternPositions.propertyChangedEvent( this.#lanternPositions_propertyChanged );
				}
			);
	}

	/**
	 * Writes the lantern positions to the API.
	 */
	#writeSubwayRailsMapperToApi()
	{
		( new ApiAjaxController() )
			.writeLanternPositions( this.#_lanternPositions )
	}

	/**
	 * @inheritDoc
	 */
	_addDataBindings()
	{
		this.#_lanternPositions.dataBindings.add( LanternPositionsPropertyNames.START_POSITION_X, BindableHtmlElementProxy.with_selector( FormFieldSelectors.START_POSITION_X ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_lanternPositions.dataBindings.add( LanternPositionsPropertyNames.START_POSITION_Y, BindableHtmlElementProxy.with_selector( FormFieldSelectors.START_POSITION_Y ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_lanternPositions.dataBindings.add( LanternPositionsPropertyNames.START_POSITION_Z, BindableHtmlElementProxy.with_selector( FormFieldSelectors.START_POSITION_Z ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_lanternPositions.dataBindings.add( LanternPositionsPropertyNames.CURRENT_POSITION_X, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CURRENT_POSITION_X ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_lanternPositions.dataBindings.add( LanternPositionsPropertyNames.CURRENT_POSITION_Y, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CURRENT_POSITION_Y ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_lanternPositions.dataBindings.add( LanternPositionsPropertyNames.CURRENT_POSITION_Z, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CURRENT_POSITION_Z ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_lanternPositions.dataBindings.add( LanternPositionsPropertyNames.CALCULATED_POSITION_X_NEGATIVE, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_POSITION_X_NEGATIVE ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_lanternPositions.dataBindings.add( LanternPositionsPropertyNames.CALCULATED_POSITION_X_POSITIVE, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_POSITION_X_POSITIVE ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_lanternPositions.dataBindings.add( LanternPositionsPropertyNames.CALCULATED_POSITION_Y_NEGATIVE, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_POSITION_Y_NEGATIVE ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_lanternPositions.dataBindings.add( LanternPositionsPropertyNames.CALCULATED_POSITION_Y_POSITIVE, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_POSITION_Y_POSITIVE ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_lanternPositions.dataBindings.add( LanternPositionsPropertyNames.CALCULATED_POSITION_Z_NEGATIVE, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_POSITION_Z_NEGATIVE ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_lanternPositions.dataBindings.add( LanternPositionsPropertyNames.CALCULATED_POSITION_Z_POSITIVE, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_POSITION_Z_POSITIVE ), 'value', DataBindingInitializationDirection.BINDER );

		this.dataBindings.add( LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID, this.#_lanternPositions, LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID, this.#_lanternPositions, LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID, this.#_lanternPositions, LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID, DataBindingInitializationDirection.BINDABLE );
	}

	/**
	 * @inheritDoc
	 */
	_addFormFieldsEventHandlers()
	{
		this._attachEventDefaultValueMappings( FormFieldSelectors.START_POSITION_X, LanternPositionsPropertyNames.START_POSITION_X );
		this._attachEventDefaultValueMappings( FormFieldSelectors.START_POSITION_Y, LanternPositionsPropertyNames.START_POSITION_Y );
		this._attachEventDefaultValueMappings( FormFieldSelectors.START_POSITION_Z, LanternPositionsPropertyNames.START_POSITION_Z );
		this._attachEventDefaultValueMappings( FormFieldSelectors.CURRENT_POSITION_X, LanternPositionsPropertyNames.CURRENT_POSITION_X );
		this._attachEventDefaultValueMappings( FormFieldSelectors.CURRENT_POSITION_Y, LanternPositionsPropertyNames.CURRENT_POSITION_Y );
		this._attachEventDefaultValueMappings( FormFieldSelectors.CURRENT_POSITION_Z, LanternPositionsPropertyNames.CURRENT_POSITION_Z );
	}

	/**
	 * Handles the property changed event of the lantern positions.
	 * @param {PropertyChangedEvent} event The property changed event which will be handled.
	 */
	#lanternPositions_propertyChanged = ( event ) =>
	{
		switch ( event.detail.eventArguments.propertyName )
		{
			case LanternPositionsPropertyNames.START_POSITION_X:
			case LanternPositionsPropertyNames.START_POSITION_Y:
			case LanternPositionsPropertyNames.START_POSITION_Z:
			{
				this.#writeSubwayRailsMapperToApi();

				break;
			}
		}
	}
}
