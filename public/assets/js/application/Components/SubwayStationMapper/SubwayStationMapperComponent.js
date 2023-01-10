'use strict';

import { ClickEvent } from '../../../library/Dom/ClickEvent.js';
import { DomHelper } from '../../../library/Dom/DomHelper.js';
import { BindableHtmlFormFieldProxy } from '../../../library/Types/DataBindings/BindableHtmlFormFieldProxy.js';
import { DataBindingInitializationDirection } from '../../../library/Types/DataBindings/DataBindingInitializationDirection.js';
import { Clipboard } from '../../../library/Utilities/Clipboard.js';
import { AbstractComponent } from '../AbstractComponent.js';
import { StationPositions } from './Entities/StationPositions.js';
import { StationPositionsPropertyNames } from './Enumerations/StationPositionsPropertyNames.js';
import { FormFieldSelectors } from './Html/FormFieldSelectors.js';

/**
 * Represents the subway station mapper component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SubwayStationMapperComponent extends AbstractComponent
{
	/**
	 * Stores the station positions.
	 * @type {StationPositions}
	 */
	#_stationPositions = new StationPositions();

	/**
	 * Sets the direction of the station.
	 * @param {String} value The direction of the station.
	 */
	set [ StationPositionsPropertyNames.STATION_ORIENTATION ]( value )
	{
		this.#setPropertyValueAndDataDirectionAttribute( StationPositionsPropertyNames.STATION_ORIENTATION, value, FormFieldSelectors.STATION_ORIENTATION );
	}

	/**
	 * Sets the calculated station head command.
	 * @param {String} value The calculated station head command.
	 */
	set [ StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING ]( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING, value, FormFieldSelectors.CALCULATED_COMMAND_STATION_HEAD_MINING );
	}

	/**
	 * Sets the calculated concourse command.
	 * @param {String} value The calculated concourse command.
	 */
	set [ StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING ]( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING, value, FormFieldSelectors.CALCULATED_COMMAND_CONCOURSE_MINING );
	}

	/**
	 * Sets the calculated arrival bell command.
	 * @param {String} value The calculated arrival bell command.
	 */
	set [ StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL ]( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL, value, FormFieldSelectors.CALCULATED_COMMAND_ARRIVAL_BELL );
	}

	/**
	 * Sets the calculated departure bell command.
	 * @param {String} value The calculated departure bell command.
	 */
	set [ StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL ]( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL, value, FormFieldSelectors.CALCULATED_COMMAND_DEPARTURE_BELL );
	}

	/**
	 * Sets the station head 1 structure name.
	 * @param {String} value The station head 1 structure name.
	 */
	set [ StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_1 ]( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_1, value, FormFieldSelectors.STRUCTURE_NAME_STATION_HEAD_1 );
	}

	/**
	 * Sets the station head 2 structure name.
	 * @param {String} value The station head 2 structure name.
	 */
	set [ StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_2 ]( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_2, value, FormFieldSelectors.STRUCTURE_NAME_STATION_HEAD_2 );
	}

	/**
	 * Sets the concourse structure name.
	 * @param {String} value The concourse structure name.
	 */
	set [ StationPositionsPropertyNames.STRUCTURE_NAME_CONCOURSE ]( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.STRUCTURE_NAME_CONCOURSE, value, FormFieldSelectors.STRUCTURE_NAME_CONCOURSE );
	}

	/**
	 * Sets the stairs port structure name.
	 * @param {String} value The stairs port structure name.
	 */
	set [ StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_PORT ]( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_PORT, value, FormFieldSelectors.STRUCTURE_NAME_STAIRS_PORT );
	}

	/**
	 * Sets the stairs structure name.
	 * @param {String} value The calculated stairs structure name.
	 */
	set [ StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS ]( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS, value, FormFieldSelectors.STRUCTURE_NAME_STAIRS );
	}

	/**
	 * Sets the stairs entrance structure name.
	 * @param {String} value The stairs entrance structure name.
	 */
	set [ StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_ENTRANCE ]( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_ENTRANCE, value, FormFieldSelectors.STRUCTURE_NAME_STAIRS_ENTRANCE );
	}

	/**
	 * Sets the stairway left structure name.
	 * @param {String} value The stairway left structure name.
	 */
	set [ StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_LEFT ]( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_LEFT, value, FormFieldSelectors.STRUCTURE_NAME_STAIRWAY_LEFT );
	}

	/**
	 * Sets the stairway right structure name.
	 * @param {String} value The stairway right structure name.
	 */
	set [ StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_RIGHT ]( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_RIGHT, value, FormFieldSelectors.STRUCTURE_NAME_STAIRWAY_RIGHT );
	}

	/**
	 * Sets the value of a property and its related HTML form field `data-direction` attribute.
	 * @param {String} propertyName The name of the property.
	 * @param {String} formFieldSelector The selector of the HTML form field.
	 * @param {*} value The value to set.
	 */
	#setPropertyValueAndDataDirectionAttribute( propertyName, value, formFieldSelector )
	{
		const element = DomHelper.querySelector( formFieldSelector );
		element.setAttribute( 'data-direction', value );
	}

	/**
	 * Sets the value of a property and its related HTML form field `data-clipboard` attribute.
	 * @param {String} propertyName The name of the property.
	 * @param {String} formFieldSelector The selector of the HTML form field.
	 * @param {*} value The value to set.
	 */
	#setPropertyValueAndDataClipboardAttribute( propertyName, value, formFieldSelector )
	{
		const element = DomHelper.querySelector( formFieldSelector );
		element.setAttribute( 'data-clipboard', value );
	}

	/**
	 * @inheritDoc
	 */
	_addDataBindings()
	{
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.STATION_ORIENTATION, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.STATION_ORIENTATION ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CURRENT_POSITION_X, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CURRENT_POSITION_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CURRENT_POSITION_Y, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CURRENT_POSITION_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CURRENT_POSITION_Z, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CURRENT_POSITION_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_COMMAND_STATION_HEAD_MINING ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_COMMAND_CONCOURSE_MINING ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_COMMAND_ARRIVAL_BELL ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_COMMAND_DEPARTURE_BELL ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_STATION_ROTATION, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_STATION_ROTATION ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_X, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STATION_HEAD_1_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Y, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STATION_HEAD_1_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Z, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STATION_HEAD_1_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_X, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STATION_HEAD_2_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Y, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STATION_HEAD_2_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Z, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STATION_HEAD_2_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_X, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_CONCOURSE_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Y, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_CONCOURSE_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Z, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_CONCOURSE_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_PORT_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_PORT_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_PORT_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_X, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Y, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Z, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_ENTRANCE_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_LEFT_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_LEFT_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_LEFT_Z ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_RIGHT_X ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y ), 'value', DataBindingInitializationDirection.BINDABLE );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z, BindableHtmlFormFieldProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z ), 'value', DataBindingInitializationDirection.BINDABLE );

		this.dataBindings.add( StationPositionsPropertyNames.STATION_ORIENTATION, this.#_stationPositions, StationPositionsPropertyNames.STATION_ORIENTATION );
		this.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING, this.#_stationPositions, StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING );
		this.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING, this.#_stationPositions, StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING );
		this.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL, this.#_stationPositions, StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL );
		this.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL, this.#_stationPositions, StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL );
		this.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_1, this.#_stationPositions, StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_1 );
		this.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_2, this.#_stationPositions, StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_2 );
		this.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_NAME_CONCOURSE, this.#_stationPositions, StationPositionsPropertyNames.STRUCTURE_NAME_CONCOURSE );
		this.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_PORT, this.#_stationPositions, StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_PORT );
		this.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS, this.#_stationPositions, StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS );
		this.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_ENTRANCE, this.#_stationPositions, StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_ENTRANCE );
		this.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_LEFT, this.#_stationPositions, StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_LEFT );
		this.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_RIGHT, this.#_stationPositions, StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_RIGHT );
	}

	/**
	 * @inheritDoc
	 */
	_addFormFieldsEventHandlers()
	{
		this._attachEventDefaultValueMappings( FormFieldSelectors.STATION_ORIENTATION, StationPositionsPropertyNames.STATION_ORIENTATION );
		this._attachEventDefaultValueMappings( FormFieldSelectors.CURRENT_POSITION_X, StationPositionsPropertyNames.CURRENT_POSITION_X );
		this._attachEventDefaultValueMappings( FormFieldSelectors.CURRENT_POSITION_Y, StationPositionsPropertyNames.CURRENT_POSITION_Y );
		this._attachEventDefaultValueMappings( FormFieldSelectors.CURRENT_POSITION_Z, StationPositionsPropertyNames.CURRENT_POSITION_Z );
		this._attachEventDefaultValueMappings( FormFieldSelectors.CALCULATED_STATION_ROTATION, StationPositionsPropertyNames.CALCULATED_STATION_ROTATION );

		DomHelper.addEventHandlerBySelector( FormFieldSelectors.CALCULATED_COMMAND_STATION_HEAD_MINING, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
		DomHelper.addEventHandlerBySelector( FormFieldSelectors.CALCULATED_COMMAND_CONCOURSE_MINING, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
		DomHelper.addEventHandlerBySelector( FormFieldSelectors.CALCULATED_COMMAND_ARRIVAL_BELL, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
		DomHelper.addEventHandlerBySelector( FormFieldSelectors.CALCULATED_COMMAND_DEPARTURE_BELL, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
		DomHelper.addEventHandlerBySelector( FormFieldSelectors.STRUCTURE_NAME_STATION_HEAD_1, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
		DomHelper.addEventHandlerBySelector( FormFieldSelectors.STRUCTURE_NAME_STATION_HEAD_2, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
		DomHelper.addEventHandlerBySelector( FormFieldSelectors.STRUCTURE_NAME_CONCOURSE, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
		DomHelper.addEventHandlerBySelector( FormFieldSelectors.STRUCTURE_NAME_STAIRS_PORT, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
		DomHelper.addEventHandlerBySelector( FormFieldSelectors.STRUCTURE_NAME_STAIRS, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
		DomHelper.addEventHandlerBySelector( FormFieldSelectors.STRUCTURE_NAME_STAIRS_ENTRANCE, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
		DomHelper.addEventHandlerBySelector( FormFieldSelectors.STRUCTURE_NAME_STAIRWAY_LEFT, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
		DomHelper.addEventHandlerBySelector( FormFieldSelectors.STRUCTURE_NAME_STAIRWAY_RIGHT, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
	}

	/**
	 * Handles the click event of any copyable HTML form field.
	 * @param {ClickEvent} event The click event which will be handled.
	 */
	#copyableFormField_click = ( event ) =>
	{
		Clipboard.copyText(
			event.target.getAttribute( 'data-clipboard' )
		);
	}
}
