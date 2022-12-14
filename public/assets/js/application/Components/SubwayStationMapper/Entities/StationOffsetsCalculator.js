'use strict';

import Abstract from '../../../../library/Types/Abstract.js';
import PropertyNames from '../Enumerations/PropertyNames.js';
import Directions from './Directions.js';
import Offset from './Offset.js';
import Position from './Position.js';

class StationOffsetsCalculator extends Abstract
{
	static get #_OFFSET_PRESETS()
	{
		return {
			headHall1:      new Offset( -9, 11, 0 ),
			headHall2:      new Offset( 0, 0, -14 ),
			concourseHall1: new Offset( -14, 15, -15 ),
			concourseHall2: new Offset( 5, 0, -70 ),
			arrivalBell:    new Offset( 1, 6, -33 ),
			departureBell:  new Offset( -10, 6, -52 ),
			head1:          new Offset( -1, 2, 0 ),
			head2:          new Offset( 3, 2, -15 ),
			concourse:      new Offset( 2, 2, -18 ),
			stairsPort:     new Offset( -3, -2, 2 ),
			stairs:         new Offset( -1, 7, 1 ),
			stairsEntrance: new Offset( -3, 21, -17 ),
			stairwayLeft:   new Offset( 11, -2, 4 ),
			stairwayRight:  new Offset( -5, -2, 4 )
		};
	}

	calculate( stationPositions )
	{
		const calculatedValues = {
			headHall1:      undefined,
			headHall2:      undefined,
			concourseHall1: undefined,
			concourseHall2: undefined,
			arrivalBell:    undefined,
			departureBell:  undefined,
			rotation:       undefined,
			head1:          undefined,
			head2:          undefined,
			concourse:      undefined,
			stairsPort:     undefined,
			stairs:         undefined,
			stairsEntrance: undefined,
			stairwayLeft:   undefined,
			stairwayRight:  undefined
		};

		switch ( stationPositions[ PropertyNames.DIRECTION ] )
		{
			case Directions.NORTH:
			{
				calculatedValues.headHall1      = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall1.x,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall1.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall1.z
				);
				calculatedValues.headHall2      = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall2.x,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall2.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall2.z
				);
				calculatedValues.concourseHall1 = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall1.x,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall1.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall1.z
				);
				calculatedValues.concourseHall2 = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall2.x,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall2.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall2.z
				);
				calculatedValues.arrivalBell    = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.arrivalBell.x,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.arrivalBell.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.arrivalBell.z
				);
				calculatedValues.departureBell  = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.departureBell.x,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.departureBell.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.departureBell.z
				);
				calculatedValues.rotation       = 180;
				calculatedValues.head1          = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.head1.x, StationOffsetsCalculator.#_OFFSET_PRESETS.head1.y, StationOffsetsCalculator.#_OFFSET_PRESETS.head1.z );
				calculatedValues.head2          = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.head2.x, StationOffsetsCalculator.#_OFFSET_PRESETS.head2.y, StationOffsetsCalculator.#_OFFSET_PRESETS.head2.z );
				calculatedValues.concourse      = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.concourse.x, StationOffsetsCalculator.#_OFFSET_PRESETS.concourse.y, StationOffsetsCalculator.#_OFFSET_PRESETS.concourse.z );
				calculatedValues.stairsPort     = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairsPort.x, StationOffsetsCalculator.#_OFFSET_PRESETS.stairsPort.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairsPort.z );
				calculatedValues.stairs         = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairs.x, StationOffsetsCalculator.#_OFFSET_PRESETS.stairs.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairs.z );
				calculatedValues.stairsEntrance = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairsEntrance.x, StationOffsetsCalculator.#_OFFSET_PRESETS.stairsEntrance.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairsEntrance.z );
				calculatedValues.stairwayLeft   = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayLeft.x, StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayLeft.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayLeft.z );
				calculatedValues.stairwayRight  = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayRight.x, StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayRight.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayRight.z );

				break;
			}
			case Directions.EAST:
			{
				calculatedValues.headHall1      = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall1.z * -1,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall1.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall1.x
				);
				calculatedValues.headHall2      = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall2.z * -1,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall2.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall2.x
				);
				calculatedValues.concourseHall1 = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall1.z * -1,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall1.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall1.x
				);
				calculatedValues.concourseHall2 = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall2.z * -1,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall2.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall2.x
				);
				calculatedValues.arrivalBell    = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.arrivalBell.z * -1,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.arrivalBell.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.arrivalBell.x
				);
				calculatedValues.departureBell  = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.departureBell.z * -1,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.departureBell.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.departureBell.x
				);
				calculatedValues.rotation       = 270;
				calculatedValues.head1          = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.head1.z * -1, StationOffsetsCalculator.#_OFFSET_PRESETS.head1.y, StationOffsetsCalculator.#_OFFSET_PRESETS.head1.x );
				calculatedValues.head2          = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.head2.z * -1, StationOffsetsCalculator.#_OFFSET_PRESETS.head2.y, StationOffsetsCalculator.#_OFFSET_PRESETS.head2.x );
				calculatedValues.concourse      = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.concourse.z * -1, StationOffsetsCalculator.#_OFFSET_PRESETS.concourse.y, StationOffsetsCalculator.#_OFFSET_PRESETS.concourse.x );
				calculatedValues.stairsPort     = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairsPort.z * -1, StationOffsetsCalculator.#_OFFSET_PRESETS.stairsPort.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairsPort.x );
				calculatedValues.stairs         = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairs.z * -1, StationOffsetsCalculator.#_OFFSET_PRESETS.stairs.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairs.x );
				calculatedValues.stairsEntrance = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairsEntrance.z * -1, StationOffsetsCalculator.#_OFFSET_PRESETS.stairsEntrance.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairsEntrance.x );
				calculatedValues.stairwayLeft   = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayLeft.z * -1, StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayLeft.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayLeft.x );
				calculatedValues.stairwayRight  = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayRight.z * -1, StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayRight.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayRight.x );

				break;
			}
			case Directions.SOUTH:
			{
				calculatedValues.headHall1      = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall1.x * -1,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall1.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall1.z * -1
				);
				calculatedValues.headHall2      = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall2.x * -1,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall2.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall2.z * -1
				);
				calculatedValues.concourseHall1 = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall1.x * -1,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall1.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall1.z * -1
				);
				calculatedValues.concourseHall2 = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall2.x * -1,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall2.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall2.z * -1
				);
				calculatedValues.arrivalBell    = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.arrivalBell.x * -1,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.arrivalBell.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.arrivalBell.z * -1
				);
				calculatedValues.departureBell  = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.departureBell.x * -1,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.departureBell.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.departureBell.z * -1
				);
				calculatedValues.rotation       = 0;
				calculatedValues.head1          = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.head1.x * -1, StationOffsetsCalculator.#_OFFSET_PRESETS.head1.y, StationOffsetsCalculator.#_OFFSET_PRESETS.head1.z * -1 );
				calculatedValues.head2          = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.head2.x * -1, StationOffsetsCalculator.#_OFFSET_PRESETS.head2.y, StationOffsetsCalculator.#_OFFSET_PRESETS.head2.z * -1 );
				calculatedValues.concourse      = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.concourse.x * -1, StationOffsetsCalculator.#_OFFSET_PRESETS.concourse.y, StationOffsetsCalculator.#_OFFSET_PRESETS.concourse.z * -1 );
				calculatedValues.stairsPort     = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairsPort.x * -1, StationOffsetsCalculator.#_OFFSET_PRESETS.stairsPort.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairsPort.z * -1 );
				calculatedValues.stairs         = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairs.x * -1, StationOffsetsCalculator.#_OFFSET_PRESETS.stairs.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairs.z * -1 );
				calculatedValues.stairsEntrance = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairsEntrance.x * -1, StationOffsetsCalculator.#_OFFSET_PRESETS.stairsEntrance.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairsEntrance.z * -1 );
				calculatedValues.stairwayLeft   = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayLeft.x * -1, StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayLeft.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayLeft.z * -1 );
				calculatedValues.stairwayRight  = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayRight.x * -1, StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayRight.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayRight.z * -1 );

				break;
			}
			case Directions.WEST:
			{
				calculatedValues.headHall1      = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall1.z,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall1.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall1.x * -1
				);
				calculatedValues.headHall2      = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall2.z,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall2.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.headHall2.x * -1
				);
				calculatedValues.concourseHall1 = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall1.z,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall1.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall1.x * -1
				);
				calculatedValues.concourseHall2 = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall2.z,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall2.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.concourseHall2.x * -1
				);
				calculatedValues.arrivalBell    = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.arrivalBell.z,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.arrivalBell.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.arrivalBell.x * -1
				);
				calculatedValues.departureBell  = new Position(
					stationPositions[ PropertyNames.CURRENT_POSITION_X ] + StationOffsetsCalculator.#_OFFSET_PRESETS.departureBell.z,
					stationPositions[ PropertyNames.CURRENT_POSITION_Y ] + StationOffsetsCalculator.#_OFFSET_PRESETS.departureBell.y,
					stationPositions[ PropertyNames.CURRENT_POSITION_Z ] + StationOffsetsCalculator.#_OFFSET_PRESETS.departureBell.x * -1
				);
				calculatedValues.rotation       = 90;
				calculatedValues.head1          = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.head1.z, StationOffsetsCalculator.#_OFFSET_PRESETS.head1.y, StationOffsetsCalculator.#_OFFSET_PRESETS.head1.x * -1 );
				calculatedValues.head2          = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.head2.z, StationOffsetsCalculator.#_OFFSET_PRESETS.head2.y, StationOffsetsCalculator.#_OFFSET_PRESETS.head2.x * -1 );
				calculatedValues.concourse      = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.concourse.z, StationOffsetsCalculator.#_OFFSET_PRESETS.concourse.y, StationOffsetsCalculator.#_OFFSET_PRESETS.concourse.x * -1 );
				calculatedValues.stairsPort     = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairsPort.z, StationOffsetsCalculator.#_OFFSET_PRESETS.stairsPort.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairsPort.x * -1 );
				calculatedValues.stairs         = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairs.z, StationOffsetsCalculator.#_OFFSET_PRESETS.stairs.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairs.x * -1 );
				calculatedValues.stairsEntrance = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairsEntrance.z, StationOffsetsCalculator.#_OFFSET_PRESETS.stairsEntrance.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairsEntrance.x * -1 );
				calculatedValues.stairwayLeft   = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayLeft.z, StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayLeft.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayLeft.x * -1 );
				calculatedValues.stairwayRight  = new Offset( StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayRight.z, StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayRight.y, StationOffsetsCalculator.#_OFFSET_PRESETS.stairwayRight.x * -1 );

				break;
			}
		}

		return calculatedValues;
	}
}

export default StationOffsetsCalculator;
