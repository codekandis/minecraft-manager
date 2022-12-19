'use strict';

import DomHelper from '../../../library/Dom/DomHelper.js';
import BoolStrings from '../../../library/Types/BoolStrings.js';
import BindableFormFieldProxy from '../../../library/Types/DataBindings/BindableFormFieldProxy.js';
import DataBindingInitializationDirection from '../../../library/Types/DataBindings/DataBindingInitializationDirection.js';
import PropertyChangedEvent from '../../../library/Types/DataBindings/PropertyChangedEvent.js';
import AbstractComponent from '../AbstractComponent.js';
import LanternPositions from './Entities/LanternPositions.js';
import PropertyNames from './Enumerations/PropertyNames.js';
import FormFieldSelectors from './Html/FormFieldSelectors.js';
import ApiAjaxController from './Net/Http/ApiAjaxController.js';

class SubwayRailsMapperComponent extends AbstractComponent
{
	#_lanternPositions = undefined;

	constructor( setting )
	{
		super( setting );

		this.#initialize();
	}

	set [ PropertyNames.IS_CURRENT_POSITION_X_VALID ]( value )
	{
		this.#setPropertyAndDataAttribute( PropertyNames.IS_CURRENT_POSITION_X_VALID, value, FormFieldSelectors.CURRENT_POSITION_X );
	}

	set [ PropertyNames.IS_CURRENT_POSITION_Y_VALID ]( value )
	{
		this.#setPropertyAndDataAttribute( PropertyNames.IS_CURRENT_POSITION_Y_VALID, value, FormFieldSelectors.CURRENT_POSITION_Y );
	}

	set [ PropertyNames.IS_CURRENT_POSITION_Z_VALID ]( value )
	{
		this.#setPropertyAndDataAttribute( PropertyNames.IS_CURRENT_POSITION_Z_VALID, value, FormFieldSelectors.CURRENT_POSITION_Z );
	}

	#setPropertyAndDataAttribute( propertyName, value, formFieldSelector )
	{
		const element = DomHelper.querySelector( formFieldSelector );

		switch ( value )
		{
			case false:
			{
				element.setAttribute( 'data-value-is-valid', BoolStrings.FALSE );
				break;
			}
			case true:
			{
				element.setAttribute( 'data-value-is-valid', BoolStrings.TRUE );
				break;
			}
		}
	}

	#initialize()
	{
		this.#_lanternPositions = new LanternPositions( this.__setting )

		this.#readSubwayRailsMapperFromApi();
	}

	#readSubwayRailsMapperFromApi()
	{
		( new ApiAjaxController() )
			.readSubwayRailsMapper()
			.then(
				( data ) =>
				{
					if ( null !== data )
					{
						this.#_lanternPositions[ PropertyNames.START_POSITION_X ] = data.subwayRailsMapper[ PropertyNames.START_POSITION_X ];
						this.#_lanternPositions[ PropertyNames.START_POSITION_Y ] = data.subwayRailsMapper[ PropertyNames.START_POSITION_Y ];
						this.#_lanternPositions[ PropertyNames.START_POSITION_Z ] = data.subwayRailsMapper[ PropertyNames.START_POSITION_Z ];

						DomHelper.addEventHandler(
							this.#_lanternPositions,
							PropertyChangedEvent.EVENT_NAME,
							( event ) =>
							{
								this.#lanternPositions_propertyChanged( event );
							}
						);
					}
				}
			);
	}

	#writeSubwayRailsMapperToApi()
	{
		const writableSubwayRailsMapper = {
			[ PropertyNames.START_POSITION_X ]: this.#_lanternPositions[ '#_' + PropertyNames.START_POSITION_X ],
			[ PropertyNames.START_POSITION_Y ]: this.#_lanternPositions[ '#_' + PropertyNames.START_POSITION_Y ],
			[ PropertyNames.START_POSITION_Z ]: this.#_lanternPositions[ '#_' + PropertyNames.START_POSITION_Z ]
		};

		( new ApiAjaxController() )
			.writeSubwayRailsMapper( writableSubwayRailsMapper );
	}

	_addDataBindings()
	{
		this.#_lanternPositions.dataBindings.add( PropertyNames.START_POSITION_X, BindableFormFieldProxy.with_selector( FormFieldSelectors.START_POSITION_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_lanternPositions.dataBindings.add( PropertyNames.START_POSITION_Y, BindableFormFieldProxy.with_selector( FormFieldSelectors.START_POSITION_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_lanternPositions.dataBindings.add( PropertyNames.START_POSITION_Z, BindableFormFieldProxy.with_selector( FormFieldSelectors.START_POSITION_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_lanternPositions.dataBindings.add( PropertyNames.CURRENT_POSITION_X, BindableFormFieldProxy.with_selector( FormFieldSelectors.CURRENT_POSITION_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_lanternPositions.dataBindings.add( PropertyNames.CURRENT_POSITION_Y, BindableFormFieldProxy.with_selector( FormFieldSelectors.CURRENT_POSITION_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_lanternPositions.dataBindings.add( PropertyNames.CURRENT_POSITION_Z, BindableFormFieldProxy.with_selector( FormFieldSelectors.CURRENT_POSITION_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_lanternPositions.dataBindings.add( PropertyNames.CALCULATED_POSITION_XN, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_POSITION_XN ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_lanternPositions.dataBindings.add( PropertyNames.CALCULATED_POSITION_XP, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_POSITION_XP ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_lanternPositions.dataBindings.add( PropertyNames.CALCULATED_POSITION_YN, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_POSITION_YN ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_lanternPositions.dataBindings.add( PropertyNames.CALCULATED_POSITION_YP, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_POSITION_YP ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_lanternPositions.dataBindings.add( PropertyNames.CALCULATED_POSITION_ZN, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_POSITION_ZN ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_lanternPositions.dataBindings.add( PropertyNames.CALCULATED_POSITION_ZP, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_POSITION_ZP ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( PropertyNames.IS_CURRENT_POSITION_X_VALID, this.#_lanternPositions, PropertyNames.IS_CURRENT_POSITION_X_VALID );
		this.dataBindings.add( PropertyNames.IS_CURRENT_POSITION_Y_VALID, this.#_lanternPositions, PropertyNames.IS_CURRENT_POSITION_Y_VALID );
		this.dataBindings.add( PropertyNames.IS_CURRENT_POSITION_Z_VALID, this.#_lanternPositions, PropertyNames.IS_CURRENT_POSITION_Z_VALID );
	}

	_addFormFieldsEventHandlers()
	{
		this._attachEventHandlers( FormFieldSelectors.START_POSITION_X, PropertyNames.START_POSITION_X );
		this._attachEventHandlers( FormFieldSelectors.START_POSITION_Y, PropertyNames.START_POSITION_Y );
		this._attachEventHandlers( FormFieldSelectors.START_POSITION_Z, PropertyNames.START_POSITION_Z );
		this._attachEventHandlers( FormFieldSelectors.CURRENT_POSITION_X, PropertyNames.CURRENT_POSITION_X );
		this._attachEventHandlers( FormFieldSelectors.CURRENT_POSITION_Y, PropertyNames.CURRENT_POSITION_Y );
		this._attachEventHandlers( FormFieldSelectors.CURRENT_POSITION_Z, PropertyNames.CURRENT_POSITION_Z );
	}

	#lanternPositions_propertyChanged( event )
	{
		switch ( event.detail.eventArguments.propertyName )
		{
			case PropertyNames.START_POSITION_X:
			case PropertyNames.START_POSITION_Y:
			case PropertyNames.START_POSITION_Z:
			{
				this.#writeSubwayRailsMapperToApi();

				break;
			}
		}
	}
}

export default SubwayRailsMapperComponent;
