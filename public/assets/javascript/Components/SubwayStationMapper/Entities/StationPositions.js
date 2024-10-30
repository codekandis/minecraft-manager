'use strict';

import { AbstractBindable } from '../../../../libraries/jotunheim/Types/DataBindings/AbstractBindable.js';
import { Orientation } from '../../../Entities/Orientation.js';
import { StationPositionsPropertyNames } from '../Enumerations/StationPositionsPropertyNames.js';
import { StationOffsetsCalculator } from './StationOffsetsCalculator.js';

/**
 * Represents the station positions.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class StationPositions extends AbstractBindable
{
	/**
	 * Stores the base name of the station.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.SUBWAY_STATION_BASE_NAME ] = 'codekandis:subway-station';

	/**
	 * Stores the structure name station head 1.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_1 ] = String.format`${ 0 }-head-1`( this[ '#_' + StationPositionsPropertyNames.SUBWAY_STATION_BASE_NAME ] );

	/**
	 * Stores the structure name station head 2.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_2 ] = String.format`${ 0 }-head-2`( this[ '#_' + StationPositionsPropertyNames.SUBWAY_STATION_BASE_NAME ] );

	/**
	 * Stores the structure name concourse.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_CONCOURSE ] = String.format`${ 0 }-concourse`( this[ '#_' + StationPositionsPropertyNames.SUBWAY_STATION_BASE_NAME ] );

	/**
	 * Stores the structure name stairs port.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_PORT ] = String.format`${ 0 }-stairs-port`( this[ '#_' + StationPositionsPropertyNames.SUBWAY_STATION_BASE_NAME ] );

	/**
	 * Stores the structure name stairs.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS ] = String.format`${ 0 }-stairs`( this[ '#_' + StationPositionsPropertyNames.SUBWAY_STATION_BASE_NAME ] );

	/**
	 * Stores the structure name stairs entrance.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_ENTRANCE ] = String.format`${ 0 }-stairs-entrance`( this[ '#_' + StationPositionsPropertyNames.SUBWAY_STATION_BASE_NAME ] );

	/**
	 * Stores the structure name stairway.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY ] = String.format`${ 0 }-stairway`( this[ '#_' + StationPositionsPropertyNames.SUBWAY_STATION_BASE_NAME ] );

	/**
	 * Stores the structure name stairway left.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_LEFT ] = String.format`${ 0 }`( this[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY ] );

	/**
	 * Stores the structure name stairway right.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_RIGHT ] = String.format`${ 0 }`( this[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY ] );

	/**
	 * Stores the orientation.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.ORIENTATION ] = Orientation.NORTH;

	/**
	 * Stores the structure block position X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] = 0;

	/**
	 * Stores the structure block position Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] = 0;

	/**
	 * Stores the structure block position Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] = 0;

	/**
	 * Stores the calculated command station head mining.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING ];

	/**
	 * Stores the calculated position station head mining 1 X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_X ];

	/**
	 * Stores the calculated position station head mining 1 Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Y ];

	/**
	 * Stores the calculated position station head mining 1 Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Z ];

	/**
	 * Stores the calculated position station head mining 2 X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_X ];

	/**
	 * Stores the calculated position station head mining 2 Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Y ];

	/**
	 * Stores the calculated position station head mining 2 Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Z ];

	/**
	 * Stores the calculated command concourse mining.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING ];

	/**
	 * Stores the calculated position concourse mining 1 X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_X ];

	/**
	 * Stores the calculated position concourse mining 1 Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Y ];

	/**
	 * Stores the calculated position concourse mining 1 Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Z ];

	/**
	 * Stores the calculated position concourse mining 2 X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_X ];

	/**
	 * Stores the calculated position concourse mining 2 Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Y ];

	/**
	 * Stores the calculated position concourse mining 2 Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Z ];

	/**
	 * Stores the calculated command concourse mining R.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R ];

	/**
	 * Stores the calculated position concourse mining R 1 X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_X ];

	/**
	 * Stores the calculated position concourse mining R 1 Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Y ];

	/**
	 * Stores the calculated position concourse mining R 1 Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Z ];

	/**
	 * Stores the calculated position concourse mining R 2 X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_X ];

	/**
	 * Stores the calculated position concourse mining R 2 Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Y ];

	/**
	 * Stores the calculated position concourse mining R 2 Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Z ];

	/**
	 * Stores the calculated command concourse mining L.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L ];

	/**
	 * Stores the calculated position concourse mining L 1 X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_X ];

	/**
	 * Stores the calculated position concourse mining L 1 Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Y ];

	/**
	 * Stores the calculated position concourse mining L 1 Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Z ];

	/**
	 * Stores the calculated position concourse mining L 2 X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_X ];

	/**
	 * Stores the calculated position concourse mining L 2 Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Y ];

	/**
	 * Stores the calculated position concourse mining L 2 Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Z ];

	/**
	 * Stores the calculated command concourse mining RL.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL ];

	/**
	 * Stores the calculated position concourse mining RL 1 X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_X ];

	/**
	 * Stores the calculated position concourse mining RL 1 Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Y ];

	/**
	 * Stores the calculated position concourse mining RL 1 Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Z ];

	/**
	 * Stores the calculated position concourse mining RL 2 X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_X ];

	/**
	 * Stores the calculated position concourse mining RL 2 Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Y ];

	/**
	 * Stores the calculated position concourse mining RL 2 Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Z ];

	/**
	 * Stores the calculated command arrival bell.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL ];

	/**
	 * Stores the calculated position arrival bell X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_X ];

	/**
	 * Stores the calculated position arrival bell Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Y ];

	/**
	 * Stores the calculated position arrival bell Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Z ];

	/**
	 * Stores the calculated command departure bell.
	 * @type {String}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL ];

	/**
	 * Stores the calculated position departure bell X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_X ];

	/**
	 * Stores the calculated position departure bell Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Y ];

	/**
	 * Stores the calculated position departure bell Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Z ];

	/**
	 * Stores the calculated station rotation.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_STATION_ROTATION ] = 0;

	/**
	 * Stores the calculated offset station head 1 X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_X ];

	/**
	 * Stores the calculated offset station head 1 Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Y ];

	/**
	 * Stores the calculated offset station head 1 Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Z ];

	/**
	 * Stores the calculated offset station head 2 X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_X ];

	/**
	 * Stores the calculated offset station head 2 Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Y ];

	/**
	 * Stores the calculated offset station head 2 Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Z ];

	/**
	 * Stores the calculated offset concourse X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_X ];

	/**
	 * Stores the calculated offset concourse Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Y ];

	/**
	 * Stores the calculated offset concourse Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Z ];

	/**
	 * Stores the calculated offset stairs port X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X ];

	/**
	 * Stores the calculated offset stairs port Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y ];

	/**
	 * Stores the calculated offset stairs port Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z ];

	/**
	 * Stores the calculated offset stairs X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_X ];

	/**
	 * Stores the calculated offset stairs Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Y ];

	/**
	 * Stores the calculated offset stairs Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Z ];

	/**
	 * Stores the calculated offset stairs entrance X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X ];

	/**
	 * Stores the calculated offset stairs entrance Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y ];

	/**
	 * Stores the calculated offset stairs entrance Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z ];

	/**
	 * Stores the calculated offset stairway left X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X ];

	/**
	 * Stores the calculated offset stairway left Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y ];

	/**
	 * Stores the calculated offset stairway left Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z ];

	/**
	 * Stores the calculated offset stairway right X.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X ];

	/**
	 * Stores the calculated offset stairway right Y.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y ];

	/**
	 * Stores the calculated offset stairway right Z.
	 * @type {Number}
	 */
	[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z ];

	/**
	 * Constructor method.
	 */
	constructor()
	{
		super();

		this.#initialize();
	}

	/**
	 * Gets the structure name station head 1.
	 * @returns {String} The structure name station head 1.
	 */
	get [ StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_1 ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_1 ];
	}

	/**
	 * Gets the structure name station head 2.
	 * @returns {String} The structure name station head 2.
	 */
	get [ StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_2 ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STATION_HEAD_2 ];
	}

	/**
	 * Gets the structure name concourse.
	 * @returns {String} The structure name concourse.
	 */
	get [ StationPositionsPropertyNames.STRUCTURE_NAME_CONCOURSE ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_CONCOURSE ];
	}

	/**
	 * Gets the structure name stairs port.
	 * @returns {String} The structure name stairs port.
	 */
	get [ StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_PORT ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_PORT ];
	}

	/**
	 * Gets the structure name stairs.
	 * @returns {String} The structure name stairs.
	 */
	get [ StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS ];
	}

	/**
	 * Gets the structure name stairs entrance.
	 * @returns {String} The structure name stairs entrance.
	 */
	get [ StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_ENTRANCE ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STAIRS_ENTRANCE ];
	}

	/**
	 * Gets the structure name stairway left.
	 * @returns {String} The structure name stairway left.
	 */
	get [ StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_LEFT ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_LEFT ];
	}

	/**
	 * Gets the structure name stairway right.
	 * @returns {String} The structure name stairway right.
	 */
	get [ StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_RIGHT ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.STRUCTURE_NAME_STAIRWAY_RIGHT ];
	}

	/**
	 * Gets the orientation.
	 * @returns {String} The orientation.
	 */
	get [ StationPositionsPropertyNames.ORIENTATION ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.ORIENTATION ];
	}

	/**
	 * Sets the orientation.
	 * @param {String} value The orientation.
	 */
	set [ StationPositionsPropertyNames.ORIENTATION ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.ORIENTATION ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.ORIENTATION );

		this.calculate();
	}

	/**
	 * Gets the structure block position X.
	 * @returns {Number} The structure block position X.
	 */
	get [ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ];
	}

	/**
	 * Sets the structure block position X.
	 * @param {Number} value The structure block position X.
	 */
	set [ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X );

		this.calculate();
	}

	/**
	 * Gets the structure block position Y.
	 * @returns {Number} The structure block position Y.
	 */
	get [ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ];
	}

	/**
	 * Sets the structure block position Y.
	 * @param {Number} value The structure block position Y.
	 */
	set [ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y );

		this.calculate();
	}

	/**
	 * Gets the structure block position Z.
	 * @returns {Number} The structure block position Z.
	 */
	get [ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ];
	}

	/**
	 * Sets the structure block position Z.
	 * @param {Number} value The structure block position Z.
	 */
	set [ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z );

		this.calculate();
	}

	/**
	 * Gets the calculated command station head mining.
	 * @returns {String} The calculated command station head mining.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING ]()
	{
		return String.format`/fill ${ 0 } ${ 1 } ${ 2 } ${ 3 } ${ 4 } ${ 5 } cave_air replace `
		(
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_X ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Y ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Z ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_X ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Y ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Z ]
		);
	}

	/**
	 * Gets the calculated position station head mining 1 X.
	 * @returns {Number} The calculated position station head mining 1 X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_X ];
	}

	/**
	 * Sets the calculated position station head mining 1 X.
	 * @param {Number} value The calculated position station head mining 1 X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING );
	}

	/**
	 * Gets the calculated position station head mining 1 Y.
	 * @returns {Number} The calculated position station head mining 1 Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Y ];
	}

	/**
	 * Sets the calculated position station head mining 1 Y.
	 * @param {Number} value The calculated position station head mining 1 Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING );
	}

	/**
	 * Gets the calculated position station head mining 1 Z.
	 * @returns {Number} The calculated position station head mining 1 Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Z ];
	}

	/**
	 * Sets the calculated position station head mining 1 Z.
	 * @param {Number} value The calculated position station head mining 1 Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING );
	}

	/**
	 * Gets the calculated position station head mining 2 X.
	 * @returns {Number} The calculated position station head mining 2 X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_X ];
	}

	/**
	 * Sets the calculated position station head mining 2 X.
	 * @param {Number} value The calculated position station head mining 2 X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING );
	}

	/**
	 * Gets the calculated position station head mining 2 Y.
	 * @returns {Number} The calculated position station head mining 2 Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Y ];
	}

	/**
	 * Sets the calculated position station head mining 2 Y.
	 * @param {Number} value The calculated position station head mining 2 Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING );
	}

	/**
	 * Gets the calculated position station head mining 2 Z.
	 * @returns {Number} The calculated position station head mining 2 Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Z ];
	}

	/**
	 * Sets the calculated position station head mining 2 Z.
	 * @param {Number} value The calculated position station head mining 2 Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING );
	}

	/**
	 * Gets the calculated command concourse mining.
	 * @returns {String} The calculated command concourse mining.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING ]()
	{
		return String.format`/fill ${ 0 } ${ 1 } ${ 2 } ${ 3 } ${ 4 } ${ 5 } cave_air replace `
		(
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_X ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Y ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Z ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_X ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Y ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Z ]
		);
	}

	/**
	 * Gets the calculated position concourse mining 1 X.
	 * @returns {Number} The calculated position concourse mining 1 X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_X ];
	}

	/**
	 * Sets the calculated position concourse mining 1 X.
	 * @param {Number} value The calculated position concourse mining 1 X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING );
	}

	/**
	 * Gets the calculated position concourse mining 1 Y.
	 * @returns {Number} The calculated position concourse mining 1 Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Y ];
	}

	/**
	 * Sets the calculated position concourse mining 1 Y.
	 * @param {Number} value The calculated position concourse mining 1 Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING );
	}

	/**
	 * Gets the calculated position concourse mining 1 Z.
	 * @returns {Number} The calculated position concourse mining 1 Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Z ];
	}

	/**
	 * Sets the calculated position concourse mining 1 Z.
	 * @param {Number} value The calculated position concourse mining 1 Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING );
	}

	/**
	 * Gets the calculated position concourse mining 2 X.
	 * @returns {Number} The calculated position concourse mining 2 X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_X ];
	}

	/**
	 * Sets the calculated position concourse mining 2 X.
	 * @param {Number} value The calculated position concourse mining 2 X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING );
	}

	/**
	 * Gets the calculated position concourse mining 2 Y.
	 * @returns {Number} The calculated position concourse mining 2 Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Y ];
	}

	/**
	 * Sets the calculated position concourse mining 2 Y.
	 * @param {Number} value The calculated position concourse mining 2 Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING );
	}

	/**
	 * Gets the calculated position concourse mining 2 Z.
	 * @returns {Number} The calculated position concourse mining 2 Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Z ];
	}

	/**
	 * Sets the calculated position concourse mining 2 Z.
	 * @param {Number} value The calculated position concourse mining 2 Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING );
	}

	/**
	 * Gets the calculated command concourse mining R.
	 * @returns {String} The calculated command concourse mining R.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R ]()
	{
		return String.format`/fill ${ 0 } ${ 1 } ${ 2 } ${ 3 } ${ 4 } ${ 5 } cave_air replace `
		(
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_X ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Y ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Z ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_X ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Y ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Z ]
		);
	}

	/**
	 * Gets the calculated position concourse mining 1 X.
	 * @returns {Number} The calculated position concourse mining 1 X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_X ];
	}

	/**
	 * Sets the calculated position concourse mining 1 X.
	 * @param {Number} value The calculated position concourse mining 1 X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R );
	}

	/**
	 * Gets the calculated position concourse mining 1 Y.
	 * @returns {Number} The calculated position concourse mining 1 Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Y ];
	}

	/**
	 * Sets the calculated position concourse mining 1 Y.
	 * @param {Number} value The calculated position concourse mining 1 Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R );
	}

	/**
	 * Gets the calculated position concourse mining 1 Z.
	 * @returns {Number} The calculated position concourse mining 1 Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Z ];
	}

	/**
	 * Sets the calculated position concourse mining 1 Z.
	 * @param {Number} value The calculated position concourse mining 1 Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R );
	}

	/**
	 * Gets the calculated position concourse mining 2 X.
	 * @returns {Number} The calculated position concourse mining 2 X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_X ];
	}

	/**
	 * Sets the calculated position concourse mining 2 X.
	 * @param {Number} value The calculated position concourse mining 2 X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R );
	}

	/**
	 * Gets the calculated position concourse mining 2 Y.
	 * @returns {Number} The calculated position concourse mining 2 Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Y ];
	}

	/**
	 * Sets the calculated position concourse mining 2 Y.
	 * @param {Number} value The calculated position concourse mining 2 Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R );
	}

	/**
	 * Gets the calculated position concourse mining 2 Z.
	 * @returns {Number} The calculated position concourse mining 2 Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Z ];
	}

	/**
	 * Sets the calculated position concourse mining 2 Z.
	 * @param {Number} value The calculated position concourse mining 2 Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R );
	}

	/**
	 * Gets the calculated command concourse mining L.
	 * @returns {String} The calculated command concourse mining L.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L ]()
	{
		return String.format`/fill ${ 0 } ${ 1 } ${ 2 } ${ 3 } ${ 4 } ${ 5 } cave_air replace `
		(
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_X ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Y ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Z ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_X ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Y ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Z ]
		);
	}

	/**
	 * Gets the calculated position concourse mining 1 X.
	 * @returns {Number} The calculated position concourse mining 1 X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_X ];
	}

	/**
	 * Sets the calculated position concourse mining 1 X.
	 * @param {Number} value The calculated position concourse mining 1 X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L );
	}

	/**
	 * Gets the calculated position concourse mining 1 Y.
	 * @returns {Number} The calculated position concourse mining 1 Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Y ];
	}

	/**
	 * Sets the calculated position concourse mining 1 Y.
	 * @param {Number} value The calculated position concourse mining 1 Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L );
	}

	/**
	 * Gets the calculated position concourse mining 1 Z.
	 * @returns {Number} The calculated position concourse mining 1 Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Z ];
	}

	/**
	 * Sets the calculated position concourse mining 1 Z.
	 * @param {Number} value The calculated position concourse mining 1 Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L );
	}

	/**
	 * Gets the calculated position concourse mining 2 X.
	 * @returns {Number} The calculated position concourse mining 2 X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_X ];
	}

	/**
	 * Sets the calculated position concourse mining 2 X.
	 * @param {Number} value The calculated position concourse mining 2 X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L );
	}

	/**
	 * Gets the calculated position concourse mining 2 Y.
	 * @returns {Number} The calculated position concourse mining 2 Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Y ];
	}

	/**
	 * Sets the calculated position concourse mining 2 Y.
	 * @param {Number} value The calculated position concourse mining 2 Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L );
	}

	/**
	 * Gets the calculated position concourse mining 2 Z.
	 * @returns {Number} The calculated position concourse mining 2 Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Z ];
	}

	/**
	 * Sets the calculated position concourse mining 2 Z.
	 * @param {Number} value The calculated position concourse mining 2 Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L );
	}

	/**
	 * Gets the calculated command concourse mining RL.
	 * @returns {String} The calculated command concourse mining RL.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL ]()
	{
		return String.format`/fill ${ 0 } ${ 1 } ${ 2 } ${ 3 } ${ 4 } ${ 5 } cave_air replace `
		(
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_X ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Y ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Z ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_X ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Y ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Z ]
		);
	}

	/**
	 * Gets the calculated position concourse mining 1 X.
	 * @returns {Number} The calculated position concourse mining 1 X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_X ];
	}

	/**
	 * Sets the calculated position concourse mining 1 X.
	 * @param {Number} value The calculated position concourse mining 1 X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL );
	}

	/**
	 * Gets the calculated position concourse mining 1 Y.
	 * @returns {Number} The calculated position concourse mining 1 Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Y ];
	}

	/**
	 * Sets the calculated position concourse mining 1 Y.
	 * @param {Number} value The calculated position concourse mining 1 Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL );
	}

	/**
	 * Gets the calculated position concourse mining 1 Z.
	 * @returns {Number} The calculated position concourse mining 1 Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Z ];
	}

	/**
	 * Sets the calculated position concourse mining 1 Z.
	 * @param {Number} value The calculated position concourse mining 1 Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL );
	}

	/**
	 * Gets the calculated position concourse mining 2 X.
	 * @returns {Number} The calculated position concourse mining 2 X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_X ];
	}

	/**
	 * Sets the calculated position concourse mining 2 X.
	 * @param {Number} value The calculated position concourse mining 2 X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL );
	}

	/**
	 * Gets the calculated position concourse mining 2 Y.
	 * @returns {Number} The calculated position concourse mining 2 Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Y ];
	}

	/**
	 * Sets the calculated position concourse mining 2 Y.
	 * @param {Number} value The calculated position concourse mining 2 Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL );
	}

	/**
	 * Gets the calculated position concourse mining 2 Z.
	 * @returns {Number} The calculated position concourse mining 2 Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Z ];
	}

	/**
	 * Sets the calculated position concourse mining 2 Z.
	 * @param {Number} value The calculated position concourse mining 2 Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL );
	}

	/**
	 * Gets the calculated command arrival bell.
	 * @returns {String} The calculated command arrival bell.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL ]()
	{
		return String.format`playsound minecraft:block.bell.use block @a ${ 0 } ${ 1 } ${ 2 } 1.3 2`
		(
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_X ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Y ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Z ]
		);
	}

	/**
	 * Gets the calculated position arrival bell X.
	 * @returns {Number} The calculated position arrival bell X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_X ];
	}

	/**
	 * Sets the calculated position arrival bell X.
	 * @param {Number} value The calculated position arrival bell X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL );
	}

	/**
	 * Gets the calculated position arrival bell Y.
	 * @returns {Number} The calculated position arrival bell Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Y ];
	}

	/**
	 * Sets the calculated position arrival bell Y.
	 * @param {Number} value The calculated position arrival bell Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL );
	}

	/**
	 * Gets the calculated position arrival bell Z.
	 * @returns {Number} The calculated position arrival bell Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Z ];
	}

	/**
	 * Sets the calculated position arrival bell Z.
	 * @param {Number} value The calculated position arrival bell Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL );
	}

	/**
	 * Gets the calculated command departure bell.
	 * @returns {String} The calculated command departure bell.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL ]()
	{
		return String.format`playsound minecraft:block.bell.use block @a ${ 0 } ${ 1 } ${ 2 } 1.3 2`
		(
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_X ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Y ],
			this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Z ]
		);
	}

	/**
	 * Gets the calculated position departure bell X.
	 * @returns {Number} The calculated position departure bell X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_X ];
	}

	/**
	 * Sets the calculated position departure bell X.
	 * @param {Number} value The calculated position departure bell X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL );
	}

	/**
	 * Gets the calculated position departure bell Y.
	 * @returns {Number} The calculated position departure bell Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Y ];
	}

	/**
	 * Sets the calculated position departure bell Y.
	 * @param {Number} value The calculated position departure bell Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL );
	}

	/**
	 * Gets the calculated position departure bell Z.
	 * @returns {Number} The calculated position departure bell Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Z ];
	}

	/**
	 * Sets the calculated position departure bell Z.
	 * @param {Number} value The calculated position departure bell Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL );
	}

	/**
	 * Gets the calculated station rotation.
	 * @returns {Number} The calculated station rotation.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_STATION_ROTATION ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_STATION_ROTATION ];
	}

	/**
	 * Sets the calculated station rotation.
	 * @param {Number} value The calculated station rotation.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_STATION_ROTATION ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_STATION_ROTATION ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_STATION_ROTATION );
	}

	/**
	 * Gets the calculated offset station head 1 X.
	 * @returns {Number} The calculated offset station head 1 X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_X ];
	}

	/**
	 * Sets the calculated offset station head 1 X.
	 * @param {Number} value The calculated offset station head 1 X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_X );
	}

	/**
	 * Gets the calculated offset station head 1 Y.
	 * @returns {Number} The calculated offset station head 1 Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Y ];
	}

	/**
	 * Sets the calculated offset station head 1 Y.
	 * @param {Number} value The calculated offset station head 1 Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Y );
	}

	/**
	 * Gets the calculated offset station head 1 Z.
	 * @returns {Number} The calculated offset station head 1 Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Z ];
	}

	/**
	 * Sets the calculated offset station head 1 Z.
	 * @param {Number} value The calculated offset station head 1 Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Z );
	}

	/**
	 * Gets the calculated offset station head 2 X.
	 * @returns {Number} The calculated offset station head 2 X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_X ];
	}

	/**
	 * Sets the calculated offset station head 2 X.
	 * @param {Number} value The calculated offset station head 2 X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_X );
	}

	/**
	 * Gets the calculated offset station head 2 Y.
	 * @returns {Number} The calculated offset station head 2 Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Y ];
	}

	/**
	 * Sets the calculated offset station head 2 Y.
	 * @param {Number} value The calculated offset station head 2 Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Y );
	}

	/**
	 * Gets the calculated offset station head 2 Z.
	 * @returns {Number} The calculated offset station head 2 Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Z ];
	}

	/**
	 * Sets the calculated offset station head 2 Z.
	 * @param {Number} value The calculated offset station head 2 Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Z );
	}

	/**
	 * Gets the calculated offset concourse X.
	 * @returns {Number} The calculated offset concourse X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_X ];
	}

	/**
	 * Sets the calculated offset concourse X.
	 * @param {Number} value The calculated offset concourse X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_X );
	}

	/**
	 * Gets the calculated offset concourse Y.
	 * @returns {Number} The calculated offset concourse Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Y ];
	}

	/**
	 * Sets the calculated offset concourse Y.
	 * @param {Number} value The calculated offset concourse Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Y );
	}

	/**
	 * Gets the calculated offset concourse Z.
	 * @returns {Number} The calculated offset concourse Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Z ];
	}

	/**
	 * Sets the calculated offset concourse Z.
	 * @param {Number} value The calculated offset concourse Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Z );
	}

	/**
	 * Gets the calculated offset stairs port X.
	 * @returns {Number} The calculated offset stairs port X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X ];
	}

	/**
	 * Sets the calculated offset stairs port X.
	 * @param {Number} value The calculated offset stairs port X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X );
	}

	/**
	 * Gets the calculated offset stairs port Y.
	 * @returns {Number} The calculated offset stairs port Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y ];
	}

	/**
	 * Sets the calculated offset stairs port Y.
	 * @param {Number} value The calculated offset stairs port Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y );
	}

	/**
	 * Gets the calculated offset stairs port Z.
	 * @returns {Number} The calculated offset stairs port Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z ];
	}

	/**
	 * Sets the calculated offset stairs port Z.
	 * @param {Number} value The calculated offset stairs port Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z );
	}

	/**
	 * Gets the calculated offset stairs X.
	 * @returns {Number} The calculated offset stairs X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_X ];
	}

	/**
	 * Sets the calculated offset stairs X.
	 * @param {Number} value The calculated offset stairs X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_X );
	}

	/**
	 * Gets the calculated offset stairs Y.
	 * @returns {Number} The calculated offset stairs Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Y ];
	}

	/**
	 * Sets the calculated offset stairs Y.
	 * @param {Number} value The calculated offset stairs Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Y );
	}

	/**
	 * Gets the calculated offset stairs Z.
	 * @returns {Number} The calculated offset stairs Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Z ];
	}

	/**
	 * Sets the calculated offset stairs Z.
	 * @param {Number} value The calculated offset stairs Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Z );
	}

	/**
	 * Gets the calculated offset stairs entrance X.
	 * @returns {Number} The calculated offset stairs entrance X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X ];
	}

	/**
	 * Sets the calculated offset stairs entrance X.
	 * @param {Number} value The calculated offset stairs entrance X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X );
	}

	/**
	 * Gets the calculated offset stairs entrance Y.
	 * @returns {Number} The calculated offset stairs entrance Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y ];
	}

	/**
	 * Sets the calculated offset stairs entrance Y.
	 * @param {Number} value The calculated offset stairs entrance Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y );
	}

	/**
	 * Gets the calculated offset stairs entrance Z.
	 * @returns {Number} The calculated offset stairs entrance Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z ];
	}

	/**
	 * Sets the calculated offset stairs entrance Z.
	 * @param {Number} value The calculated offset stairs entrance Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z );
	}

	/**
	 * Gets the calculated offset stairway left X.
	 * @returns {Number} The calculated offset stairway left X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X ];
	}

	/**
	 * Sets the calculated offset stairway left X.
	 * @param {Number} value The calculated offset stairway left X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X );
	}

	/**
	 * Gets the calculated offset stairway left Y.
	 * @returns {Number} The calculated offset stairway left Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y ];
	}

	/**
	 * Sets the calculated offset stairway left Y.
	 * @param {Number} value The calculated offset stairway left Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y );
	}

	/**
	 * Gets the calculated offset stairway left Z.
	 * @returns {Number} The calculated offset stairway left Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z ];
	}

	/**
	 * Sets the calculated offset stairway left Z.
	 * @param {Number} value The calculated offset stairway left Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z );
	}

	/**
	 * Gets the calculated offset stairway right X.
	 * @returns {Number} The calculated offset stairway right X.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X ];
	}

	/**
	 * Sets the calculated offset stairway right X.
	 * @param {Number} value The calculated offset stairway right X.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X );
	}

	/**
	 * Gets the calculated offset stairway right Y.
	 * @returns {Number} The calculated offset stairway right Y.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y ];
	}

	/**
	 * Sets the calculated offset stairway right Y.
	 * @param {Number} value The calculated offset stairway right Y.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y );
	}

	/**
	 * Gets the calculated offset stairway right Z.
	 * @returns {Number} The calculated offset stairway right Z.
	 */
	get [ StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z ]()
	{
		return this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z ];
	}

	/**
	 * Sets the calculated offset stairway right Z.
	 * @param {Number} value The calculated offset stairway right Z.
	 */
	set [ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z ]( value )
	{
		this[ '#_' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z ] = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z );
	}

	/**
	 * Initializes the station positions.
	 */
	#initialize()
	{
		this.calculate();
	}

	/**
	 * Calculates the station positions.
	 */
	calculate()
	{
		const calculatedOffsets = ( new StationOffsetsCalculator() )
			.calculate( this );

		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_X ] = calculatedOffsets.stationHeadMining1.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Y ] = calculatedOffsets.stationHeadMining1.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Z ] = calculatedOffsets.stationHeadMining1.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_X ] = calculatedOffsets.stationHeadMining2.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Y ] = calculatedOffsets.stationHeadMining2.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Z ] = calculatedOffsets.stationHeadMining2.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_X ]    = calculatedOffsets.concourseMining1.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Y ]    = calculatedOffsets.concourseMining1.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Z ]    = calculatedOffsets.concourseMining1.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_X ]    = calculatedOffsets.concourseMining2.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Y ]    = calculatedOffsets.concourseMining2.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Z ]    = calculatedOffsets.concourseMining2.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_X ]  = calculatedOffsets.concourseMiningR1.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Y ]  = calculatedOffsets.concourseMiningR1.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Z ]  = calculatedOffsets.concourseMiningR1.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_X ]  = calculatedOffsets.concourseMiningR2.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Y ]  = calculatedOffsets.concourseMiningR2.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Z ]  = calculatedOffsets.concourseMiningR2.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_X ]  = calculatedOffsets.concourseMiningL1.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Y ]  = calculatedOffsets.concourseMiningL1.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Z ]  = calculatedOffsets.concourseMiningL1.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_X ]  = calculatedOffsets.concourseMiningL2.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Y ]  = calculatedOffsets.concourseMiningL2.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Z ]  = calculatedOffsets.concourseMiningL2.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_X ] = calculatedOffsets.concourseMiningRL1.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Y ] = calculatedOffsets.concourseMiningRL1.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Z ] = calculatedOffsets.concourseMiningRL1.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_X ] = calculatedOffsets.concourseMiningRL2.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Y ] = calculatedOffsets.concourseMiningRL2.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Z ] = calculatedOffsets.concourseMiningRL2.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_X ]          = calculatedOffsets.arrivalBell.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Y ]          = calculatedOffsets.arrivalBell.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Z ]          = calculatedOffsets.arrivalBell.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_X ]        = calculatedOffsets.departureBell.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Y ]        = calculatedOffsets.departureBell.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Z ]        = calculatedOffsets.departureBell.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_STATION_ROTATION ]                 = calculatedOffsets.rotation;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_X ]          = calculatedOffsets.stationHead1.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Y ]          = calculatedOffsets.stationHead1.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Z ]          = calculatedOffsets.stationHead1.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_X ]          = calculatedOffsets.stationHead2.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Y ]          = calculatedOffsets.stationHead2.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Z ]          = calculatedOffsets.stationHead2.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_X ]               = calculatedOffsets.concourse.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Y ]               = calculatedOffsets.concourse.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Z ]               = calculatedOffsets.concourse.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X ]             = calculatedOffsets.stairsPort.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y ]             = calculatedOffsets.stairsPort.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z ]             = calculatedOffsets.stairsPort.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_X ]                  = calculatedOffsets.stairs.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Y ]                  = calculatedOffsets.stairs.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Z ]                  = calculatedOffsets.stairs.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X ]         = calculatedOffsets.stairsEntrance.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y ]         = calculatedOffsets.stairsEntrance.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z ]         = calculatedOffsets.stairsEntrance.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X ]           = calculatedOffsets.stairwayLeft.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y ]           = calculatedOffsets.stairwayLeft.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z ]           = calculatedOffsets.stairwayLeft.z;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X ]          = calculatedOffsets.stairwayRight.x;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y ]          = calculatedOffsets.stairwayRight.y;
		this[ '#' + StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z ]          = calculatedOffsets.stairwayRight.z;
	}
}
