'use strict';

import { Abstract } from '../../../../library/Types/Abstract.js';
import { Position } from '../../../Entities/Position.js';

/**
 * Represents the calculated station positions.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class CalculatedStationPositions extends Abstract
{
	/**
	 * Stores the calculated position station head mining 1.
	 * @type {Position}
	 */
	#_stationHeadMining1;

	/**
	 * Stores the calculated position station head mining 2.
	 * @type {Position}
	 */
	#_stationHeadMining2;

	/**
	 * Stores the calculated position concourse mining 1.
	 * @type {Position}
	 */
	#_concourseMining1;

	/**
	 * Stores the calculated position concourse mining 2.
	 * @type {Position}
	 */
	#_concourseMining2;

	/**
	 * Stores the calculated position arrival bell.
	 * @type {Position}
	 */
	#_arrivalBell;

	/**
	 * Stores the calculated position departure bell.
	 * @type {Position}
	 */
	#_departureBell;

	/**
	 * Stores the rotation.
	 * @type {Number}
	 */
	#_rotation;

	/**
	 * Stores the calculated position offset station head 1.
	 * @type {PositionOffset}
	 */
	#_stationHead1;

	/**
	 * Stores the calculated position offset station head 2.
	 * @type {PositionOffset}
	 */
	#_stationHead2;

	/**
	 * Stores the calculated position offset concourse.
	 * @type {PositionOffset}
	 */
	#_concourse;

	/**
	 * Stores the calculated position offset stairs port.
	 * @type {PositionOffset}
	 */
	#_stairsPort;

	/**
	 * Stores the calculated position offset stairs.
	 * @type {PositionOffset}
	 */
	#_stairs;

	/**
	 * Stores the calculated position offset stairs entrance.
	 * @type {PositionOffset}
	 */
	#_stairsEntrance;

	/**
	 * Stores the calculated position offset stairway left.
	 * @type {PositionOffset}
	 */
	#_stairwayLeft;

	/**
	 * Stores the calculated position offset stairway right.
	 * @type {PositionOffset}
	 */
	#_stairwayRight;

	/**
	 * Gets the calculated position station head mining 1.
	 * @returns {Position} The calculated position station head mining 1.
	 */
	get stationHeadMining1()
	{
		return this.#_stationHeadMining1;
	}

	/**
	 * Sets the calculated position station head mining 1.
	 * @param {Position} value The calculated position station head mining 1.
	 */
	set stationHeadMining1( value )
	{
		this.#_stationHeadMining1 = value;
	}

	/**
	 * Gets the calculated position station head mining 2.
	 * @returns {Position} The calculated position station head mining 2.
	 */
	get stationHeadMining2()
	{
		return this.#_stationHeadMining2;
	}

	/**
	 * Sets the calculated position station head mining 2.
	 * @param {Position} value The calculated position station head mining 2.
	 */
	set stationHeadMining2( value )
	{
		this.#_stationHeadMining2 = value;
	}

	/**
	 * Gets the calculated position concourse mining 1.
	 * @returns {Position} The calculated position concourse mining 1.
	 */
	get concourseMining1()
	{
		return this.#_concourseMining1;
	}

	/**
	 * Sets the calculated position concourse mining 1.
	 * @param {Position} value The calculated position concourse mining 1.
	 */
	set concourseMining1( value )
	{
		this.#_concourseMining1 = value;
	}

	/**
	 * Gets the calculated position concourse mining 1.
	 * @returns {Position} The calculated position concourse mining 2.
	 */
	get concourseMining2()
	{
		return this.#_concourseMining2;
	}

	/**
	 * Sets the calculated position concourse mining 1.
	 * @param {Position} value The calculated position concourse mining 2.
	 */
	set concourseMining2( value )
	{
		this.#_concourseMining2 = value;
	}

	/**
	 * Gets the calculated position arrival bell.
	 * @returns {Position} The calculated position arrival bell.
	 */
	get arrivalBell()
	{
		return this.#_arrivalBell;
	}

	/**
	 * Sets the calculated position arrival bell.
	 * @param {Position} value The calculated position arrival bell.
	 */
	set arrivalBell( value )
	{
		this.#_arrivalBell = value;
	}

	/**
	 * Gets the calculated position departure bell.
	 * @returns {Position} The calculated position departure bell.
	 */
	get departureBell()
	{
		return this.#_departureBell;
	}

	/**
	 * Sets the calculated position departure bell.
	 * @param {Position} value The calculated position departure bell.
	 */
	set departureBell( value )
	{
		this.#_departureBell = value;
	}

	/**
	 * Gets the calculated rotation.
	 * @returns {Number} The calculated rotation.
	 */
	get rotation()
	{
		return this.#_rotation;
	}

	/**
	 * Sets the calculated rotation.
	 * @param {Number} value The calculated rotation.
	 */
	set rotation( value )
	{
		this.#_rotation = value;
	}

	/**
	 * Gets the calculated position offset station head 1.
	 * @returns {PositionOffset} The calculated position offset station head 1.
	 */
	get stationHead1()
	{
		return this.#_stationHead1;
	}

	/**
	 * Sets the calculated position offset station head 1.
	 * @param {PositionOffset} value The calculated position offset station head 1.
	 */
	set stationHead1( value )
	{
		this.#_stationHead1 = value;
	}

	/**
	 * Gets the calculated position offset station head 2.
	 * @returns {PositionOffset} The calculated position offset station head 2.
	 */
	get stationHead2()
	{
		return this.#_stationHead2;
	}

	/**
	 * Sets the calculated position offset station head 2.
	 * @param {PositionOffset} value The calculated position offset station head 2.
	 */
	set stationHead2( value )
	{
		this.#_stationHead2 = value;
	}

	/**
	 * Gets the calculated position offset concourse.
	 * @returns {PositionOffset} The calculated position offset concourse.
	 */
	get concourse()
	{
		return this.#_concourse;
	}

	/**
	 * Sets the calculated position offset concourse.
	 * @param {PositionOffset} value The calculated position offset concourse.
	 */
	set concourse( value )
	{
		this.#_concourse = value;
	}

	/**
	 * Gets the calculated position offset stairs port.
	 * @returns {PositionOffset} The calculated position offset stairs port.
	 */
	get stairsPort()
	{
		return this.#_stairsPort;
	}

	/**
	 * Sets the calculated position offset stairs port.
	 * @param {PositionOffset} value The calculated position offset stairs port.
	 */
	set stairsPort( value )
	{
		this.#_stairsPort = value;
	}

	/**
	 * Gets the calculated position offset stairs.
	 * @returns {PositionOffset} The calculated position offset stairs.
	 */
	get stairs()
	{
		return this.#_stairs;
	}

	/**
	 * Sets the calculated position offset stairs.
	 * @param {PositionOffset} value The calculated position offset stairs.
	 */
	set stairs( value )
	{
		this.#_stairs = value;
	}

	/**
	 * Gets the calculated position offset stairs entrance.
	 * @returns {PositionOffset} The calculated position offset stairs entrance.
	 */
	get stairsEntrance()
	{
		return this.#_stairsEntrance;
	}

	/**
	 * Sets the calculated position offset stairs entrance.
	 * @param {PositionOffset} value The calculated position offset stairs entrance.
	 */
	set stairsEntrance( value )
	{
		this.#_stairsEntrance = value;
	}

	/**
	 * Gets the calculated position offset stairway left.
	 * @returns {PositionOffset} The calculated position offset stairway left.
	 */
	get stairwayLeft()
	{
		return this.#_stairwayLeft;
	}

	/**
	 * Sets the calculated position offset stairway left.
	 * @param {PositionOffset} value The calculated position offset stairway left.
	 */
	set stairwayLeft( value )
	{
		this.#_stairwayLeft = value;
	}

	/**
	 * Gets the calculated position offset stairway right.
	 * @returns {PositionOffset} The calculated position offset stairway right.
	 */
	get stairwayRight()
	{
		return this.#_stairwayRight;
	}

	/**
	 * Sets the calculated position offset stairway right.
	 * @param {PositionOffset} value The calculated position offset stairway right.
	 */
	set stairwayRight( value )
	{
		this.#_stairwayRight = value;
	}
}
