'use strict';

import { ClickEvent } from '../../../libraries/jotunheim/Dom/ClickEvent.js';
import { BindableHtmlElementProxy } from '../../../libraries/jotunheim/Dom/DataBindings/BindableHtmlElementProxy.js';
import { DomHelper } from '../../../libraries/jotunheim/Dom/DomHelper.js';
import { DataBindingInitializationDirection } from '../../../libraries/jotunheim/Types/DataBindings/DataBindingInitializationDirection.js';
import { Clipboard } from '../../../libraries/jotunheim/Utilities/Clipboard.js';
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
	 * Sets the orientation of the station.
	 * @param {String} value The orientation of the station.
	 */
	set orientation( value )
	{
		this.#setPropertyValueAndDataDirectionAttribute( StationPositionsPropertyNames.ORIENTATION, value, FormFieldSelectors.ORIENTATION );
	}

	/**
	 * Sets the calculated station head command.
	 * @param {String} value The calculated station head command.
	 */
	set calculatedCommandStationHeadMining( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING, value, FormFieldSelectors.CALCULATED_COMMAND_STATION_HEAD_MINING );
	}

	/**
	 * Sets the calculated concourse command.
	 * @param {String} value The calculated concourse command.
	 */
	set calculatedCommandConcourseMining( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING, value, FormFieldSelectors.CALCULATED_COMMAND_CONCOURSE_MINING );
	}

	/**
	 * Sets the calculated concourse R command.
	 * @param {String} value The calculated concourse R command.
	 */
	set calculatedCommandConcourseMiningR( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R, value, FormFieldSelectors.CALCULATED_COMMAND_CONCOURSE_MINING_R );
	}

	/**
	 * Sets the calculated concourse L command.
	 * @param {String} value The calculated concourse L command.
	 */
	set calculatedCommandConcourseMiningL( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L, value, FormFieldSelectors.CALCULATED_COMMAND_CONCOURSE_MINING_L );
	}

	/**
	 * Sets the calculated concourse RL command.
	 * @param {String} value The calculated concourse RL command.
	 */
	set calculatedCommandConcourseMiningRL( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL, value, FormFieldSelectors.CALCULATED_COMMAND_CONCOURSE_MINING_RL );
	}

	/**
	 * Sets the calculated arrival bell command.
	 * @param {String} value The calculated arrival bell command.
	 */
	set calculatedCommandArrivalBell( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL, value, FormFieldSelectors.CALCULATED_COMMAND_ARRIVAL_BELL );
	}

	/**
	 * Sets the calculated departure bell command.
	 * @param {String} value The calculated departure bell command.
	 */
	set calculatedCommandDepartureBell( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL, value, FormFieldSelectors.CALCULATED_COMMAND_DEPARTURE_BELL );
	}

	/**
	 * Sets the station head 1 structure name.
	 * @param {String} value The station head 1 structure name.
	 */
	set structureNameStationHead1( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_1, value, FormFieldSelectors.STRUCTURE_NAME_STATION_HEAD_1 );
	}

	/**
	 * Sets the station head 2 structure name.
	 * @param {String} value The station head 2 structure name.
	 */
	set structureNameStationHead2( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_2, value, FormFieldSelectors.STRUCTURE_NAME_STATION_HEAD_2 );
	}

	/**
	 * Sets the concourse structure name.
	 * @param {String} value The concourse structure name.
	 */
	set structureNameConcourse( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.STRUCTURE_NAME_CONCOURSE, value, FormFieldSelectors.STRUCTURE_NAME_CONCOURSE );
	}

	/**
	 * Sets the stairs port structure name.
	 * @param {String} value The stairs port structure name.
	 */
	set structureNameStairsPort( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_PORT, value, FormFieldSelectors.STRUCTURE_NAME_STAIRS_PORT );
	}

	/**
	 * Sets the stairs structure name.
	 * @param {String} value The calculated stairs structure name.
	 */
	set structureNameStairs( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS, value, FormFieldSelectors.STRUCTURE_NAME_STAIRS );
	}

	/**
	 * Sets the stairs entrance structure name.
	 * @param {String} value The stairs entrance structure name.
	 */
	set structureNameStairsEntrance( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_ENTRANCE, value, FormFieldSelectors.STRUCTURE_NAME_STAIRS_ENTRANCE );
	}

	/**
	 * Sets the stairway left structure name.
	 * @param {String} value The stairway left structure name.
	 */
	set structureNameStairwayLeft( value )
	{
		this.#setPropertyValueAndDataClipboardAttribute( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_LEFT, value, FormFieldSelectors.STRUCTURE_NAME_STAIRWAY_LEFT );
	}

	/**
	 * Sets the stairway right structure name.
	 * @param {String} value The stairway right structure name.
	 */
	set structureNameStairwayRight( value )
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
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.ORIENTATION, BindableHtmlElementProxy.with_selector( FormFieldSelectors.ORIENTATION ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X, BindableHtmlElementProxy.with_selector( FormFieldSelectors.STRUCTURE_BLOCK_POSITION_X ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y, BindableHtmlElementProxy.with_selector( FormFieldSelectors.STRUCTURE_BLOCK_POSITION_Y ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z, BindableHtmlElementProxy.with_selector( FormFieldSelectors.STRUCTURE_BLOCK_POSITION_Z ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_COMMAND_STATION_HEAD_MINING ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_COMMAND_CONCOURSE_MINING ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_COMMAND_CONCOURSE_MINING_R ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_COMMAND_CONCOURSE_MINING_L ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_COMMAND_CONCOURSE_MINING_RL ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_COMMAND_ARRIVAL_BELL ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_COMMAND_DEPARTURE_BELL ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_STATION_ROTATION, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_STATION_ROTATION ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_X, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STATION_HEAD_1_X ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Y, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STATION_HEAD_1_Y ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Z, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STATION_HEAD_1_Z ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_X, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STATION_HEAD_2_X ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Y, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STATION_HEAD_2_Y ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Z, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STATION_HEAD_2_Z ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_X, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_CONCOURSE_X ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Y, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_CONCOURSE_Y ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Z, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_CONCOURSE_Z ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_PORT_X ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_PORT_Y ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_PORT_Z ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_X, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_X ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Y, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_Y ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Z, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_Z ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_ENTRANCE_X ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_LEFT_X ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_LEFT_Y ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_LEFT_Z ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_RIGHT_X ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y ), 'value', DataBindingInitializationDirection.BINDER );
		this.#_stationPositions.dataBindings.add( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z, BindableHtmlElementProxy.with_selector( FormFieldSelectors.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z ), 'value', DataBindingInitializationDirection.BINDER );

		this.dataBindings.add( StationPositionsPropertyNames.ORIENTATION, this.#_stationPositions, StationPositionsPropertyNames.ORIENTATION, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING, this.#_stationPositions, StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING, this.#_stationPositions, StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R, this.#_stationPositions, StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L, this.#_stationPositions, StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL, this.#_stationPositions, StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL, this.#_stationPositions, StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL, this.#_stationPositions, StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_1, this.#_stationPositions, StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_1, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_2, this.#_stationPositions, StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_2, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_NAME_CONCOURSE, this.#_stationPositions, StationPositionsPropertyNames.STRUCTURE_NAME_CONCOURSE, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_PORT, this.#_stationPositions, StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_PORT, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS, this.#_stationPositions, StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_ENTRANCE, this.#_stationPositions, StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_ENTRANCE, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_LEFT, this.#_stationPositions, StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_LEFT, DataBindingInitializationDirection.BINDABLE );
		this.dataBindings.add( StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_RIGHT, this.#_stationPositions, StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_RIGHT, DataBindingInitializationDirection.BINDABLE );
	}

	/**
	 * @inheritDoc
	 */
	_addFormFieldsEventHandlers()
	{
		this._attachEventDefaultValueMappings( FormFieldSelectors.ORIENTATION, StationPositionsPropertyNames.ORIENTATION );
		this._attachEventDefaultValueMappings( FormFieldSelectors.STRUCTURE_BLOCK_POSITION_X, StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X );
		this._attachEventDefaultValueMappings( FormFieldSelectors.STRUCTURE_BLOCK_POSITION_Y, StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y );
		this._attachEventDefaultValueMappings( FormFieldSelectors.STRUCTURE_BLOCK_POSITION_Z, StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z );
		this._attachEventDefaultValueMappings( FormFieldSelectors.CALCULATED_STATION_ROTATION, StationPositionsPropertyNames.CALCULATED_STATION_ROTATION );

		DomHelper.addEventHandlerBySelector( FormFieldSelectors.CALCULATED_COMMAND_STATION_HEAD_MINING, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
		DomHelper.addEventHandlerBySelector( FormFieldSelectors.CALCULATED_COMMAND_CONCOURSE_MINING, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
		DomHelper.addEventHandlerBySelector( FormFieldSelectors.CALCULATED_COMMAND_CONCOURSE_MINING_R, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
		DomHelper.addEventHandlerBySelector( FormFieldSelectors.CALCULATED_COMMAND_CONCOURSE_MINING_L, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
		DomHelper.addEventHandlerBySelector( FormFieldSelectors.CALCULATED_COMMAND_CONCOURSE_MINING_RL, ClickEvent.EVENT_NAME, this.#copyableFormField_click );
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
