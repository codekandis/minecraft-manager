'use strict';

import { Abstract } from '../../../../libraries/jotunheim/Types/Abstract.js';

/**
 * Represents the calculated lantern positions.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class CalculatedLanternPositions extends Abstract
{
	/**
	 * Stores true if the position current X is valid, otherwise `false`.
	 * @type {Boolean}
	 */
	#_isCurrentXValid = false;

	/**
	 * Stores true if the position current Y is valid, otherwise `false`.
	 * @type {Boolean}
	 */
	#_isCurrentYValid = false;

	/**
	 * Stores true if the position current Z is valid, otherwise `false`.
	 * @type {Boolean}
	 */
	#_isCurrentZValid = false;

	/**
	 * Stores the calculated position X negative.
	 * @type {Number}
	 */
	#_calculatedPositionXNegative = 0;

	/**
	 * Stores the calculated position X positive.
	 * @type {Number}
	 */
	#_calculatedPositionXPositive = 0;

	/**
	 * Stores the calculated position Y negative.
	 * @type {Number}
	 */
	#_calculatedPositionYNegative = 0;

	/**
	 * Stores the calculated position Y positive.
	 * @type {Number}
	 */
	#_calculatedPositionYPositive = 0;

	/**
	 * Stores the calculated position Z negative.
	 * @type {Number}
	 */
	#_calculatedPositionZNegative = 0;

	/**
	 * Stores the calculated position Z positive.
	 * @type {Number}
	 */
	#_calculatedPositionZPositive = 0;

	/**
	 * Gets if the position current X is valid.
	 * @returns {Boolean} `true` if the position current X is valid, otherwise `false`.
	 */
	get isCurrentXValid()
	{
		return this.#_isCurrentXValid;
	}

	/**
	 * Sets if the position current X is valid.
	 * @param {Boolean} value `true` if the position current X is valid, otherwise `false`.
	 */
	set isCurrentXValid( value )
	{
		this.#_isCurrentXValid = value;
	}

	/**
	 * Gets if the position current Y is valid.
	 * @returns {Boolean} `true` if the position current Y is valid, otherwise `false`.
	 */
	get isCurrentYValid()
	{
		return this.#_isCurrentYValid;
	}

	/**
	 * Sets if the position current Y is valid.
	 * @param {Boolean} value `true` if the position current Y is valid, otherwise `false`.
	 */
	set isCurrentYValid( value )
	{
		this.#_isCurrentYValid = value;
	}

	/**
	 * Gets if the position current Z is valid.
	 * @returns {Boolean} `true` if the position current Z is valid, otherwise `false`.
	 */
	get isCurrentZValid()
	{
		return this.#_isCurrentZValid;
	}

	/**
	 * Sets if the position current Z is valid.
	 * @param {Boolean} value `true` if the position current Z is valid, otherwise `false`.
	 */
	set isCurrentZValid( value )
	{
		this.#_isCurrentZValid = value;
	}

	/**
	 * Gets the calculated position X negative.
	 * @returns {Number} The calculated position X negative.
	 */
	get calculatedPositionXNegative()
	{
		return this.#_calculatedPositionXNegative;
	}

	/**
	 * Sets the calculated position X negative.
	 * @param {Number} value The calculated position X negative.
	 */
	set calculatedPositionXNegative( value )
	{
		this.#_calculatedPositionXNegative = value;
	}

	/**
	 * Gets the calculated position X positive.
	 * @returns {Number} The calculated position X positive.
	 */
	get calculatedPositionXPositive()
	{
		return this.#_calculatedPositionXPositive;
	}

	/**
	 * Sets the calculated position X positive.
	 * @param {Number} value The calculated position X positive.
	 */
	set calculatedPositionXPositive( value )
	{
		this.#_calculatedPositionXPositive = value;
	}

	/**
	 * Gets the calculated position Y negative.
	 * @returns {Number} The calculated position Y negative.
	 */
	get calculatedPositionYNegative()
	{
		return this.#_calculatedPositionYNegative;
	}

	/**
	 * Sets the calculated position Y negative.
	 * @param {Number} value The calculated position Y negative.
	 */
	set calculatedPositionYNegative( value )
	{
		this.#_calculatedPositionYNegative = value;
	}

	/**
	 * Gets the calculated position Y positive.
	 * @returns {Number} The calculated position y positive.
	 */
	get calculatedPositionYPositive()
	{
		return this.#_calculatedPositionYPositive;
	}

	/**
	 * Sets the calculated position Y positive.
	 * @param {Number} value The calculated position Y positive.
	 */
	set calculatedPositionYPositive( value )
	{
		this.#_calculatedPositionYPositive = value;
	}

	/**
	 * Gets the calculated position Z negative.
	 * @returns {Number} The calculated position Z negative.
	 */
	get calculatedPositionZNegative()
	{
		return this.#_calculatedPositionZNegative;
	}

	/**
	 * Sets the calculated position Z negative.
	 * @param {Number} value The calculated position Z negative.
	 */
	set calculatedPositionZNegative( value )
	{
		this.#_calculatedPositionZNegative = value;
	}

	/**
	 * Gets the calculated position Z positive.
	 * @returns {Number} The calculated position Z positive.
	 */
	get calculatedPositionZPositive()
	{
		return this.#_calculatedPositionZPositive;
	}

	/**
	 * Sets the calculated position Z positive.
	 * @param {Number} value The calculated position Z positive.
	 */
	set calculatedPositionZPositive( value )
	{
		this.#_calculatedPositionZPositive = value;
	}
}
