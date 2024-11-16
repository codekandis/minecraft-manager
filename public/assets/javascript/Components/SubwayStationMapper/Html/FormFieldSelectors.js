'use strict';

import { AbstractStatic } from '../../../../libraries/jotunheim/Types/AbstractStatic.js';
import { StationPositionsPropertyNames } from '../Enumerations/StationPositionsPropertyNames.js';

/**
 * Represents the
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FormFieldSelectors extends AbstractStatic
{
	/**
	 * Represents the module root.
	 * @returns {String} The module root.
	 */
	static get MODULE_ROOT()
	{
		return '#subwayStationMapper';
	}

	/**
	 * Represents the orientation.
	 * @returns {String} The orientation.
	 */
	static get ORIENTATION()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.ORIENTATION );
	}

	/**
	 * Represents the structure block position X.
	 * @returns {String} The structure block position X.
	 */
	static get STRUCTURE_BLOCK_POSITION_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X );
	}

	/**
	 * Represents the structure block position Y.
	 * @returns {String} The structure block position Y.
	 */
	static get STRUCTURE_BLOCK_POSITION_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y );
	}

	/**
	 * Represents the structure block position Z.
	 * @returns {String} The structure block position Z.
	 */
	static get STRUCTURE_BLOCK_POSITION_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z );
	}

	/**
	 * Represents the calculated command station head mining.
	 * @returns {String} The calculated command station head mining.
	 */
	static get CALCULATED_COMMAND_STATION_HEAD_MINING()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING );
	}

	/**
	 * Represents the calculated command concourse mining.
	 * @returns {String} The calculated command concourse mining.
	 */
	static get CALCULATED_COMMAND_CONCOURSE_MINING()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING );
	}

	/**
	 * Represents the calculated command concourse mining R.
	 * @returns {String} The calculated command concourse mining R.
	 */
	static get CALCULATED_COMMAND_CONCOURSE_MINING_R()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R );
	}

	/**
	 * Represents the calculated command concourse mining L.
	 * @returns {String} The calculated command concourse mining L.
	 */
	static get CALCULATED_COMMAND_CONCOURSE_MINING_L()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L );
	}

	/**
	 * Represents the calculated command concourse mining RL.
	 * @returns {String} The calculated command concourse mining RL.
	 */
	static get CALCULATED_COMMAND_CONCOURSE_MINING_RL()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL );
	}

	/**
	 * Represents the calculated command arrival bell.
	 * @returns {String} The calculated command arrival bell.
	 */
	static get CALCULATED_COMMAND_ARRIVAL_BELL()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL );
	}

	/**
	 * Represents the calculated command departure bell.
	 * @returns {String} The calculated command departure bell.
	 */
	static get CALCULATED_COMMAND_DEPARTURE_BELL()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL );
	}

	/**
	 * Represents the calculated station rotation.
	 * @returns {String} The calculated station rotation.
	 */
	static get CALCULATED_STATION_ROTATION()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_STATION_ROTATION );
	}

	/**
	 * Represents the structure name station head 1.
	 * @returns {String} The structure name station head 1.
	 */
	static get STRUCTURE_NAME_STATION_HEAD_1()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_1 );
	}

	/**
	 * Represents the calculated offset station head 1 X.
	 * @returns {String} The calculated offset station head 1 X.
	 */
	static get CALCULATED_OFFSET_STATION_HEAD_1_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_X );
	}

	/**
	 * Represents the calculated offset station head 1 Y.
	 * @returns {String} The calculated offset station head 1 Y.
	 */
	static get CALCULATED_OFFSET_STATION_HEAD_1_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Y );
	}

	/**
	 * Represents the calculated offset station head 1 Z.
	 * @returns {String} The calculated offset station head 1 Z.
	 */
	static get CALCULATED_OFFSET_STATION_HEAD_1_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Z );
	}

	/**
	 * Represents the structure name station head 2.
	 * @returns {String} The structure name station head 2.
	 */
	static get STRUCTURE_NAME_STATION_HEAD_2()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_2 );
	}

	/**
	 * Represents the calculated offset station head 2 X.
	 * @returns {String} The calculated offset station head 2 X.
	 */
	static get CALCULATED_OFFSET_STATION_HEAD_2_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_X );
	}

	/**
	 * Represents the calculated offset station head 2 Y.
	 * @returns {String} The calculated offset station head 2 Y.
	 */
	static get CALCULATED_OFFSET_STATION_HEAD_2_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Y );
	}

	/**
	 * Represents the calculated offset station head 2 Z.
	 * @returns {String} The calculated offset station head 2 Z.
	 */
	static get CALCULATED_OFFSET_STATION_HEAD_2_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Z );
	}

	/**
	 * Represents the structure name concourse.
	 * @returns {String} The structure name concourse.
	 */
	static get STRUCTURE_NAME_CONCOURSE()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.STRUCTURE_NAME_CONCOURSE );
	}

	/**
	 * Represents the calculated offset concourse X.
	 * @returns {String} The calculated offset concourse X.
	 */
	static get CALCULATED_OFFSET_CONCOURSE_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_X );
	}

	/**
	 * Represents the calculated offset concourse Y.
	 * @returns {String} The calculated offset concourse Y.
	 */
	static get CALCULATED_OFFSET_CONCOURSE_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Y );
	}

	/**
	 * Represents the calculated offset concourse Z.
	 * @returns {String} The calculated offset concourse Z.
	 */
	static get CALCULATED_OFFSET_CONCOURSE_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Z );
	}

	/**
	 * Represents the structure name stairs port.
	 * @returns {String} The structure name stairs port.
	 */
	static get STRUCTURE_NAME_STAIRS_PORT()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_PORT );
	}

	/**
	 * Represents the calculated offset concourse X.
	 * @returns {String} The calculated offset concourse X.
	 */
	static get CALCULATED_OFFSET_STAIRS_PORT_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X );
	}

	/**
	 * Represents the calculated offset concourse Y.
	 * @returns {String} The calculated offset concourse Y.
	 */
	static get CALCULATED_OFFSET_STAIRS_PORT_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y );
	}

	/**
	 * Represents the calculated offset concourse Z.
	 * @returns {String} The calculated offset concourse Z.
	 */
	static get CALCULATED_OFFSET_STAIRS_PORT_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z );
	}

	/**
	 * Represents the structure name stairs.
	 * @returns {String} The structure name stairs.
	 */
	static get STRUCTURE_NAME_STAIRS()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS );
	}

	/**
	 * Represents the calculated offset stairs X.
	 * @returns {String} The calculated offset stairs X.
	 */
	static get CALCULATED_OFFSET_STAIRS_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_X );
	}

	/**
	 * Represents the calculated offset stairs Y.
	 * @returns {String} The calculated offset stairs Y.
	 */
	static get CALCULATED_OFFSET_STAIRS_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Y );
	}

	/**
	 * Represents the calculated offset stairs Z.
	 * @returns {String} The calculated offset stairs Z.
	 */
	static get CALCULATED_OFFSET_STAIRS_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Z );
	}

	/**
	 * Represents the structure name stairs entrance.
	 * @returns {String} The structure name stairs entrance.
	 */
	static get STRUCTURE_NAME_STAIRS_ENTRANCE()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_ENTRANCE );
	}

	/**
	 * Represents the calculated offset stairs entrance X.
	 * @returns {String} The calculated offset stairs entrance X.
	 */
	static get CALCULATED_OFFSET_STAIRS_ENTRANCE_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X );
	}

	/**
	 * Represents the calculated offset stairs entrance Y.
	 * @returns {String} The calculated offset stairs entrance Y.
	 */
	static get CALCULATED_OFFSET_STAIRS_ENTRANCE_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y );
	}

	/**
	 * Represents the calculated offset stairs entrance Z.
	 * @returns {String} The calculated offset stairs entrance Z.
	 */
	static get CALCULATED_OFFSET_STAIRS_ENTRANCE_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z );
	}

	/**
	 * Represents the structure name stairway left.
	 * @returns {String} The structure name stairway left.
	 */
	static get STRUCTURE_NAME_STAIRWAY_LEFT()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_LEFT );
	}

	/**
	 * Represents the calculated offset stairway left X.
	 * @returns {String} The calculated offset stairway left X.
	 */
	static get CALCULATED_OFFSET_STAIRWAY_LEFT_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X );
	}

	/**
	 * Represents the calculated offset stairway left Y.
	 * @returns {String} The calculated offset stairway left Y.
	 */
	static get CALCULATED_OFFSET_STAIRWAY_LEFT_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y );
	}

	/**
	 * Represents the calculated offset stairway left Z.
	 * @returns {String} The calculated offset stairway left Z.
	 */
	static get CALCULATED_OFFSET_STAIRWAY_LEFT_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z );
	}

	/**
	 * Represents the structure name stairway right.
	 * @returns {String} The structure name stairway right.
	 */
	static get STRUCTURE_NAME_STAIRWAY_RIGHT()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_RIGHT );
	}

	/**
	 * Represents the calculated offset stairway right X.
	 * @returns {String} The calculated offset stairway right X.
	 */
	static get CALCULATED_OFFSET_STAIRWAY_RIGHT_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X );
	}

	/**
	 * Represents the calculated offset stairway right Y.
	 * @returns {String} The calculated offset stairway right Y.
	 */
	static get CALCULATED_OFFSET_STAIRWAY_RIGHT_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y );
	}

	/**
	 * Represents the calculated offset stairway right Z.
	 * @returns {String} The calculated offset stairway right Z.
	 */
	static get CALCULATED_OFFSET_STAIRWAY_RIGHT_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z );
	}
}
