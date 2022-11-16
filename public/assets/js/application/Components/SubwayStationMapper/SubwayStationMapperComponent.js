'use strict';

import ClickEvent from '../../../library/Dom/ClickEvent.js';
import DomHelper from '../../../library/Dom/DomHelper.js';
import BindableFormFieldProxy from '../../../library/Types/DataBindings/BindableFormFieldProxy.js';
import DataBindingInitializationDirection from '../../../library/Types/DataBindings/DataBindingInitializationDirection.js';
import Clipboard from '../../../library/Utilities/Clipboard.js';
import AbstractComponent from '../AbstractComponent.js';
import StationPositions from './Entities/StationPositions.js';
import PropertyNames from './Enumerations/PropertyNames.js';
import FormFieldSelectors from './Html/FormFieldSelectors.js';

class SubwayStationMapperComponent extends AbstractComponent
{
	#_stationPositions = new StationPositions();

	set [ PropertyNames.DIRECTION ]( value )
	{
		this.#setPropertyAndDataDirectionAttribute( PropertyNames.DIRECTION, value, FormFieldSelectors.DIRECTION );
	}

	set [ PropertyNames.CALCULATED_HEAD_HALL ]( value )
	{
		this.#setPropertyAndDataClipboardAttribute( PropertyNames.CALCULATED_HEAD_HALL, value, FormFieldSelectors.CALCULATED_HEAD_HALL );
	}

	set [ PropertyNames.CALCULATED_CONCOURSE_HALL ]( value )
	{
		this.#setPropertyAndDataClipboardAttribute( PropertyNames.CALCULATED_CONCOURSE_HALL, value, FormFieldSelectors.CALCULATED_CONCOURSE_HALL );
	}

	set [ PropertyNames.CALCULATED_ARRIVAL_BELL ]( value )
	{
		this.#setPropertyAndDataClipboardAttribute( PropertyNames.CALCULATED_ARRIVAL_BELL, value, FormFieldSelectors.CALCULATED_ARRIVAL_BELL );
	}

	set [ PropertyNames.CALCULATED_DEPARTURE_BELL ]( value )
	{
		this.#setPropertyAndDataClipboardAttribute( PropertyNames.CALCULATED_DEPARTURE_BELL, value, FormFieldSelectors.CALCULATED_DEPARTURE_BELL );
	}

	set [ PropertyNames.HEAD_1_NAME ]( value )
	{
		this.#setPropertyAndDataClipboardAttribute( PropertyNames.HEAD_1_NAME, value, FormFieldSelectors.HEAD_1_NAME );
	}

	set [ PropertyNames.HEAD_2_NAME ]( value )
	{
		this.#setPropertyAndDataClipboardAttribute( PropertyNames.HEAD_2_NAME, value, FormFieldSelectors.HEAD_2_NAME );
	}

	set [ PropertyNames.CONCOURSE_NAME ]( value )
	{
		this.#setPropertyAndDataClipboardAttribute( PropertyNames.CONCOURSE_NAME, value, FormFieldSelectors.CONCOURSE_NAME );
	}

	set [ PropertyNames.STAIRS_PORT_NAME ]( value )
	{
		this.#setPropertyAndDataClipboardAttribute( PropertyNames.STAIRS_PORT_NAME, value, FormFieldSelectors.STAIRS_PORT_NAME );
	}

	set [ PropertyNames.STAIRS_NAME ]( value )
	{
		this.#setPropertyAndDataClipboardAttribute( PropertyNames.STAIRS_NAME, value, FormFieldSelectors.STAIRS_NAME );
	}

	set [ PropertyNames.STAIRS_ENTRANCE_NAME ]( value )
	{
		this.#setPropertyAndDataClipboardAttribute( PropertyNames.STAIRS_ENTRANCE_NAME, value, FormFieldSelectors.STAIRS_ENTRANCE_NAME );
	}

	set [ PropertyNames.STAIRWAY_LEFT_NAME ]( value )
	{
		this.#setPropertyAndDataClipboardAttribute( PropertyNames.STAIRWAY_LEFT_NAME, value, FormFieldSelectors.STAIRWAY_LEFT_NAME );
	}

	set [ PropertyNames.STAIRWAY_RIGHT_NAME ]( value )
	{
		this.#setPropertyAndDataClipboardAttribute( PropertyNames.STAIRWAY_RIGHT_NAME, value, FormFieldSelectors.STAIRWAY_RIGHT_NAME );
	}

	#setPropertyAndDataDirectionAttribute( propertyName, value, formFieldSelector )
	{
		const element = DomHelper.querySelector( formFieldSelector );
		element.setAttribute( 'data-direction', value );
	}

	#setPropertyAndDataClipboardAttribute( propertyName, value, formFieldSelector )
	{
		const element = DomHelper.querySelector( formFieldSelector );
		element.setAttribute( 'data-clipboard', value );
	}

	_addDataBindings()
	{
		this.#_stationPositions.dataBindings.add( PropertyNames.DIRECTION, BindableFormFieldProxy.with_selector( FormFieldSelectors.DIRECTION ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CURRENT_POSITION_X, BindableFormFieldProxy.with_selector( FormFieldSelectors.CURRENT_POSITION_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CURRENT_POSITION_Y, BindableFormFieldProxy.with_selector( FormFieldSelectors.CURRENT_POSITION_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CURRENT_POSITION_Z, BindableFormFieldProxy.with_selector( FormFieldSelectors.CURRENT_POSITION_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_HEAD_HALL, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_HEAD_HALL ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_CONCOURSE_HALL, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_CONCOURSE_HALL ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_ARRIVAL_BELL, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_ARRIVAL_BELL ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_DEPARTURE_BELL, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_DEPARTURE_BELL ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_ROTATION, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_ROTATION ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_HEAD_1_X, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_HEAD_1_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_HEAD_1_Y, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_HEAD_1_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_HEAD_1_Z, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_HEAD_1_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_HEAD_2_X, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_HEAD_2_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_HEAD_2_Y, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_HEAD_2_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_HEAD_2_Z, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_HEAD_2_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_CONCOURSE_X, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_CONCOURSE_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_CONCOURSE_Y, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_CONCOURSE_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_CONCOURSE_Z, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_CONCOURSE_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_PORT_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_PORT_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_PORT_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_STAIRS_X, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_STAIRS_Y, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_STAIRS_Z, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_ENTRANCE_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_LEFT_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_LEFT_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_LEFT_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_RIGHT_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z, BindableFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( PropertyNames.DIRECTION, this.#_stationPositions, PropertyNames.DIRECTION );
		this.dataBindings.add( PropertyNames.CALCULATED_HEAD_HALL, this.#_stationPositions, PropertyNames.CALCULATED_HEAD_HALL );
		this.dataBindings.add( PropertyNames.CALCULATED_CONCOURSE_HALL, this.#_stationPositions, PropertyNames.CALCULATED_CONCOURSE_HALL );
		this.dataBindings.add( PropertyNames.CALCULATED_ARRIVAL_BELL, this.#_stationPositions, PropertyNames.CALCULATED_ARRIVAL_BELL );
		this.dataBindings.add( PropertyNames.CALCULATED_DEPARTURE_BELL, this.#_stationPositions, PropertyNames.CALCULATED_DEPARTURE_BELL );
		this.dataBindings.add( PropertyNames.HEAD_1_NAME, this.#_stationPositions, PropertyNames.HEAD_1_NAME );
		this.dataBindings.add( PropertyNames.HEAD_2_NAME, this.#_stationPositions, PropertyNames.HEAD_2_NAME );
		this.dataBindings.add( PropertyNames.CONCOURSE_NAME, this.#_stationPositions, PropertyNames.CONCOURSE_NAME );
		this.dataBindings.add( PropertyNames.STAIRS_PORT_NAME, this.#_stationPositions, PropertyNames.STAIRS_PORT_NAME );
		this.dataBindings.add( PropertyNames.STAIRS_NAME, this.#_stationPositions, PropertyNames.STAIRS_NAME );
		this.dataBindings.add( PropertyNames.STAIRS_ENTRANCE_NAME, this.#_stationPositions, PropertyNames.STAIRS_ENTRANCE_NAME );
		this.dataBindings.add( PropertyNames.STAIRWAY_LEFT_NAME, this.#_stationPositions, PropertyNames.STAIRWAY_LEFT_NAME );
		this.dataBindings.add( PropertyNames.STAIRWAY_RIGHT_NAME, this.#_stationPositions, PropertyNames.STAIRWAY_RIGHT_NAME );
	}

	_addFormFieldsEventHandlers()
	{
		this._attachEventHandlers( FormFieldSelectors.DIRECTION, PropertyNames.DIRECTION );
		this._attachEventHandlers( FormFieldSelectors.CURRENT_POSITION_X, PropertyNames.CURRENT_POSITION_X );
		this._attachEventHandlers( FormFieldSelectors.CURRENT_POSITION_Y, PropertyNames.CURRENT_POSITION_Y );
		this._attachEventHandlers( FormFieldSelectors.CURRENT_POSITION_Z, PropertyNames.CURRENT_POSITION_Z );
		this._attachEventHandlers( FormFieldSelectors.CALCULATED_ROTATION, PropertyNames.CALCULATED_ROTATION );

		const eventHandlerAdder = ( formFieldSelector ) =>
		{
			DomHelper.addEventHandlerBySelector(
				formFieldSelector,
				ClickEvent.EVENT_NAME,
				( event ) =>
				{
					Clipboard.copyText(
						event.target.getAttribute( 'data-clipboard' )
					);
				}
			);
		}

		eventHandlerAdder( FormFieldSelectors.CALCULATED_HEAD_HALL );
		eventHandlerAdder( FormFieldSelectors.CALCULATED_CONCOURSE_HALL );
		eventHandlerAdder( FormFieldSelectors.CALCULATED_ARRIVAL_BELL );
		eventHandlerAdder( FormFieldSelectors.CALCULATED_DEPARTURE_BELL );
		eventHandlerAdder( FormFieldSelectors.HEAD_1_NAME );
		eventHandlerAdder( FormFieldSelectors.HEAD_2_NAME );
		eventHandlerAdder( FormFieldSelectors.CONCOURSE_NAME );
		eventHandlerAdder( FormFieldSelectors.STAIRS_PORT_NAME );
		eventHandlerAdder( FormFieldSelectors.STAIRS_NAME );
		eventHandlerAdder( FormFieldSelectors.STAIRS_ENTRANCE_NAME );
		eventHandlerAdder( FormFieldSelectors.STAIRWAY_LEFT_NAME );
		eventHandlerAdder( FormFieldSelectors.STAIRWAY_RIGHT_NAME );
	}
}

export default SubwayStationMapperComponent;
