'use strict';

import { Abstract } from '../../../../libraries/jotunheim/Types/Abstract.js';
import { Orientation } from '../../../Entities/Orientation.js';
import { Position } from '../../../Entities/Position.js';
import { PositionOffset } from '../../../Entities/PositionOffset.js';
import { StationPositionsPropertyNames } from '../Enumerations/StationPositionsPropertyNames.js';
import { CalculatedStationPositions } from './CalculatedStationPositions.js';
import { StationPositionsOffsetPresets } from './StationPositionsOffsetPresets.js';

/**
 * Represents a station positions calculator.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class StationOffsetsCalculator extends Abstract
{
	/**
	 * Calculates the station positions based on the northern orientation.
	 * @param {StationPositions} stationPositions The current station positions.
	 * @param {StationPositionsOffsetPresets} stationPositionsOffsetPresets The station positions offset presets.
	 * @returns {CalculatedStationPositions} The calculated station positions.
	 */
	#calculateNorthernOrientation( stationPositions, stationPositionsOffsetPresets )
	{
		const calculatedStationPositions = new CalculatedStationPositions();

		calculatedStationPositions.stationHeadMining1 = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.stationHeadMining1.x,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.stationHeadMining1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.stationHeadMining1.z
		);
		calculatedStationPositions.stationHeadMining2 = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.stationHeadMining2.x,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.stationHeadMining2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.stationHeadMining2.z
		);
		calculatedStationPositions.concourseMining1   = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMining1.x,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMining1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMining1.z
		);
		calculatedStationPositions.concourseMining2   = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMining2.x,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMining2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMining2.z
		);
		calculatedStationPositions.concourseMiningR1  = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningR1.x,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningR1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningR1.z
		);
		calculatedStationPositions.concourseMiningR2  = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningR2.x,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningR2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningR2.z
		);
		calculatedStationPositions.concourseMiningL1  = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningL1.x,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningL1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningL1.z
		);
		calculatedStationPositions.concourseMiningL2  = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningL2.x,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningL2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningL2.z
		);
		calculatedStationPositions.concourseMiningRL1 = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningRL1.x,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningRL1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningRL1.z
		);
		calculatedStationPositions.concourseMiningRL2 = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningRL2.x,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningRL2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningRL2.z
		);
		calculatedStationPositions.arrivalBell        = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.arrivalBell.x,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.arrivalBell.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.arrivalBell.z
		);
		calculatedStationPositions.departureBell      = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.departureBell.x,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.departureBell.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.departureBell.z
		);
		calculatedStationPositions.rotation           = 180;
		calculatedStationPositions.stationHead1       = new PositionOffset( stationPositionsOffsetPresets.stationHead1.x, stationPositionsOffsetPresets.stationHead1.y, stationPositionsOffsetPresets.stationHead1.z );
		calculatedStationPositions.stationHead2       = new PositionOffset( stationPositionsOffsetPresets.stationHead2.x, stationPositionsOffsetPresets.stationHead2.y, stationPositionsOffsetPresets.stationHead2.z );
		calculatedStationPositions.concourse          = new PositionOffset( stationPositionsOffsetPresets.concourse.x, stationPositionsOffsetPresets.concourse.y, stationPositionsOffsetPresets.concourse.z );
		calculatedStationPositions.stairsPort         = new PositionOffset( stationPositionsOffsetPresets.stairsPort.x, stationPositionsOffsetPresets.stairsPort.y, stationPositionsOffsetPresets.stairsPort.z );
		calculatedStationPositions.stairs             = new PositionOffset( stationPositionsOffsetPresets.stairs.x, stationPositionsOffsetPresets.stairs.y, stationPositionsOffsetPresets.stairs.z );
		calculatedStationPositions.stairsEntrance     = new PositionOffset( stationPositionsOffsetPresets.stairsEntrance.x, stationPositionsOffsetPresets.stairsEntrance.y, stationPositionsOffsetPresets.stairsEntrance.z );
		calculatedStationPositions.stairwayLeft       = new PositionOffset( stationPositionsOffsetPresets.stairwayLeft.x, stationPositionsOffsetPresets.stairwayLeft.y, stationPositionsOffsetPresets.stairwayLeft.z );
		calculatedStationPositions.stairwayRight      = new PositionOffset( stationPositionsOffsetPresets.stairwayRight.x, stationPositionsOffsetPresets.stairwayRight.y, stationPositionsOffsetPresets.stairwayRight.z );

		return calculatedStationPositions;
	}

	/**
	 * Calculates the station positions based on the eastern orientation.
	 * @param {StationPositions} stationPositions The current station positions.
	 * @param {StationPositionsOffsetPresets} stationPositionsOffsetPresets The station positions offset presets.
	 * @returns {CalculatedStationPositions} The calculated station positions.
	 */
	#calculateEasternOrientation( stationPositions, stationPositionsOffsetPresets )
	{
		const calculatedStationPositions = new CalculatedStationPositions();

		calculatedStationPositions.stationHeadMining1 = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.stationHeadMining1.z * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.stationHeadMining1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.stationHeadMining1.x
		);
		calculatedStationPositions.stationHeadMining2 = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.stationHeadMining2.z * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.stationHeadMining2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.stationHeadMining2.x
		);
		calculatedStationPositions.concourseMining1   = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMining1.z * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMining1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMining1.x
		);
		calculatedStationPositions.concourseMining2   = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMining2.z * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMining2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMining2.x
		);
		calculatedStationPositions.concourseMiningR1  = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningR1.z * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningR1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningR1.x
		);
		calculatedStationPositions.concourseMiningR2  = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningR2.z * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningR2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningR2.x
		);
		calculatedStationPositions.concourseMiningL1  = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningL1.z * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningL1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningL1.x
		);
		calculatedStationPositions.concourseMiningL2  = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningL2.z * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningL2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningL2.x
		);
		calculatedStationPositions.concourseMiningRL1 = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningRL1.z * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningRL1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningRL1.x
		);
		calculatedStationPositions.concourseMiningRL2 = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningRL2.z * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningRL2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningRL2.x
		);
		calculatedStationPositions.arrivalBell        = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.arrivalBell.z * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.arrivalBell.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.arrivalBell.x
		);
		calculatedStationPositions.departureBell      = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.departureBell.z * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.departureBell.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.departureBell.x
		);
		calculatedStationPositions.rotation           = 270;
		calculatedStationPositions.stationHead1       = new PositionOffset( stationPositionsOffsetPresets.stationHead1.z * -1, stationPositionsOffsetPresets.stationHead1.y, stationPositionsOffsetPresets.stationHead1.x );
		calculatedStationPositions.stationHead2       = new PositionOffset( stationPositionsOffsetPresets.stationHead2.z * -1, stationPositionsOffsetPresets.stationHead2.y, stationPositionsOffsetPresets.stationHead2.x );
		calculatedStationPositions.concourse          = new PositionOffset( stationPositionsOffsetPresets.concourse.z * -1, stationPositionsOffsetPresets.concourse.y, stationPositionsOffsetPresets.concourse.x );
		calculatedStationPositions.stairsPort         = new PositionOffset( stationPositionsOffsetPresets.stairsPort.z * -1, stationPositionsOffsetPresets.stairsPort.y, stationPositionsOffsetPresets.stairsPort.x );
		calculatedStationPositions.stairs             = new PositionOffset( stationPositionsOffsetPresets.stairs.z * -1, stationPositionsOffsetPresets.stairs.y, stationPositionsOffsetPresets.stairs.x );
		calculatedStationPositions.stairsEntrance     = new PositionOffset( stationPositionsOffsetPresets.stairsEntrance.z * -1, stationPositionsOffsetPresets.stairsEntrance.y, stationPositionsOffsetPresets.stairsEntrance.x );
		calculatedStationPositions.stairwayLeft       = new PositionOffset( stationPositionsOffsetPresets.stairwayLeft.z * -1, stationPositionsOffsetPresets.stairwayLeft.y, stationPositionsOffsetPresets.stairwayLeft.x );
		calculatedStationPositions.stairwayRight      = new PositionOffset( stationPositionsOffsetPresets.stairwayRight.z * -1, stationPositionsOffsetPresets.stairwayRight.y, stationPositionsOffsetPresets.stairwayRight.x );

		return calculatedStationPositions;
	}

	/**
	 * Calculates the station positions based on the southern orientation.
	 * @param {StationPositions} stationPositions The current station positions.
	 * @param {StationPositionsOffsetPresets} stationPositionsOffsetPresets The station positions offset presets.
	 * @returns {CalculatedStationPositions} The calculated station positions.
	 */
	#calculateSouthernOrientation( stationPositions, stationPositionsOffsetPresets )
	{
		const calculatedStationPositions = new CalculatedStationPositions();

		calculatedStationPositions.stationHeadMining1 = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.stationHeadMining1.x * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.stationHeadMining1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.stationHeadMining1.z * -1
		);
		calculatedStationPositions.stationHeadMining2 = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.stationHeadMining2.x * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.stationHeadMining2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.stationHeadMining2.z * -1
		);
		calculatedStationPositions.concourseMining1   = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMining1.x * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMining1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMining1.z * -1
		);
		calculatedStationPositions.concourseMining2   = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMining2.x * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMining2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMining2.z * -1
		);
		calculatedStationPositions.concourseMiningR1  = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningR1.x * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningR1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningR1.z * -1
		);
		calculatedStationPositions.concourseMiningR2  = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningR2.x * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningR2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningR2.z * -1
		);
		calculatedStationPositions.concourseMiningL1  = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningL1.x * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningL1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningL1.z * -1
		);
		calculatedStationPositions.concourseMiningL2  = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningL2.x * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningL2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningL2.z * -1
		);
		calculatedStationPositions.concourseMiningRL1 = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningRL1.x * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningRL1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningRL1.z * -1
		);
		calculatedStationPositions.concourseMiningRL2 = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningRL2.x * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningRL2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningRL2.z * -1
		);
		calculatedStationPositions.arrivalBell        = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.arrivalBell.x * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.arrivalBell.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.arrivalBell.z * -1
		);
		calculatedStationPositions.departureBell      = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.departureBell.x * -1,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.departureBell.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.departureBell.z * -1
		);
		calculatedStationPositions.rotation           = 0;
		calculatedStationPositions.stationHead1       = new PositionOffset( stationPositionsOffsetPresets.stationHead1.x * -1, stationPositionsOffsetPresets.stationHead1.y, stationPositionsOffsetPresets.stationHead1.z * -1 );
		calculatedStationPositions.stationHead2       = new PositionOffset( stationPositionsOffsetPresets.stationHead2.x * -1, stationPositionsOffsetPresets.stationHead2.y, stationPositionsOffsetPresets.stationHead2.z * -1 );
		calculatedStationPositions.concourse          = new PositionOffset( stationPositionsOffsetPresets.concourse.x * -1, stationPositionsOffsetPresets.concourse.y, stationPositionsOffsetPresets.concourse.z * -1 );
		calculatedStationPositions.stairsPort         = new PositionOffset( stationPositionsOffsetPresets.stairsPort.x * -1, stationPositionsOffsetPresets.stairsPort.y, stationPositionsOffsetPresets.stairsPort.z * -1 );
		calculatedStationPositions.stairs             = new PositionOffset( stationPositionsOffsetPresets.stairs.x * -1, stationPositionsOffsetPresets.stairs.y, stationPositionsOffsetPresets.stairs.z * -1 );
		calculatedStationPositions.stairsEntrance     = new PositionOffset( stationPositionsOffsetPresets.stairsEntrance.x * -1, stationPositionsOffsetPresets.stairsEntrance.y, stationPositionsOffsetPresets.stairsEntrance.z * -1 );
		calculatedStationPositions.stairwayLeft       = new PositionOffset( stationPositionsOffsetPresets.stairwayLeft.x * -1, stationPositionsOffsetPresets.stairwayLeft.y, stationPositionsOffsetPresets.stairwayLeft.z * -1 );
		calculatedStationPositions.stairwayRight      = new PositionOffset( stationPositionsOffsetPresets.stairwayRight.x * -1, stationPositionsOffsetPresets.stairwayRight.y, stationPositionsOffsetPresets.stairwayRight.z * -1 );

		return calculatedStationPositions;
	}

	/**
	 * Calculates the station positions based on the western orientation.
	 * @param {StationPositions} stationPositions The current station positions.
	 * @param {StationPositionsOffsetPresets} stationPositionsOffsetPresets The station positions offset presets.
	 * @returns {CalculatedStationPositions} The calculated station positions.
	 */
	#calculateWesternOrientation( stationPositions, stationPositionsOffsetPresets )
	{
		const calculatedStationPositions = new CalculatedStationPositions();

		calculatedStationPositions.stationHeadMining1 = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.stationHeadMining1.z,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.stationHeadMining1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.stationHeadMining1.x * -1
		);
		calculatedStationPositions.stationHeadMining2 = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.stationHeadMining2.z,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.stationHeadMining2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.stationHeadMining2.x * -1
		);
		calculatedStationPositions.concourseMining1   = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMining1.z,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMining1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMining1.x * -1
		);
		calculatedStationPositions.concourseMining2   = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMining2.z,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMining2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMining2.x * -1
		);
		calculatedStationPositions.concourseMiningR1  = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningR1.z,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningR1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningR1.x * -1
		);
		calculatedStationPositions.concourseMiningR2  = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningR2.z,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningR2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningR2.x * -1
		);
		calculatedStationPositions.concourseMiningL1  = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningL1.z,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningL1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningL1.x * -1
		);
		calculatedStationPositions.concourseMiningL2  = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningL2.z,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningL2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningL2.x * -1
		);
		calculatedStationPositions.concourseMiningRL1 = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningRL1.z,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningRL1.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningRL1.x * -1
		);
		calculatedStationPositions.concourseMiningRL2 = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.concourseMiningRL2.z,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.concourseMiningRL2.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.concourseMiningRL2.x * -1
		);
		calculatedStationPositions.arrivalBell        = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.arrivalBell.z,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.arrivalBell.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.arrivalBell.x * -1
		);
		calculatedStationPositions.departureBell      = new Position(
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ] + stationPositionsOffsetPresets.departureBell.z,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ] + stationPositionsOffsetPresets.departureBell.y,
			stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ] + stationPositionsOffsetPresets.departureBell.x * -1
		);
		calculatedStationPositions.rotation           = 90;
		calculatedStationPositions.stationHead1       = new PositionOffset( stationPositionsOffsetPresets.stationHead1.z, stationPositionsOffsetPresets.stationHead1.y, stationPositionsOffsetPresets.stationHead1.x * -1 );
		calculatedStationPositions.stationHead2       = new PositionOffset( stationPositionsOffsetPresets.stationHead2.z, stationPositionsOffsetPresets.stationHead2.y, stationPositionsOffsetPresets.stationHead2.x * -1 );
		calculatedStationPositions.concourse          = new PositionOffset( stationPositionsOffsetPresets.concourse.z, stationPositionsOffsetPresets.concourse.y, stationPositionsOffsetPresets.concourse.x * -1 );
		calculatedStationPositions.stairsPort         = new PositionOffset( stationPositionsOffsetPresets.stairsPort.z, stationPositionsOffsetPresets.stairsPort.y, stationPositionsOffsetPresets.stairsPort.x * -1 );
		calculatedStationPositions.stairs             = new PositionOffset( stationPositionsOffsetPresets.stairs.z, stationPositionsOffsetPresets.stairs.y, stationPositionsOffsetPresets.stairs.x * -1 );
		calculatedStationPositions.stairsEntrance     = new PositionOffset( stationPositionsOffsetPresets.stairsEntrance.z, stationPositionsOffsetPresets.stairsEntrance.y, stationPositionsOffsetPresets.stairsEntrance.x * -1 );
		calculatedStationPositions.stairwayLeft       = new PositionOffset( stationPositionsOffsetPresets.stairwayLeft.z, stationPositionsOffsetPresets.stairwayLeft.y, stationPositionsOffsetPresets.stairwayLeft.x * -1 );
		calculatedStationPositions.stairwayRight      = new PositionOffset( stationPositionsOffsetPresets.stairwayRight.z, stationPositionsOffsetPresets.stairwayRight.y, stationPositionsOffsetPresets.stairwayRight.x * -1 );

		return calculatedStationPositions;
	}

	/**
	 * Calculates the station positions.
	 * @param {StationPositions} stationPositions The current station positions.
	 * @returns {CalculatedStationPositions} The calculated station positions.
	 */
	calculate( stationPositions )
	{
		const stationPositionsOffsetPresets = new StationPositionsOffsetPresets();

		switch ( stationPositions[ StationPositionsPropertyNames.ORIENTATION ] )
		{
			case Orientation.NORTH:
			{
				return this.#calculateNorthernOrientation( stationPositions, stationPositionsOffsetPresets );
			}
			case Orientation.EAST:
			{
				return this.#calculateEasternOrientation( stationPositions, stationPositionsOffsetPresets );
			}
			case Orientation.SOUTH:
			{
				return this.#calculateSouthernOrientation( stationPositions, stationPositionsOffsetPresets );
			}
			case Orientation.WEST:
			{
				return this.#calculateWesternOrientation( stationPositions, stationPositionsOffsetPresets );
			}
		}
	}
}
