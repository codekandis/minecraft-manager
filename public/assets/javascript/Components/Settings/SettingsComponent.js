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
					this.__settings.chunkSize = settings[ SettingsPropertyNames.CHUNKSIZE ];

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
	}

	/**
	 * @inheritDoc
	 */
	_addFormFieldsEventHandlers()
	{
		this._attachEventDefaultValueMappings( FormFieldSelectors.CHUNKSIZE, SettingsPropertyNames.CHUNKSIZE );
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
			{
				this.#writeSettingsToApi();

				break;
			}
		}
	}
}
