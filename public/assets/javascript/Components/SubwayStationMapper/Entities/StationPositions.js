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
	#_subwayStationBaseName = 'codekandis:subway-station';

	/**
	 * Stores the structure name station head 1.
	 * @type {String}
	 */
	#_structureNameStationHead1 = String.format`${ 0 }-head-1`( this.#_subwayStationBaseName );

	/**
	 * Stores the structure name station head 2.
	 * @type {String}
	 */
	#_structureNameStationHead2 = String.format`${ 0 }-head-2`( this.#_subwayStationBaseName );

	/**
	 * Stores the structure name concourse.
	 * @type {String}
	 */
	#_structureNameConcourse = String.format`${ 0 }-concourse`( this.#_subwayStationBaseName );

	/**
	 * Stores the structure name stairs port.
	 * @type {String}
	 */
	#_structureNameStairsPort = String.format`${ 0 }-stairs-port`( this.#_subwayStationBaseName );

	/**
	 * Stores the structure name stairs.
	 * @type {String}
	 */
	#_structureNameStairs = String.format`${ 0 }-stairs`( this.#_subwayStationBaseName );

	/**
	 * Stores the structure name stairs entrance.
	 * @type {String}
	 */
	#_structureNameStairsEntrance = String.format`${ 0 }-stairs-entrance`( this.#_subwayStationBaseName );

	/**
	 * Stores the structure name stairway.
	 * @type {String}
	 */
	#_structureNameStairway = String.format`${ 0 }-stairway`( this.#_subwayStationBaseName );

	/**
	 * Stores the structure name stairway left.
	 * @type {String}
	 */
	#_structureNameStairwayLeft = String.format`${ 0 }`( this.#_structureNameStairway );

	/**
	 * Stores the structure name stairway right.
	 * @type {String}
	 */
	#_structureNameStairwayRight = String.format`${ 0 }`( this.#_structureNameStairway );

	/**
	 * Stores the orientation.
	 * @type {String}
	 */
	#_orientation = Orientation.NORTH;

	/**
	 * Stores the position structure block X.
	 * @type {Number}
	 */
	#_structureBlockX = 0;

	/**
	 * Stores the position structure block Y.
	 * @type {Number}
	 */
	#_structureBlockY = 0;

	/**
	 * Stores the position structure block Z.
	 * @type {Number}
	 */
	#_structureBlockZ = 0;

	/**
	 * Stores the calculated command station head mining.
	 * @type {String}
	 */
	#_calculatedCommandStationHeadMining = String.empty;

	/**
	 * Stores the calculated position station head mining 1 X.
	 * @type {Number}
	 */
	#_calculatedPositionStationHeadMining1X = 0;

	/**
	 * Stores the calculated position station head mining 1 Y.
	 * @type {Number}
	 */
	#_calculatedPositionStationHeadMining1Y = 0;

	/**
	 * Stores the calculated position station head mining 1 Z.
	 * @type {Number}
	 */
	#_calculatedPositionStationHeadMining1Z = 0;

	/**
	 * Stores the calculated position station head mining 2 X.
	 * @type {Number}
	 */
	#_calculatedPositionStationHeadMining2X = 0;

	/**
	 * Stores the calculated position station head mining 2 Y.
	 * @type {Number}
	 */
	#_calculatedPositionStationHeadMining2Y = 0;

	/**
	 * Stores the calculated position station head mining 2 Z.
	 * @type {Number}
	 */
	#_calculatedPositionStationHeadMining2Z = 0;

	/**
	 * Stores the calculated command concourse mining.
	 * @type {String}
	 */
	#_calculatedCommandConcourseMining = String.empty;

	/**
	 * Stores the calculated position concourse mining 1 X.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMining1X = 0;

	/**
	 * Stores the calculated position concourse mining 1 Y.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMining1Y = 0;

	/**
	 * Stores the calculated position concourse mining 1 Z.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMining1Z = 0;

	/**
	 * Stores the calculated position concourse mining 2 X.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMining2X = 0;

	/**
	 * Stores the calculated position concourse mining 2 Y.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMining2Y = 0;

	/**
	 * Stores the calculated position concourse mining 2 Z.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMining2Z = 0;

	/**
	 * Stores the calculated command concourse mining R.
	 * @type {String}
	 */
	#_calculatedCommandConcourseMiningR = String.empty;

	/**
	 * Stores the calculated position concourse mining R 1 X.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningR1X = 0;

	/**
	 * Stores the calculated position concourse mining R 1 Y.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningR1Y = 0;

	/**
	 * Stores the calculated position concourse mining R 1 Z.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningR1Z = 0;

	/**
	 * Stores the calculated position concourse mining R 2 X.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningR2X = 0;

	/**
	 * Stores the calculated position concourse mining R 2 Y.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningR2Y = 0;

	/**
	 * Stores the calculated position concourse mining R 2 Z.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningR2Z = 0;

	/**
	 * Stores the calculated command concourse mining L.
	 * @type {String}
	 */
	#_calculatedCommandConcourseMiningL = String.empty;

	/**
	 * Stores the calculated position concourse mining L 1 X.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningL1X = 0;

	/**
	 * Stores the calculated position concourse mining L 1 Y.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningL1Y = 0;

	/**
	 * Stores the calculated position concourse mining L 1 Z.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningL1Z = 0;

	/**
	 * Stores the calculated position concourse mining L 2 X.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningL2X = 0;

	/**
	 * Stores the calculated position concourse mining L 2 Y.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningL2Y = 0;

	/**
	 * Stores the calculated position concourse mining L 2 Z.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningL2Z = 0;

	/**
	 * Stores the calculated command concourse mining RL.
	 * @type {String}
	 */
	#_calculatedCommandConcourseMiningRL = String.empty;

	/**
	 * Stores the calculated position concourse mining RL 1 X.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningRL1X = 0;

	/**
	 * Stores the calculated position concourse mining RL 1 Y.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningRL1Y = 0;

	/**
	 * Stores the calculated position concourse mining RL 1 Z.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningRL1Z = 0;

	/**
	 * Stores the calculated position concourse mining RL 2 X.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningRL2X = 0;

	/**
	 * Stores the calculated position concourse mining RL 2 Y.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningRL2Y = 0;

	/**
	 * Stores the calculated position concourse mining RL 2 Z.
	 * @type {Number}
	 */
	#_calculatedPositionConcourseMiningRL2Z = 0;

	/**
	 * Stores the calculated command arrival bell.
	 * @type {String}
	 */
	#_calculatedCommandArrivalBell = String.empty;

	/**
	 * Stores the calculated position arrival bell X.
	 * @type {Number}
	 */
	#_calculatedPositionArrivalBellX = 0;

	/**
	 * Stores the calculated position arrival bell Y.
	 * @type {Number}
	 */
	#_calculatedPositionArrivalBellY = 0;

	/**
	 * Stores the calculated position arrival bell Z.
	 * @type {Number}
	 */
	#_calculatedPositionArrivalBellZ = 0;

	/**
	 * Stores the calculated command departure bell.
	 * @type {String}
	 */
	#_calculatedCommandDepartureBell = String.empty;

	/**
	 * Stores the calculated position departure bell X.
	 * @type {Number}
	 */
	#_calculatedPositionDepartureBellX = 0;

	/**
	 * Stores the calculated position departure bell Y.
	 * @type {Number}
	 */
	#_calculatedPositionDepartureBellY = 0;

	/**
	 * Stores the calculated position departure bell Z.
	 * @type {Number}
	 */
	#_calculatedPositionDepartureBellZ = 0;

	/**
	 * Stores the calculated station rotation.
	 * @type {Number}
	 */
	#_calculatedStationRotation = 0;

	/**
	 * Stores the calculated offset station head 1 X.
	 * @type {Number}
	 */
	#_calculatedOffsetStationHead1X = 0;

	/**
	 * Stores the calculated offset station head 1 Y.
	 * @type {Number}
	 */
	#_calculatedOffsetStationHead1Y = 0;

	/**
	 * Stores the calculated offset station head 1 Z.
	 * @type {Number}
	 */
	#_calculatedOffsetStationHead1Z = 0;

	/**
	 * Stores the calculated offset station head 2 X.
	 * @type {Number}
	 */
	#_calculatedOffsetStationHead2X = 0;

	/**
	 * Stores the calculated offset station head 2 Y.
	 * @type {Number}
	 */
	#_calculatedOffsetStationHead2Y = 0;

	/**
	 * Stores the calculated offset station head 2 Z.
	 * @type {Number}
	 */
	#_calculatedOffsetStationHead2Z = 0;

	/**
	 * Stores the calculated offset concourse X.
	 * @type {Number}
	 */
	#_calculatedOffsetConcourseX = 0;

	/**
	 * Stores the calculated offset concourse Y.
	 * @type {Number}
	 */
	#_calculatedOffsetConcourseY = 0;

	/**
	 * Stores the calculated offset concourse Z.
	 * @type {Number}
	 */
	#_calculatedOffsetConcourseZ = 0;

	/**
	 * Stores the calculated offset stairs port X.
	 * @type {Number}
	 */
	#_calculatedOffsetStairsPortX = 0;

	/**
	 * Stores the calculated offset stairs port Y.
	 * @type {Number}
	 */
	#_calculatedOffsetStairsPortY = 0;

	/**
	 * Stores the calculated offset stairs port Z.
	 * @type {Number}
	 */
	#_calculatedOffsetStairsPortZ = 0;

	/**
	 * Stores the calculated offset stairs X.
	 * @type {Number}
	 */
	#_calculatedOffsetStairsX = 0;

	/**
	 * Stores the calculated offset stairs Y.
	 * @type {Number}
	 */
	#_calculatedOffsetStairsY = 0;

	/**
	 * Stores the calculated offset stairs Z.
	 * @type {Number}
	 */
	#_calculatedOffsetStairsZ = 0;

	/**
	 * Stores the calculated offset stairs entrance X.
	 * @type {Number}
	 */
	#_calculatedOffsetStairsEntranceX = 0;

	/**
	 * Stores the calculated offset stairs entrance Y.
	 * @type {Number}
	 */
	#_calculatedOffsetStairsEntranceY = 0;

	/**
	 * Stores the calculated offset stairs entrance Z.
	 * @type {Number}
	 */
	#_calculatedOffsetStairsEntranceZ = 0;

	/**
	 * Stores the calculated offset stairway left X.
	 * @type {Number}
	 */
	#_calculatedOffsetStairwayLeftX = 0;

	/**
	 * Stores the calculated offset stairway left Y.
	 * @type {Number}
	 */
	#_calculatedOffsetStairwayLeftY = 0;

	/**
	 * Stores the calculated offset stairway left Z.
	 * @type {Number}
	 */
	#_calculatedOffsetStairwayLeftZ = 0;

	/**
	 * Stores the calculated offset stairway right X.
	 * @type {Number}
	 */
	#_calculatedOffsetStairwayRightX = 0;

	/**
	 * Stores the calculated offset stairway right Y.
	 * @type {Number}
	 */
	#_calculatedOffsetStairwayRightY = 0;

	/**
	 * Stores the calculated offset stairway right Z.
	 * @type {Number}
	 */
	#_calculatedOffsetStairwayRightZ = 0;

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
	get structureNameStationHead1()
	{
		return this.#_structureNameStationHead1;
	}

	/**
	 * Gets the structure name station head 2.
	 * @returns {String} The structure name station head 2.
	 */
	get structureNameStationHead2()
	{
		return this.#_structureNameStationHead2;
	}

	/**
	 * Gets the structure name concourse.
	 * @returns {String} The structure name concourse.
	 */
	get structureNameConcourse()
	{
		return this.#_structureNameConcourse;
	}

	/**
	 * Gets the structure name stairs port.
	 * @returns {String} The structure name stairs port.
	 */
	get structureNameStairsPort()
	{
		return this.#_structureNameStairsPort;
	}

	/**
	 * Gets the structure name stairs.
	 * @returns {String} The structure name stairs.
	 */
	get structureNameStairs()
	{
		return this.#_structureNameStairs;
	}

	/**
	 * Gets the structure name stairs entrance.
	 * @returns {String} The structure name stairs entrance.
	 */
	get structureNameStairsEntrance()
	{
		return this.#_structureNameStairsEntrance;
	}

	/**
	 * Gets the structure name stairway left.
	 * @returns {String} The structure name stairway left.
	 */
	get structureNameStairwayLeft()
	{
		return this.#_structureNameStairwayLeft;
	}

	/**
	 * Gets the structure name stairway right.
	 * @returns {String} The structure name stairway right.
	 */
	get structureNameStairwayRight()
	{
		return this.#_structureNameStairwayRight;
	}

	/**
	 * Gets the orientation.
	 * @returns {String} The orientation.
	 */
	get orientation()
	{
		return this.#_orientation;
	}

	/**
	 * Sets the orientation.
	 * @param {String} value The orientation.
	 */
	set orientation( value )
	{
		this.#_orientation = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.ORIENTATION );

		this.calculate();
	}

	/**
	 * Gets the position structure block X.
	 * @returns {Number} The position structure block X.
	 */
	get structureBlockX()
	{
		return this.#_structureBlockX;
	}

	/**
	 * Sets the position structure block X.
	 * @param {Number} value The position structure block X.
	 */
	set structureBlockX( value )
	{
		this.#_structureBlockX = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.STRUCTURE_BLOCK_X );

		this.calculate();
	}

	/**
	 * Gets the position structure block Y.
	 * @returns {Number} The position structure block Y.
	 */
	get structureBlockY()
	{
		return this.#_structureBlockY;
	}

	/**
	 * Sets the position structure block Y.
	 * @param {Number} value The position structure block Y.
	 */
	set structureBlockY( value )
	{
		this.#_structureBlockY = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.STRUCTURE_BLOCK_Y );

		this.calculate();
	}

	/**
	 * Gets the position structure block Z.
	 * @returns {Number} The position structure block Z.
	 */
	get structureBlockZ()
	{
		return this.#_structureBlockZ;
	}

	/**
	 * Sets the position structure block Z.
	 * @param {Number} value The position structure block Z.
	 */
	set structureBlockZ( value )
	{
		this.#_structureBlockZ = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.STRUCTURE_BLOCK_Z );

		this.calculate();
	}

	/**
	 * Gets the calculated command station head mining.
	 * @returns {String} The calculated command station head mining.
	 */
	get calculatedCommandStationHeadMining()
	{
		return String.format`/fill ${ 0 } ${ 1 } ${ 2 } ${ 3 } ${ 4 } ${ 5 } cave_air replace `
		(
			this.#_calculatedPositionStationHeadMining1X,
			this.#_calculatedPositionStationHeadMining1Y,
			this.#_calculatedPositionStationHeadMining1Z,
			this.#_calculatedPositionStationHeadMining2X,
			this.#_calculatedPositionStationHeadMining2Y,
			this.#_calculatedPositionStationHeadMining2Z
		);
	}

	/**
	 * Gets the calculated position station head mining 1 X.
	 * @returns {Number} The calculated position station head mining 1 X.
	 */
	get calculatedPositionStationHeadMining1X()
	{
		return this.#_calculatedPositionStationHeadMining1X;
	}

	/**
	 * Sets the calculated position station head mining 1 X.
	 * @param {Number} value The calculated position station head mining 1 X.
	 */
	set #calculatedPositionStationHeadMining1X( value )
	{
		this.#_calculatedPositionStationHeadMining1X = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING );
	}

	/**
	 * Gets the calculated position station head mining 1 Y.
	 * @returns {Number} The calculated position station head mining 1 Y.
	 */
	get calculatedPositionStationHeadMining1Y()
	{
		return this.#_calculatedPositionStationHeadMining1Y;
	}

	/**
	 * Sets the calculated position station head mining 1 Y.
	 * @param {Number} value The calculated position station head mining 1 Y.
	 */
	set #calculatedPositionStationHeadMining1Y( value )
	{
		this.#_calculatedPositionStationHeadMining1Y = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING );
	}

	/**
	 * Gets the calculated position station head mining 1 Z.
	 * @returns {Number} The calculated position station head mining 1 Z.
	 */
	get calculatedPositionStationHeadMining1Z()
	{
		return this.#_calculatedPositionStationHeadMining1Z;
	}

	/**
	 * Sets the calculated position station head mining 1 Z.
	 * @param {Number} value The calculated position station head mining 1 Z.
	 */
	set #calculatedPositionStationHeadMining1Z( value )
	{
		this.#_calculatedPositionStationHeadMining1Z = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_1_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING );
	}

	/**
	 * Gets the calculated position station head mining 2 X.
	 * @returns {Number} The calculated position station head mining 2 X.
	 */
	get calculatedPositionStationHeadMining2X()
	{
		return this.#_calculatedPositionStationHeadMining2X;
	}

	/**
	 * Sets the calculated position station head mining 2 X.
	 * @param {Number} value The calculated position station head mining 2 X.
	 */
	set #calculatedPositionStationHeadMining2X( value )
	{
		this.#_calculatedPositionStationHeadMining2X = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING );
	}

	/**
	 * Gets the calculated position station head mining 2 Y.
	 * @returns {Number} The calculated position station head mining 2 Y.
	 */
	get calculatedPositionStationHeadMining2Y()
	{
		return this.#_calculatedPositionStationHeadMining2Y;
	}

	/**
	 * Sets the calculated position station head mining 2 Y.
	 * @param {Number} value The calculated position station head mining 2 Y.
	 */
	set #calculatedPositionStationHeadMining2Y( value )
	{
		this.#_calculatedPositionStationHeadMining2Y = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING );
	}

	/**
	 * Gets the calculated position station head mining 2 Z.
	 * @returns {Number} The calculated position station head mining 2 Z.
	 */
	get calculatedPositionStationHeadMining2Z()
	{
		return this.#_calculatedPositionStationHeadMining2Z;
	}

	/**
	 * Sets the calculated position station head mining 2 Z.
	 * @param {Number} value The calculated position station head mining 2 Z.
	 */
	set #calculatedPositionStationHeadMining2Z( value )
	{
		this.#_calculatedPositionStationHeadMining2Z = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_STATION_HEAD_MINING_2_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_STATION_HEAD_MINING );
	}

	/**
	 * Gets the calculated command concourse mining.
	 * @returns {String} The calculated command concourse mining.
	 */
	get calculatedCommandConcourseMining()
	{
		return String.format`/fill ${ 0 } ${ 1 } ${ 2 } ${ 3 } ${ 4 } ${ 5 } cave_air replace `
		(
			this.#_calculatedPositionConcourseMining1X,
			this.#_calculatedPositionConcourseMining1Y,
			this.#_calculatedPositionConcourseMining1Z,
			this.#_calculatedPositionConcourseMining2X,
			this.#_calculatedPositionConcourseMining2Y,
			this.#_calculatedPositionConcourseMining2Z
		);
	}

	/**
	 * Gets the calculated position concourse mining 1 X.
	 * @returns {Number} The calculated position concourse mining 1 X.
	 */
	get calculatedPositionConcourseMining1X()
	{
		return this.#_calculatedPositionConcourseMining1X;
	}

	/**
	 * Sets the calculated position concourse mining 1 X.
	 * @param {Number} value The calculated position concourse mining 1 X.
	 */
	set #calculatedPositionConcourseMining1X( value )
	{
		this.#_calculatedPositionConcourseMining1X = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING );
	}

	/**
	 * Gets the calculated position concourse mining 1 Y.
	 * @returns {Number} The calculated position concourse mining 1 Y.
	 */
	get calculatedPositionConcourseMining1Y()
	{
		return this.#_calculatedPositionConcourseMining1Y;
	}

	/**
	 * Sets the calculated position concourse mining 1 Y.
	 * @param {Number} value The calculated position concourse mining 1 Y.
	 */
	set #calculatedPositionConcourseMining1Y( value )
	{
		this.#_calculatedPositionConcourseMining1Y = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING );
	}

	/**
	 * Gets the calculated position concourse mining 1 Z.
	 * @returns {Number} The calculated position concourse mining 1 Z.
	 */
	get calculatedPositionConcourseMining1Z()
	{
		return this.#_calculatedPositionConcourseMining1Z;
	}

	/**
	 * Sets the calculated position concourse mining 1 Z.
	 * @param {Number} value The calculated position concourse mining 1 Z.
	 */
	set #calculatedPositionConcourseMining1Z( value )
	{
		this.#_calculatedPositionConcourseMining1Z = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_1_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING );
	}

	/**
	 * Gets the calculated position concourse mining 2 X.
	 * @returns {Number} The calculated position concourse mining 2 X.
	 */
	get calculatedPositionConcourseMining2X()
	{
		return this.#_calculatedPositionConcourseMining2X;
	}

	/**
	 * Sets the calculated position concourse mining 2 X.
	 * @param {Number} value The calculated position concourse mining 2 X.
	 */
	set #calculatedPositionConcourseMining2X( value )
	{
		this.#_calculatedPositionConcourseMining2X = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING );
	}

	/**
	 * Gets the calculated position concourse mining 2 Y.
	 * @returns {Number} The calculated position concourse mining 2 Y.
	 */
	get calculatedPositionConcourseMining2Y()
	{
		return this.#_calculatedPositionConcourseMining2Y;
	}

	/**
	 * Sets the calculated position concourse mining 2 Y.
	 * @param {Number} value The calculated position concourse mining 2 Y.
	 */
	set #calculatedPositionConcourseMining2Y( value )
	{
		this.#_calculatedPositionConcourseMining2Y = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING );
	}

	/**
	 * Gets the calculated position concourse mining 2 Z.
	 * @returns {Number} The calculated position concourse mining 2 Z.
	 */
	get calculatedPositionConcourseMining2Z()
	{
		return this.#_calculatedPositionConcourseMining2Z;
	}

	/**
	 * Sets the calculated position concourse mining 2 Z.
	 * @param {Number} value The calculated position concourse mining 2 Z.
	 */
	set #calculatedPositionConcourseMining2Z( value )
	{
		this.#_calculatedPositionConcourseMining2Z = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_2_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING );
	}

	/**
	 * Gets the calculated command concourse mining R.
	 * @returns {String} The calculated command concourse mining R.
	 */
	get calculatedCommandConcourseMiningR()
	{
		return String.format`/fill ${ 0 } ${ 1 } ${ 2 } ${ 3 } ${ 4 } ${ 5 } cave_air replace `
		(
			this.#_calculatedPositionConcourseMiningR1X,
			this.#_calculatedPositionConcourseMiningR1Y,
			this.#_calculatedPositionConcourseMiningR1Z,
			this.#_calculatedPositionConcourseMiningR2X,
			this.#_calculatedPositionConcourseMiningR2Y,
			this.#_calculatedPositionConcourseMiningR2Z
		);
	}

	/**
	 * Gets the calculated position concourse mining 1 X.
	 * @returns {Number} The calculated position concourse mining 1 X.
	 */
	get calculatedPositionConcourseMiningR1X()
	{
		return this.#_calculatedPositionConcourseMiningR1X;
	}

	/**
	 * Sets the calculated position concourse mining 1 X.
	 * @param {Number} value The calculated position concourse mining 1 X.
	 */
	set #calculatedPositionConcourseMiningR1X( value )
	{
		this.#_calculatedPositionConcourseMiningR1X = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R );
	}

	/**
	 * Gets the calculated position concourse mining 1 Y.
	 * @returns {Number} The calculated position concourse mining 1 Y.
	 */
	get calculatedPositionConcourseMiningR1Y()
	{
		return this.#_calculatedPositionConcourseMiningR1Y;
	}

	/**
	 * Sets the calculated position concourse mining 1 Y.
	 * @param {Number} value The calculated position concourse mining 1 Y.
	 */
	set #calculatedPositionConcourseMiningR1Y( value )
	{
		this.#_calculatedPositionConcourseMiningR1Y = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R );
	}

	/**
	 * Gets the calculated position concourse mining 1 Z.
	 * @returns {Number} The calculated position concourse mining 1 Z.
	 */
	get calculatedPositionConcourseMiningR1Z()
	{
		return this.#_calculatedPositionConcourseMiningR1Z;
	}

	/**
	 * Sets the calculated position concourse mining 1 Z.
	 * @param {Number} value The calculated position concourse mining 1 Z.
	 */
	set #calculatedPositionConcourseMiningR1Z( value )
	{
		this.#_calculatedPositionConcourseMiningR1Z = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_1_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R );
	}

	/**
	 * Gets the calculated position concourse mining 2 X.
	 * @returns {Number} The calculated position concourse mining 2 X.
	 */
	get calculatedPositionConcourseMiningR2X()
	{
		return this.#_calculatedPositionConcourseMiningR2X;
	}

	/**
	 * Sets the calculated position concourse mining 2 X.
	 * @param {Number} value The calculated position concourse mining 2 X.
	 */
	set #calculatedPositionConcourseMiningR2X( value )
	{
		this.#_calculatedPositionConcourseMiningR2X = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R );
	}

	/**
	 * Gets the calculated position concourse mining 2 Y.
	 * @returns {Number} The calculated position concourse mining 2 Y.
	 */
	get calculatedPositionConcourseMiningR2Y()
	{
		return this.#_calculatedPositionConcourseMiningR2Y;
	}

	/**
	 * Sets the calculated position concourse mining 2 Y.
	 * @param {Number} value The calculated position concourse mining 2 Y.
	 */
	set #calculatedPositionConcourseMiningR2Y( value )
	{
		this.#_calculatedPositionConcourseMiningR2Y = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R );
	}

	/**
	 * Gets the calculated position concourse mining 2 Z.
	 * @returns {Number} The calculated position concourse mining 2 Z.
	 */
	get calculatedPositionConcourseMiningR2Z()
	{
		return this.#_calculatedPositionConcourseMiningR2Z;
	}

	/**
	 * Sets the calculated position concourse mining 2 Z.
	 * @param {Number} value The calculated position concourse mining 2 Z.
	 */
	set #calculatedPositionConcourseMiningR2Z( value )
	{
		this.#_calculatedPositionConcourseMiningR2Z = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_R_2_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_R );
	}

	/**
	 * Gets the calculated command concourse mining L.
	 * @returns {String} The calculated command concourse mining L.
	 */
	get calculatedCommandConcourseMiningL()
	{
		return String.format`/fill ${ 0 } ${ 1 } ${ 2 } ${ 3 } ${ 4 } ${ 5 } cave_air replace `
		(
			this.#_calculatedPositionConcourseMiningL1X,
			this.#_calculatedPositionConcourseMiningL1Y,
			this.#_calculatedPositionConcourseMiningL1Z,
			this.#_calculatedPositionConcourseMiningL2X,
			this.#_calculatedPositionConcourseMiningL2Y,
			this.#_calculatedPositionConcourseMiningL2Z
		);
	}

	/**
	 * Gets the calculated position concourse mining 1 X.
	 * @returns {Number} The calculated position concourse mining 1 X.
	 */
	get calculatedPositionConcourseMiningL1X()
	{
		return this.#_calculatedPositionConcourseMiningL1X;
	}

	/**
	 * Sets the calculated position concourse mining 1 X.
	 * @param {Number} value The calculated position concourse mining 1 X.
	 */
	set #calculatedPositionConcourseMiningL1X( value )
	{
		this.#_calculatedPositionConcourseMiningL1X = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L );
	}

	/**
	 * Gets the calculated position concourse mining 1 Y.
	 * @returns {Number} The calculated position concourse mining 1 Y.
	 */
	get calculatedPositionConcourseMiningL1Y()
	{
		return this.#_calculatedPositionConcourseMiningL1Y;
	}

	/**
	 * Sets the calculated position concourse mining 1 Y.
	 * @param {Number} value The calculated position concourse mining 1 Y.
	 */
	set #calculatedPositionConcourseMiningL1Y( value )
	{
		this.#_calculatedPositionConcourseMiningL1Y = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L );
	}

	/**
	 * Gets the calculated position concourse mining 1 Z.
	 * @returns {Number} The calculated position concourse mining 1 Z.
	 */
	get calculatedPositionConcourseMiningL1Z()
	{
		return this.#_calculatedPositionConcourseMiningL1Z;
	}

	/**
	 * Sets the calculated position concourse mining 1 Z.
	 * @param {Number} value The calculated position concourse mining 1 Z.
	 */
	set #calculatedPositionConcourseMiningL1Z( value )
	{
		this.#_calculatedPositionConcourseMiningL1Z = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_1_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L );
	}

	/**
	 * Gets the calculated position concourse mining 2 X.
	 * @returns {Number} The calculated position concourse mining 2 X.
	 */
	get calculatedPositionConcourseMiningL2X()
	{
		return this.#_calculatedPositionConcourseMiningL2X;
	}

	/**
	 * Sets the calculated position concourse mining 2 X.
	 * @param {Number} value The calculated position concourse mining 2 X.
	 */
	set #calculatedPositionConcourseMiningL2X( value )
	{
		this.#_calculatedPositionConcourseMiningL2X = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L );
	}

	/**
	 * Gets the calculated position concourse mining 2 Y.
	 * @returns {Number} The calculated position concourse mining 2 Y.
	 */
	get calculatedPositionConcourseMiningL2Y()
	{
		return this.#_calculatedPositionConcourseMiningL2Y;
	}

	/**
	 * Sets the calculated position concourse mining 2 Y.
	 * @param {Number} value The calculated position concourse mining 2 Y.
	 */
	set #calculatedPositionConcourseMiningL2Y( value )
	{
		this.#_calculatedPositionConcourseMiningL2Y = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L );
	}

	/**
	 * Gets the calculated position concourse mining 2 Z.
	 * @returns {Number} The calculated position concourse mining 2 Z.
	 */
	get calculatedPositionConcourseMiningL2Z()
	{
		return this.#_calculatedPositionConcourseMiningL2Z;
	}

	/**
	 * Sets the calculated position concourse mining 2 Z.
	 * @param {Number} value The calculated position concourse mining 2 Z.
	 */
	set #calculatedPositionConcourseMiningL2Z( value )
	{
		this.#_calculatedPositionConcourseMiningL2Z = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_L_2_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_L );
	}

	/**
	 * Gets the calculated command concourse mining RL.
	 * @returns {String} The calculated command concourse mining RL.
	 */
	get calculatedCommandConcourseMiningRL()
	{
		return String.format`/fill ${ 0 } ${ 1 } ${ 2 } ${ 3 } ${ 4 } ${ 5 } cave_air replace `
		(
			this.#_calculatedPositionConcourseMiningRL1X,
			this.#_calculatedPositionConcourseMiningRL1Y,
			this.#_calculatedPositionConcourseMiningRL1Z,
			this.#_calculatedPositionConcourseMiningRL2X,
			this.#_calculatedPositionConcourseMiningRL2Y,
			this.#_calculatedPositionConcourseMiningRL2Z
		);
	}

	/**
	 * Gets the calculated position concourse mining 1 X.
	 * @returns {Number} The calculated position concourse mining 1 X.
	 */
	get calculatedPositionConcourseMiningRL1X()
	{
		return this.#_calculatedPositionConcourseMiningRL1X;
	}

	/**
	 * Sets the calculated position concourse mining 1 X.
	 * @param {Number} value The calculated position concourse mining 1 X.
	 */
	set #calculatedPositionConcourseMiningRL1X( value )
	{
		this.#_calculatedPositionConcourseMiningRL1X = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL );
	}

	/**
	 * Gets the calculated position concourse mining 1 Y.
	 * @returns {Number} The calculated position concourse mining 1 Y.
	 */
	get calculatedPositionConcourseMiningRL1Y()
	{
		return this.#_calculatedPositionConcourseMiningRL1Y;
	}

	/**
	 * Sets the calculated position concourse mining 1 Y.
	 * @param {Number} value The calculated position concourse mining 1 Y.
	 */
	set #calculatedPositionConcourseMiningRL1Y( value )
	{
		this.#_calculatedPositionConcourseMiningRL1Y = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL );
	}

	/**
	 * Gets the calculated position concourse mining 1 Z.
	 * @returns {Number} The calculated position concourse mining 1 Z.
	 */
	get calculatedPositionConcourseMiningRL1Z()
	{
		return this.#_calculatedPositionConcourseMiningRL1Z;
	}

	/**
	 * Sets the calculated position concourse mining 1 Z.
	 * @param {Number} value The calculated position concourse mining 1 Z.
	 */
	set #calculatedPositionConcourseMiningRL1Z( value )
	{
		this.#_calculatedPositionConcourseMiningRL1Z = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_1_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL );
	}

	/**
	 * Gets the calculated position concourse mining 2 X.
	 * @returns {Number} The calculated position concourse mining 2 X.
	 */
	get calculatedPositionConcourseMiningRL2X()
	{
		return this.#_calculatedPositionConcourseMiningRL2X;
	}

	/**
	 * Sets the calculated position concourse mining 2 X.
	 * @param {Number} value The calculated position concourse mining 2 X.
	 */
	set #calculatedPositionConcourseMiningRL2X( value )
	{
		this.#_calculatedPositionConcourseMiningRL2X = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL );
	}

	/**
	 * Gets the calculated position concourse mining 2 Y.
	 * @returns {Number} The calculated position concourse mining 2 Y.
	 */
	get calculatedPositionConcourseMiningRL2Y()
	{
		return this.#_calculatedPositionConcourseMiningRL2Y;
	}

	/**
	 * Sets the calculated position concourse mining 2 Y.
	 * @param {Number} value The calculated position concourse mining 2 Y.
	 */
	set #calculatedPositionConcourseMiningRL2Y( value )
	{
		this.#_calculatedPositionConcourseMiningRL2Y = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL );
	}

	/**
	 * Gets the calculated position concourse mining 2 Z.
	 * @returns {Number} The calculated position concourse mining 2 Z.
	 */
	get calculatedPositionConcourseMiningRL2Z()
	{
		return this.#_calculatedPositionConcourseMiningRL2Z;
	}

	/**
	 * Sets the calculated position concourse mining 2 Z.
	 * @param {Number} value The calculated position concourse mining 2 Z.
	 */
	set #calculatedPositionConcourseMiningRL2Z( value )
	{
		this.#_calculatedPositionConcourseMiningRL2Z = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_CONCOURSE_MINING_RL_2_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_CONCOURSE_MINING_RL );
	}

	/**
	 * Gets the calculated command arrival bell.
	 * @returns {String} The calculated command arrival bell.
	 */
	get calculatedCommandArrivalBell()
	{
		return String.format`playsound minecraft:block.bell.use block @a ${ 0 } ${ 1 } ${ 2 } 1.3 2`
		(
			this.#_calculatedPositionArrivalBellX,
			this.#_calculatedPositionArrivalBellY,
			this.#_calculatedPositionArrivalBellZ
		);
	}

	/**
	 * Gets the calculated position arrival bell X.
	 * @returns {Number} The calculated position arrival bell X.
	 */
	get calculatedPositionArrivalBellX()
	{
		return this.#_calculatedPositionArrivalBellX;
	}

	/**
	 * Sets the calculated position arrival bell X.
	 * @param {Number} value The calculated position arrival bell X.
	 */
	set #calculatedPositionArrivalBellX( value )
	{
		this.#_calculatedPositionArrivalBellX = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL );
	}

	/**
	 * Gets the calculated position arrival bell Y.
	 * @returns {Number} The calculated position arrival bell Y.
	 */
	get calculatedPositionArrivalBellY()
	{
		return this.#_calculatedPositionArrivalBellY;
	}

	/**
	 * Sets the calculated position arrival bell Y.
	 * @param {Number} value The calculated position arrival bell Y.
	 */
	set #calculatedPositionArrivalBellY( value )
	{
		this.#_calculatedPositionArrivalBellY = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL );
	}

	/**
	 * Gets the calculated position arrival bell Z.
	 * @returns {Number} The calculated position arrival bell Z.
	 */
	get calculatedPositionArrivalBellZ()
	{
		return this.#_calculatedPositionArrivalBellZ;
	}

	/**
	 * Sets the calculated position arrival bell Z.
	 * @param {Number} value The calculated position arrival bell Z.
	 */
	set #calculatedPositionArrivalBellZ( value )
	{
		this.#_calculatedPositionArrivalBellZ = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_ARRIVAL_BELL_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_ARRIVAL_BELL );
	}

	/**
	 * Gets the calculated command departure bell.
	 * @returns {String} The calculated command departure bell.
	 */
	get calculatedCommandDepartureBell()
	{
		return String.format`playsound minecraft:block.bell.use block @a ${ 0 } ${ 1 } ${ 2 } 1.3 2`
		(
			this.#_calculatedPositionDepartureBellX,
			this.#_calculatedPositionDepartureBellY,
			this.#_calculatedPositionDepartureBellZ
		);
	}

	/**
	 * Gets the calculated position departure bell X.
	 * @returns {Number} The calculated position departure bell X.
	 */
	get calculatedPositionDepartureBellX()
	{
		return this.#_calculatedPositionDepartureBellX;
	}

	/**
	 * Sets the calculated position departure bell X.
	 * @param {Number} value The calculated position departure bell X.
	 */
	set #calculatedPositionDepartureBellX( value )
	{
		this.#_calculatedPositionDepartureBellX = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_X );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL );
	}

	/**
	 * Gets the calculated position departure bell Y.
	 * @returns {Number} The calculated position departure bell Y.
	 */
	get calculatedPositionDepartureBellY()
	{
		return this.#_calculatedPositionDepartureBellY;
	}

	/**
	 * Sets the calculated position departure bell Y.
	 * @param {Number} value The calculated position departure bell Y.
	 */
	set #calculatedPositionDepartureBellY( value )
	{
		this.#_calculatedPositionDepartureBellY = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Y );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL );
	}

	/**
	 * Gets the calculated position departure bell Z.
	 * @returns {Number} The calculated position departure bell Z.
	 */
	get calculatedPositionDepartureBellZ()
	{
		return this.#_calculatedPositionDepartureBellZ;
	}

	/**
	 * Sets the calculated position departure bell Z.
	 * @param {Number} value The calculated position departure bell Z.
	 */
	set #calculatedPositionDepartureBellZ( value )
	{
		this.#_calculatedPositionDepartureBellZ = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_POSITION_DEPARTURE_BELL_Z );
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_COMMAND_DEPARTURE_BELL );
	}

	/**
	 * Gets the calculated station rotation.
	 * @returns {Number} The calculated station rotation.
	 */
	get calculatedStationRotation()
	{
		return this.#_calculatedStationRotation;
	}

	/**
	 * Sets the calculated station rotation.
	 * @param {Number} value The calculated station rotation.
	 */
	set #calculatedStationRotation( value )
	{
		this.#_calculatedStationRotation = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_STATION_ROTATION );
	}

	/**
	 * Gets the calculated offset station head 1 X.
	 * @returns {Number} The calculated offset station head 1 X.
	 */
	get calculatedOffsetStationHead1X()
	{
		return this.#_calculatedOffsetStationHead1X;
	}

	/**
	 * Sets the calculated offset station head 1 X.
	 * @param {Number} value The calculated offset station head 1 X.
	 */
	set #calculatedOffsetStationHead1X( value )
	{
		this.#_calculatedOffsetStationHead1X = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_X );
	}

	/**
	 * Gets the calculated offset station head 1 Y.
	 * @returns {Number} The calculated offset station head 1 Y.
	 */
	get calculatedOffsetStationHead1Y()
	{
		return this.#_calculatedOffsetStationHead1Y;
	}

	/**
	 * Sets the calculated offset station head 1 Y.
	 * @param {Number} value The calculated offset station head 1 Y.
	 */
	set #calculatedOffsetStationHead1Y( value )
	{
		this.#_calculatedOffsetStationHead1Y = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Y );
	}

	/**
	 * Gets the calculated offset station head 1 Z.
	 * @returns {Number} The calculated offset station head 1 Z.
	 */
	get calculatedOffsetStationHead1Z()
	{
		return this.#_calculatedOffsetStationHead1Z;
	}

	/**
	 * Sets the calculated offset station head 1 Z.
	 * @param {Number} value The calculated offset station head 1 Z.
	 */
	set #calculatedOffsetStationHead1Z( value )
	{
		this.#_calculatedOffsetStationHead1Z = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_1_Z );
	}

	/**
	 * Gets the calculated offset station head 2 X.
	 * @returns {Number} The calculated offset station head 2 X.
	 */
	get calculatedOffsetStationHead2X()
	{
		return this.#_calculatedOffsetStationHead2X;
	}

	/**
	 * Sets the calculated offset station head 2 X.
	 * @param {Number} value The calculated offset station head 2 X.
	 */
	set #calculatedOffsetStationHead2X( value )
	{
		this.#_calculatedOffsetStationHead2X = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_X );
	}

	/**
	 * Gets the calculated offset station head 2 Y.
	 * @returns {Number} The calculated offset station head 2 Y.
	 */
	get calculatedOffsetStationHead2Y()
	{
		return this.#_calculatedOffsetStationHead2Y;
	}

	/**
	 * Sets the calculated offset station head 2 Y.
	 * @param {Number} value The calculated offset station head 2 Y.
	 */
	set #calculatedOffsetStationHead2Y( value )
	{
		this.#_calculatedOffsetStationHead2Y = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Y );
	}

	/**
	 * Gets the calculated offset station head 2 Z.
	 * @returns {Number} The calculated offset station head 2 Z.
	 */
	get calculatedOffsetStationHead2Z()
	{
		return this.#_calculatedOffsetStationHead2Z;
	}

	/**
	 * Sets the calculated offset station head 2 Z.
	 * @param {Number} value The calculated offset station head 2 Z.
	 */
	set #calculatedOffsetStationHead2Z( value )
	{
		this.#_calculatedOffsetStationHead2Z = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STATION_HEAD_2_Z );
	}

	/**
	 * Gets the calculated offset concourse X.
	 * @returns {Number} The calculated offset concourse X.
	 */
	get calculatedOffsetConcourseX()
	{
		return this.#_calculatedOffsetConcourseX;
	}

	/**
	 * Sets the calculated offset concourse X.
	 * @param {Number} value The calculated offset concourse X.
	 */
	set #calculatedOffsetConcourseX( value )
	{
		this.#_calculatedOffsetConcourseX = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_X );
	}

	/**
	 * Gets the calculated offset concourse Y.
	 * @returns {Number} The calculated offset concourse Y.
	 */
	get calculatedOffsetConcourseY()
	{
		return this.#_calculatedOffsetConcourseY;
	}

	/**
	 * Sets the calculated offset concourse Y.
	 * @param {Number} value The calculated offset concourse Y.
	 */
	set #calculatedOffsetConcourseY( value )
	{
		this.#_calculatedOffsetConcourseY = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Y );
	}

	/**
	 * Gets the calculated offset concourse Z.
	 * @returns {Number} The calculated offset concourse Z.
	 */
	get calculatedOffsetConcourseZ()
	{
		return this.#_calculatedOffsetConcourseZ;
	}

	/**
	 * Sets the calculated offset concourse Z.
	 * @param {Number} value The calculated offset concourse Z.
	 */
	set #calculatedOffsetConcourseZ( value )
	{
		this.#_calculatedOffsetConcourseZ = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_CONCOURSE_Z );
	}

	/**
	 * Gets the calculated offset stairs port X.
	 * @returns {Number} The calculated offset stairs port X.
	 */
	get calculatedOffsetStairsPortX()
	{
		return this.#_calculatedOffsetStairsPortX;
	}

	/**
	 * Sets the calculated offset stairs port X.
	 * @param {Number} value The calculated offset stairs port X.
	 */
	set #calculatedOffsetStairsPortX( value )
	{
		this.#_calculatedOffsetStairsPortX = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X );
	}

	/**
	 * Gets the calculated offset stairs port Y.
	 * @returns {Number} The calculated offset stairs port Y.
	 */
	get calculatedOffsetStairsPortY()
	{
		return this.#_calculatedOffsetStairsPortY;
	}

	/**
	 * Sets the calculated offset stairs port Y.
	 * @param {Number} value The calculated offset stairs port Y.
	 */
	set #calculatedOffsetStairsPortY( value )
	{
		this.#_calculatedOffsetStairsPortY = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y );
	}

	/**
	 * Gets the calculated offset stairs port Z.
	 * @returns {Number} The calculated offset stairs port Z.
	 */
	get calculatedOffsetStairsPortZ()
	{
		return this.#_calculatedOffsetStairsPortZ;
	}

	/**
	 * Sets the calculated offset stairs port Z.
	 * @param {Number} value The calculated offset stairs port Z.
	 */
	set #calculatedOffsetStairsPortZ( value )
	{
		this.#_calculatedOffsetStairsPortZ = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z );
	}

	/**
	 * Gets the calculated offset stairs X.
	 * @returns {Number} The calculated offset stairs X.
	 */
	get calculatedOffsetStairsX()
	{
		return this.#_calculatedOffsetStairsX;
	}

	/**
	 * Sets the calculated offset stairs X.
	 * @param {Number} value The calculated offset stairs X.
	 */
	set #calculatedOffsetStairsX( value )
	{
		this.#_calculatedOffsetStairsX = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_X );
	}

	/**
	 * Gets the calculated offset stairs Y.
	 * @returns {Number} The calculated offset stairs Y.
	 */
	get calculatedOffsetStairsY()
	{
		return this.#_calculatedOffsetStairsY;
	}

	/**
	 * Sets the calculated offset stairs Y.
	 * @param {Number} value The calculated offset stairs Y.
	 */
	set #calculatedOffsetStairsY( value )
	{
		this.#_calculatedOffsetStairsY = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Y );
	}

	/**
	 * Gets the calculated offset stairs Z.
	 * @returns {Number} The calculated offset stairs Z.
	 */
	get calculatedOffsetStairsZ()
	{
		return this.#_calculatedOffsetStairsZ;
	}

	/**
	 * Sets the calculated offset stairs Z.
	 * @param {Number} value The calculated offset stairs Z.
	 */
	set #calculatedOffsetStairsZ( value )
	{
		this.#_calculatedOffsetStairsZ = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_Z );
	}

	/**
	 * Gets the calculated offset stairs entrance X.
	 * @returns {Number} The calculated offset stairs entrance X.
	 */
	get calculatedOffsetStairsEntranceX()
	{
		return this.#_calculatedOffsetStairsEntranceX;
	}

	/**
	 * Sets the calculated offset stairs entrance X.
	 * @param {Number} value The calculated offset stairs entrance X.
	 */
	set #calculatedOffsetStairsEntranceX( value )
	{
		this.#_calculatedOffsetStairsEntranceX = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X );
	}

	/**
	 * Gets the calculated offset stairs entrance Y.
	 * @returns {Number} The calculated offset stairs entrance Y.
	 */
	get calculatedOffsetStairsEntranceY()
	{
		return this.#_calculatedOffsetStairsEntranceY;
	}

	/**
	 * Sets the calculated offset stairs entrance Y.
	 * @param {Number} value The calculated offset stairs entrance Y.
	 */
	set #calculatedOffsetStairsEntranceY( value )
	{
		this.#_calculatedOffsetStairsEntranceY = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y );
	}

	/**
	 * Gets the calculated offset stairs entrance Z.
	 * @returns {Number} The calculated offset stairs entrance Z.
	 */
	get calculatedOffsetStairsEntranceZ()
	{
		return this.#_calculatedOffsetStairsEntranceZ;
	}

	/**
	 * Sets the calculated offset stairs entrance Z.
	 * @param {Number} value The calculated offset stairs entrance Z.
	 */
	set #calculatedOffsetStairsEntranceZ( value )
	{
		this.#_calculatedOffsetStairsEntranceZ = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z );
	}

	/**
	 * Gets the calculated offset stairway left X.
	 * @returns {Number} The calculated offset stairway left X.
	 */
	get calculatedOffsetStairwayLeftX()
	{
		return this.#_calculatedOffsetStairwayLeftX;
	}

	/**
	 * Sets the calculated offset stairway left X.
	 * @param {Number} value The calculated offset stairway left X.
	 */
	set #calculatedOffsetStairwayLeftX( value )
	{
		this.#_calculatedOffsetStairwayLeftX = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X );
	}

	/**
	 * Gets the calculated offset stairway left Y.
	 * @returns {Number} The calculated offset stairway left Y.
	 */
	get calculatedOffsetStairwayLeftY()
	{
		return this.#_calculatedOffsetStairwayLeftY;
	}

	/**
	 * Sets the calculated offset stairway left Y.
	 * @param {Number} value The calculated offset stairway left Y.
	 */
	set #calculatedOffsetStairwayLeftY( value )
	{
		this.#_calculatedOffsetStairwayLeftY = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y );
	}

	/**
	 * Gets the calculated offset stairway left Z.
	 * @returns {Number} The calculated offset stairway left Z.
	 */
	get calculatedOffsetStairwayLeftZ()
	{
		return this.#_calculatedOffsetStairwayLeftZ;
	}

	/**
	 * Sets the calculated offset stairway left Z.
	 * @param {Number} value The calculated offset stairway left Z.
	 */
	set #calculatedOffsetStairwayLeftZ( value )
	{
		this.#_calculatedOffsetStairwayLeftZ = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z );
	}

	/**
	 * Gets the calculated offset stairway right X.
	 * @returns {Number} The calculated offset stairway right X.
	 */
	get calculatedOffsetStairwayRightX()
	{
		return this.#_calculatedOffsetStairwayRightX;
	}

	/**
	 * Sets the calculated offset stairway right X.
	 * @param {Number} value The calculated offset stairway right X.
	 */
	set #calculatedOffsetStairwayRightX( value )
	{
		this.#_calculatedOffsetStairwayRightX = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X );
	}

	/**
	 * Gets the calculated offset stairway right Y.
	 * @returns {Number} The calculated offset stairway right Y.
	 */
	get calculatedOffsetStairwayRightY()
	{
		return this.#_calculatedOffsetStairwayRightY;
	}

	/**
	 * Sets the calculated offset stairway right Y.
	 * @param {Number} value The calculated offset stairway right Y.
	 */
	set #calculatedOffsetStairwayRightY( value )
	{
		this.#_calculatedOffsetStairwayRightY = value;
		this._dispatchPropertyChangedEvent( StationPositionsPropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y );
	}

	/**
	 * Gets the calculated offset stairway right Z.
	 * @returns {Number} The calculated offset stairway right Z.
	 */
	get calculatedOffsetStairwayRightZ()
	{
		return this.#_calculatedOffsetStairwayRightZ;
	}

	/**
	 * Sets the calculated offset stairway right Z.
	 * @param {Number} value The calculated offset stairway right Z.
	 */
	set #calculatedOffsetStairwayRightZ( value )
	{
		this.#_calculatedOffsetStairwayRightZ = value;
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

		this.#calculatedPositionStationHeadMining1X = calculatedOffsets.stationHeadMining1.x;
		this.#calculatedPositionStationHeadMining1Y = calculatedOffsets.stationHeadMining1.y;
		this.#calculatedPositionStationHeadMining1Z = calculatedOffsets.stationHeadMining1.z;
		this.#calculatedPositionStationHeadMining2X = calculatedOffsets.stationHeadMining2.x;
		this.#calculatedPositionStationHeadMining2Y = calculatedOffsets.stationHeadMining2.y;
		this.#calculatedPositionStationHeadMining2Z = calculatedOffsets.stationHeadMining2.z;
		this.#calculatedPositionConcourseMining1X   = calculatedOffsets.concourseMining1.x;
		this.#calculatedPositionConcourseMining1Y   = calculatedOffsets.concourseMining1.y;
		this.#calculatedPositionConcourseMining1Z   = calculatedOffsets.concourseMining1.z;
		this.#calculatedPositionConcourseMining2X   = calculatedOffsets.concourseMining2.x;
		this.#calculatedPositionConcourseMining2Y   = calculatedOffsets.concourseMining2.y;
		this.#calculatedPositionConcourseMining2Z   = calculatedOffsets.concourseMining2.z;
		this.#calculatedPositionConcourseMiningR1X  = calculatedOffsets.concourseMiningR1.x;
		this.#calculatedPositionConcourseMiningR1Y  = calculatedOffsets.concourseMiningR1.y;
		this.#calculatedPositionConcourseMiningR1Z  = calculatedOffsets.concourseMiningR1.z;
		this.#calculatedPositionConcourseMiningR2X  = calculatedOffsets.concourseMiningR2.x;
		this.#calculatedPositionConcourseMiningR2Y  = calculatedOffsets.concourseMiningR2.y;
		this.#calculatedPositionConcourseMiningR2Z  = calculatedOffsets.concourseMiningR2.z;
		this.#calculatedPositionConcourseMiningL1X  = calculatedOffsets.concourseMiningL1.x;
		this.#calculatedPositionConcourseMiningL1Y  = calculatedOffsets.concourseMiningL1.y;
		this.#calculatedPositionConcourseMiningL1Z  = calculatedOffsets.concourseMiningL1.z;
		this.#calculatedPositionConcourseMiningL2X  = calculatedOffsets.concourseMiningL2.x;
		this.#calculatedPositionConcourseMiningL2Y  = calculatedOffsets.concourseMiningL2.y;
		this.#calculatedPositionConcourseMiningL2Z  = calculatedOffsets.concourseMiningL2.z;
		this.#calculatedPositionConcourseMiningRL1X = calculatedOffsets.concourseMiningRL1.x;
		this.#calculatedPositionConcourseMiningRL1Y = calculatedOffsets.concourseMiningRL1.y;
		this.#calculatedPositionConcourseMiningRL1Z = calculatedOffsets.concourseMiningRL1.z;
		this.#calculatedPositionConcourseMiningRL2X = calculatedOffsets.concourseMiningRL2.x;
		this.#calculatedPositionConcourseMiningRL2Y = calculatedOffsets.concourseMiningRL2.y;
		this.#calculatedPositionConcourseMiningRL2Z = calculatedOffsets.concourseMiningRL2.z;
		this.#calculatedPositionArrivalBellX        = calculatedOffsets.arrivalBell.x;
		this.#calculatedPositionArrivalBellY        = calculatedOffsets.arrivalBell.y;
		this.#calculatedPositionArrivalBellZ        = calculatedOffsets.arrivalBell.z;
		this.#calculatedPositionDepartureBellX      = calculatedOffsets.departureBell.x;
		this.#calculatedPositionDepartureBellY      = calculatedOffsets.departureBell.y;
		this.#calculatedPositionDepartureBellZ      = calculatedOffsets.departureBell.z;
		this.#calculatedStationRotation             = calculatedOffsets.rotation;
		this.#calculatedOffsetStationHead1X         = calculatedOffsets.stationHead1.x;
		this.#calculatedOffsetStationHead1Y         = calculatedOffsets.stationHead1.y;
		this.#calculatedOffsetStationHead1Z         = calculatedOffsets.stationHead1.z;
		this.#calculatedOffsetStationHead2X         = calculatedOffsets.stationHead2.x;
		this.#calculatedOffsetStationHead2Y         = calculatedOffsets.stationHead2.y;
		this.#calculatedOffsetStationHead2Z         = calculatedOffsets.stationHead2.z;
		this.#calculatedOffsetConcourseX            = calculatedOffsets.concourse.x;
		this.#calculatedOffsetConcourseY            = calculatedOffsets.concourse.y;
		this.#calculatedOffsetConcourseZ            = calculatedOffsets.concourse.z;
		this.#calculatedOffsetStairsPortX           = calculatedOffsets.stairsPort.x;
		this.#calculatedOffsetStairsPortY           = calculatedOffsets.stairsPort.y;
		this.#calculatedOffsetStairsPortZ           = calculatedOffsets.stairsPort.z;
		this.#calculatedOffsetStairsX               = calculatedOffsets.stairs.x;
		this.#calculatedOffsetStairsY               = calculatedOffsets.stairs.y;
		this.#calculatedOffsetStairsZ               = calculatedOffsets.stairs.z;
		this.#calculatedOffsetStairsEntranceX       = calculatedOffsets.stairsEntrance.x;
		this.#calculatedOffsetStairsEntranceY       = calculatedOffsets.stairsEntrance.y;
		this.#calculatedOffsetStairsEntranceZ       = calculatedOffsets.stairsEntrance.z;
		this.#calculatedOffsetStairwayLeftX         = calculatedOffsets.stairwayLeft.x;
		this.#calculatedOffsetStairwayLeftY         = calculatedOffsets.stairwayLeft.y;
		this.#calculatedOffsetStairwayLeftZ         = calculatedOffsets.stairwayLeft.z;
		this.#calculatedOffsetStairwayRightX        = calculatedOffsets.stairwayRight.x;
		this.#calculatedOffsetStairwayRightY        = calculatedOffsets.stairwayRight.y;
		this.#calculatedOffsetStairwayRightZ        = calculatedOffsets.stairwayRight.z;
	}
}
