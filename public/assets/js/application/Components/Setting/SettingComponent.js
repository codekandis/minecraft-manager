'use strict';

import DomHelper from '../../../library/Dom/DomHelper.js';
import BindableFormFieldProxy from '../../../library/Types/DataBindings/BindableFormFieldProxy.js';
import DataBindingInitializationDirection from '../../../library/Types/DataBindings/DataBindingInitializationDirection.js';
import PropertyChangedEvent from '../../../library/Types/DataBindings/PropertyChangedEvent.js';
import AbstractComponent from '../AbstractComponent.js';
import PropertyNames from './Enumerations/PropertyNames.js';
import FormFieldSelectors from './Html/FormFieldSelectors.js';
import ApiAjaxController from './Net/Http/ApiAjaxController.js';

class SettingComponent extends AbstractComponent
{
	constructor( setting )
	{
		super( setting );

		this.#initialize();
	}

	#initialize()
	{
		this.#readSettingFromApi();
	}

	#readSettingFromApi()
	{
		( new ApiAjaxController() )
			.readSetting()
			.then(
				( data ) =>
				{
					if ( null !== data )
					{
						this.__setting[ PropertyNames.CHUNKSIZE ] = data.setting[ PropertyNames.CHUNKSIZE ];

						DomHelper.addEventHandler(
							this.__setting,
							PropertyChangedEvent.EVENT_NAME,
							( event ) =>
							{
								this.#setting_propertyChanged( event );
							}
						);
					}
				}
			);
	}

	#writeSettingToApi()
	{
		const writableSetting = {
			[ PropertyNames.CHUNKSIZE ]: this.__setting[ '#_' + PropertyNames.CHUNKSIZE ]
		};

		( new ApiAjaxController() )
			.writeSetting( writableSetting );
	}

	_addDataBindings()
	{
		this.__setting.dataBindings.add( PropertyNames.CHUNKSIZE, BindableFormFieldProxy.with_selector( FormFieldSelectors.CHUNKSIZE ), 'value', DataBindingInitializationDirection.BINDABLE );
	}

	_addFormFieldsEventHandlers()
	{
		this._attachEventHandlers( FormFieldSelectors.CHUNKSIZE, PropertyNames.CHUNKSIZE );
	}

	#setting_propertyChanged( event )
	{
		switch ( event.detail.eventArguments.propertyName )
		{
			case PropertyNames.CHUNKSIZE:
			{
				this.#writeSettingToApi();

				break;
			}
		}
	}
}

export default SettingComponent;
