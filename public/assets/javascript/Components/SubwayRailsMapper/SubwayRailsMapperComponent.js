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
			lanternPositionsPropertyName: LanternPositionsPropertyNames.IS_CURRENT_X_VALID,
			formFieldSelector:            FormFieldSelectors.CURRENT_X
		},
		{
			lanternPositionsPropertyName: LanternPositionsPropertyNames.IS_CURRENT_Y_VALID,
			formFieldSelector:            FormFieldSelectors.CURRENT_Y
		},
		{
			lanternPositionsPropertyName: LanternPositionsPropertyNames.IS_CURRENT_Z_VALID,
			formFieldSelector:            FormFieldSelectors.CURRENT_Z
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
		this.#_lanternPositions.propertyChangedEvent( this.#lanternPositions_propertyChanged );
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
					this.#_lanternPositions.currentX = lanternPositions[ LanternPositionsPropertyNames.CURRENT_X ];
					this.#_lanternPositions.currentY = lanternPositions[ LanternPositionsPropertyNames.CURRENT_Y ];
					this.#_lanternPositions.currentZ = lanternPositions[ LanternPositionsPropertyNames.CURRENT_Z ];
				}
			);
	}

	/**
	 * Writes the lantern positions to the API.
	 */
	#writeLanternPositionsToApi()
	{
		if ( true === this.__isExecuting )
		{
			( new ApiAjaxController() )
				.writeLanternPositions( this.#_lanternPositions )
		}
	}

	/**
	 * @inheritDoc
	 */
	_addDataBindings()
	{
		this.#_lanternPositions.dataBindings.add( LanternPositionsPropertyNames.CURRENT_X, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CURRENT_X ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_lanternPositions.dataBindings.add( LanternPositionsPropertyNames.CURRENT_Y, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CURRENT_Y ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_lanternPositions.dataBindings.add( LanternPositionsPropertyNames.CURRENT_Z, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CURRENT_Z ), 'value', DataBindingInitializationDirection.BINDER );
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
		this._attachEventDefaultValueMappings( FormFieldSelectors.CURRENT_X, LanternPositionsPropertyNames.CURRENT_X );
		this._attachEventDefaultValueMappings( FormFieldSelectors.CURRENT_Y, LanternPositionsPropertyNames.CURRENT_Y );
		this._attachEventDefaultValueMappings( FormFieldSelectors.CURRENT_Z, LanternPositionsPropertyNames.CURRENT_Z );

		this._addWheelEventHandler( FormFieldSelectors.CURRENT_X, this.#_lanternPositions, LanternPositionsPropertyNames.CURRENT_X );
		this._addWheelEventHandler( FormFieldSelectors.CURRENT_Y, this.#_lanternPositions, LanternPositionsPropertyNames.CURRENT_Y );
		this._addWheelEventHandler( FormFieldSelectors.CURRENT_Z, this.#_lanternPositions, LanternPositionsPropertyNames.CURRENT_Z );
	}

	/**
	 * @inheritDoc
	 */
	execute()
	{
		super.execute();

		this.#readLanternPositionsFromApi();
		this._toggleIsExecuting();
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
			case LanternPositionsPropertyNames.CURRENT_X:
			case LanternPositionsPropertyNames.CURRENT_Y:
			case LanternPositionsPropertyNames.CURRENT_Z:
			{
				this.#writeLanternPositionsToApi();

				break;
			}
			case LanternPositionsPropertyNames.IS_CURRENT_X_VALID:
			case LanternPositionsPropertyNames.IS_CURRENT_Y_VALID:
			case LanternPositionsPropertyNames.IS_CURRENT_Z_VALID:
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
