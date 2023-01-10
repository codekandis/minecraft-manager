'use strict';

import { Abstract } from '../../../../library/Types/Abstract.js';
import { PositionOffset } from '../../../Entities/PositionOffset.js';

/**
 * Represents the offset presets of the station positions.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class StationPositionsOffsetPresets extends Abstract
{
	/**
	 * Stores the position offset station head mining 1.
	 * @type {PositionOffset}
	 */
	#_stationHeadMining1 = new PositionOffset( -9, 11, 0 );

	/**
	 * Stores the position offset station head mining 2.
	 * @type {PositionOffset}
	 */
	#_stationHeadMining2 = new PositionOffset( 0, 0, -14 );

	/**
	 * Stores the position offset concourse mining 1.
	 * @type {PositionOffset}
	 */
	#_concourseMining1 = new PositionOffset( -14, 15, -15 );

	/**
	 * Stores the position offset concourse mining 2.
	 * @type {PositionOffset}
	 */
	#_concourseMining2 = new PositionOffset( 5, 0, -70 );

	/**
	 * Stores the position offset arrival bell.
	 * @type {PositionOffset}
	 */
	#_arrivalBell = new PositionOffset( 1, 6, -33 );

	/**
	 * Stores the position offset departure bell.
	 * @type {PositionOffset}
	 */
	#_departureBell = new PositionOffset( -10, 6, -52 );

	/**
	 * Stores the position offset station head 1.
	 * @type {PositionOffset}
	 */
	#_stationHead1 = new PositionOffset( -1, 2, 0 );

	/**
	 * Stores the position offset station head 2.
	 * @type {PositionOffset}
	 */
	#_stationHead2 = new PositionOffset( 3, 2, -15 );

	/**
	 * Stores the position offset concourse.
	 * @type {PositionOffset}
	 */
	#_concourse = new PositionOffset( 2, 2, -18 );

	/**
	 * Stores the position offset stairs port.
	 * @type {PositionOffset}
	 */
	#_stairsPort = new PositionOffset( -3, -2, 2 );

	/**
	 * Stores the position offset stairs.
	 * @type {PositionOffset}
	 */
	#_stairs = new PositionOffset( -1, 7, 1 );

	/**
	 * Stores the position offset stairs entrance.
	 * @type {PositionOffset}
	 */
	#_stairsEntrance = new PositionOffset( -3, 21, -17 );

	/**
	 * Stores the position offset stairway left.
	 * @type {PositionOffset}
	 */
	#_stairwayLeft = new PositionOffset( 11, -2, 4 );

	/**
	 * Stores the position offset stairway right.
	 * @type {PositionOffset}
	 */
	#_stairwayRight = new PositionOffset( -5, -2, 4 )

	/**
	 * Gets the position offset station head mining 1.
	 * @returns {PositionOffset} The position offset station head mining 1.
	 */
	get stationHeadMining1()
	{
		return this.#_stationHeadMining1;
	}

	/**
	 * Gets the position offset station head mining 2.
	 * @returns {PositionOffset} The position offset station head mining 2.
	 */
	get stationHeadMining2()
	{
		return this.#_stationHeadMining2;
	}

	/**
	 * Gets the position offset concourse mining 1.
	 * @returns {PositionOffset} The position offset concourse mining 1.
	 */
	get concourseMining1()
	{
		return this.#_concourseMining1;
	}

	/**
	 * Gets the position offset concourse mining 1.
	 * @returns {PositionOffset} The position offset concourse mining 2.
	 */
	get concourseMining2()
	{
		return this.#_concourseMining2;
	}

	/**
	 * Gets the position offset arrival bell.
	 * @returns {PositionOffset} The position offset arrival bell.
	 */
	get arrivalBell()
	{
		return this.#_arrivalBell;
	}

	/**
	 * Gets the position offset departure bel.
	 * @returns {PositionOffset} The position offset departure bell.
	 */
	get departureBell()
	{
		return this.#_departureBell;
	}

	/**
	 * Gets the position offset station head 1.
	 * @returns {PositionOffset} The position offset station head 1.
	 */
	get stationHead1()
	{
		return this.#_stationHead1;
	}

	/**
	 * Gets the position offset station head 2.
	 * @returns {PositionOffset} The position offset station head 2.
	 */
	get stationHead2()
	{
		return this.#_stationHead2;
	}

	/**
	 * Gets the position offset concourse.
	 * @returns {PositionOffset} The position offset concourse.
	 */
	get concourse()
	{
		return this.#_concourse;
	}

	/**
	 * Gets the position offset stairs port.
	 * @returns {PositionOffset} The position offset stairs port.
	 */
	get stairsPort()
	{
		return this.#_stairsPort;
	}

	/**
	 * Gets the position offset stairs.
	 * @returns {PositionOffset} The position offset stairs.
	 */
	get stairs()
	{
		return this.#_stairs;
	}

	/**
	 * Gets the position offset stairs entrance.
	 * @returns {PositionOffset} The position offset stairs entrance.
	 */
	get stairsEntrance()
	{
		return this.#_stairsEntrance;
	}

	/**
	 * Gets the position offset stairway left.
	 * @returns {PositionOffset} The position offset stairway left.
	 */
	get stairwayLeft()
	{
		return this.#_stairwayLeft;
	}

	/**
	 * Gets the position offset stairway right.
	 * @returns {PositionOffset} The position offset stairway right.
	 */
	get stairwayRight()
	{
		return this.#_stairwayRight;
	}
}
