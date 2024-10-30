'use strict';

import { Abstract } from '../../../../libraries/jotunheim/Types/Abstract.js';

/**
 * Represents the calculated lantern positions.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class CalculatedLanternPositions extends Abstract
{
	/**
	 * Stores true if the current position X is valid, otherwise `false`.
	 * @type {Boolean}
	 */
	#_isCurrentPositionXValid;

	/**
	 * Stores true if the current position Y is valid, otherwise `false`.
	 * @type {Boolean}
	 */
	#_isCurrentPositionYValid;

	/**
	 * Stores true if the current position Z is valid, otherwise `false`.
	 * @type {Boolean}
	 */
	#_isCurrentPositionZValid;

	/**
	 * Stores the calculated position X negative.
	 * @type {Number}
	 */
	#_calculatedPositionXNegative;

	/**
	 * Stores the calculated position X positive.
	 * @type {Number}
	 */
	#_calculatedPositionXPositive;

	/**
	 * Stores the calculated position Y negative.
	 * @type {Number}
	 */
	#_calculatedPositionYNegative;

	/**
	 * Stores the calculated position Y positive.
	 * @type {Number}
	 */
	#_calculatedPositionYPositive;

	/**
	 * Stores the calculated position Z negative.
	 * @type {Number}
	 */
	#_calculatedPositionZNegative;

	/**
	 * Stores the calculated position Z positive.
	 * @type {Number}
	 */
	#_calculatedPositionZPositive;

	/**
	 * Gets if the current position X is valid.
	 * @returns {Boolean} `true` if the current position X is valid, otherwise `false`.
	 */
	get isCurrentPositionXValid()
	{
		return this.#_isCurrentPositionXValid;
	}

	/**
	 * Sets if the current position X is valid.
	 * @param {Boolean} value `true` if the current position X is valid, otherwise `false`.
	 */
	set isCurrentPositionXValid( value )
	{
		this.#_isCurrentPositionXValid = value;
	}

	/**
	 * Gets if the current position Y is valid.
	 * @returns {Boolean} `true` if the current position Y is valid, otherwise `false`.
	 */
	get isCurrentPositionYValid()
	{
		return this.#_isCurrentPositionYValid;
	}

	/**
	 * Sets if the current position Y is valid.
	 * @param {Boolean} value `true` if the current position Y is valid, otherwise `false`.
	 */
	set isCurrentPositionYValid( value )
	{
		this.#_isCurrentPositionYValid = value;
	}

	/**
	 * Gets if the current position Z is valid.
	 * @returns {Boolean} `true` if the current position Z is valid, otherwise `false`.
	 */
	get isCurrentPositionZValid()
	{
		return this.#_isCurrentPositionZValid;
	}

	/**
	 * Sets if the current position Z is valid.
	 * @param {Boolean} value `true` if the current position Z is valid, otherwise `false`.
	 */
	set isCurrentPositionZValid( value )
	{
		this.#_isCurrentPositionZValid = value;
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
