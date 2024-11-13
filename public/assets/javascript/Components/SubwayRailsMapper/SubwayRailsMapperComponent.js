'use strict';

import { Collection } from '../../../libraries/jotunheim/Collections/Collection.js';
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
	 * Stores the lantern positions property names to form field selector mappings.
	 * @type {Collection}
	 */
	#_lanternPositionsPropertyNameFormFieldSelectorMappings = new Collection(
		{
			lanternPositionsPropertyName: LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID,
			formFieldSelector:            FormFieldSelectors.CURRENT_POSITION_X
		},
		{
			lanternPositionsPropertyName: LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID,
			formFieldSelector:            FormFieldSelectors.CURRENT_POSITION_Y
		},
		{
			lanternPositionsPropertyName: LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID,
			formFieldSelector:            FormFieldSelectors.CURRENT_POSITION_Z
		}
	);

	/**
	 * Stores the lantern positions.
	 * @type {LanternPositions}
	 */
	#_lanternPositions;

	/**
	 * Constructor method.
	 * @param {Settings} settings The applications' settings.
	 */
	constructor( settings )
	{
		super( settings );

		this.#initialize();
	}

	/**
	 * Initializes the component.
	 */
	#initialize()
	{
		this.#_lanternPositions = new LanternPositions( this.__settings );

		this.#readLanternPositionsFromApi();
	}

	/**
	 * Sets the value of a property and its related HTML form field `data-is-valid` attribute.
	 * @param {String} formFieldSelector The selector of the HTML form field.
	 * @param {*} value The value to set.
	 */
	#setPropertyValueAndDataIsValidAttribute( formFieldSelector, value )
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
	#readLanternPositionsFromApi()
	{
		( new ApiAjaxController() )
			.readLanternPositions()
			.then(
				( lanternPositions ) =>
				{
					this.#_lanternPositions.startPositionX = lanternPositions[ LanternPositionsPropertyNames.START_POSITION_X ];
					this.#_lanternPositions.startPositionY = lanternPositions[ LanternPositionsPropertyNames.START_POSITION_Y ];
					this.#_lanternPositions.startPositionZ = lanternPositions[ LanternPositionsPropertyNames.START_POSITION_Z ];

					this.#_lanternPositions.propertyChangedEvent( this.#lanternPositions_propertyChanged );
				}
			);
	}

	/**
	 * Writes the lantern positions to the API.
	 */
	#writeLanternPositionsToApi()
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
		const propertyName = event.detail.eventArguments.propertyName;

		switch ( propertyName )
		{
			case LanternPositionsPropertyNames.START_POSITION_X:
			case LanternPositionsPropertyNames.START_POSITION_Y:
			case LanternPositionsPropertyNames.START_POSITION_Z:
			{
				this.#writeLanternPositionsToApi();

				break;
			}
			case LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID:
			case LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID:
			case LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID:
			{
				const mapping = this.#_lanternPositionsPropertyNameFormFieldSelectorMappings.findFirstOrUndefinedBy(
					mapping => mapping.lanternPositionsPropertyName === propertyName
				);
				this.#setPropertyValueAndDataIsValidAttribute( mapping.formFieldSelector, this.#_lanternPositions[ propertyName ] );

				break;
			}
		}
	}
}
