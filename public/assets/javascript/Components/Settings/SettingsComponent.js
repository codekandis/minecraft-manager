'use strict';

import { BindableHtmlElementProxy } from '../../../libraries/jotunheim/Dom/DataBindings/BindableHtmlElementProxy.js';
import { DataBindingInitializationDirection } from '../../../libraries/jotunheim/Types/DataBindings/DataBindingInitializationDirection.js';
import { PropertyChangedEvent } from '../../../libraries/jotunheim/Types/DataBindings/PropertyChangedEvent.js';
import { AbstractComponent } from '../AbstractComponent.js';
import { SettingsPropertyNames } from './Enumerations/SettingsPropertyNames.js';
import { FormFieldSelectors } from './Html/FormFieldSelectors.js';
import { ApiAjaxController } from './Net/Http/ApiAjaxController.js';

/**
 * Represents the settings component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SettingsComponent extends AbstractComponent
{
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
		this.#readSettingsFromApi();
	}

	/**
	 * Reads the applications' settings from the API.
	 */
	#readSettingsFromApi()
	{
		( new ApiAjaxController() )
			.readSettings()
			.then(
				( settings ) =>
				{
					this.__settings.chunkSize        = settings[ SettingsPropertyNames.CHUNKSIZE ];
					this.__settings.initialPositionX = settings[ SettingsPropertyNames.INITIAL_POSITION_X ];
					this.__settings.initialPositionY = settings[ SettingsPropertyNames.INITIAL_POSITION_Y ];
					this.__settings.initialPositionZ = settings[ SettingsPropertyNames.INITIAL_POSITION_Z ];

					this.__settings.propertyChangedEvent( this.#setting_propertyChanged );
				}
			);
	}

	/**
	 * Write the applications' settings to the API.
	 */
	#writeSettingsToApi()
	{
		( new ApiAjaxController() )
			.writeSettings( this.__settings );
	}

	/**
	 * @inheritDoc
	 */
	_addDataBindings()
	{
		this.__settings.dataBindings.add( SettingsPropertyNames.CHUNKSIZE, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CHUNKSIZE ), 'value', DataBindingInitializationDirection.BINDER );
		this.__settings.dataBindings.add( SettingsPropertyNames.INITIAL_POSITION_X, BindableHtmlElementProxy.with_selector( FormFieldSelectors.INITIAL_POSITION_X ), 'value', DataBindingInitializationDirection.BINDER );
		this.__settings.dataBindings.add( SettingsPropertyNames.INITIAL_POSITION_Y, BindableHtmlElementProxy.with_selector( FormFieldSelectors.INITIAL_POSITION_Y ), 'value', DataBindingInitializationDirection.BINDER );
		this.__settings.dataBindings.add( SettingsPropertyNames.INITIAL_POSITION_Z, BindableHtmlElementProxy.with_selector( FormFieldSelectors.INITIAL_POSITION_Z ), 'value', DataBindingInitializationDirection.BINDER );
	}

	/**
	 * @inheritDoc
	 */
	_addFormFieldsEventHandlers()
	{
		this._attachEventDefaultValueMappings( FormFieldSelectors.CHUNKSIZE, SettingsPropertyNames.CHUNKSIZE );
		this._attachEventDefaultValueMappings( FormFieldSelectors.INITIAL_POSITION_X, SettingsPropertyNames.INITIAL_POSITION_X );
		this._attachEventDefaultValueMappings( FormFieldSelectors.INITIAL_POSITION_Y, SettingsPropertyNames.INITIAL_POSITION_Y );
		this._attachEventDefaultValueMappings( FormFieldSelectors.INITIAL_POSITION_Z, SettingsPropertyNames.INITIAL_POSITION_Z );
	}

	/**
	 * Handles the property changed event of the applications' settings.
	 * @param {PropertyChangedEvent} event The property changed event which will be handled.
	 */
	#setting_propertyChanged = ( event ) =>
	{
		switch ( event.detail.eventArguments.propertyName )
		{
			case SettingsPropertyNames.CHUNKSIZE:
			case SettingsPropertyNames.INITIAL_POSITION_X:
			case SettingsPropertyNames.INITIAL_POSITION_Y:
			case SettingsPropertyNames.INITIAL_POSITION_Z:
			{
				this.#writeSettingsToApi();

				break;
			}
		}
	}
}
