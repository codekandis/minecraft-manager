'use strict';

import { Abstract } from '../../library/Types/Abstract.js';

/**
 * Represents a position.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class Position extends Abstract
{
	/**
	 * Stores the position X.
	 * @type {Number}
	 */
	#_x;

	/**
	 * Stores the position Y.
	 * @type {Number}
	 */
	#_y;

	/**
	 * Stores the position Z.
	 * @type {Number}
	 */
	#_z;

	/**
	 * Constructor method.
	 * @param {Number} x The position X.
	 * @param {Number} y The position Y.
	 * @param {Number} z The position Z.
	 */
	constructor( x, y, z )
	{
		super();

		this.#_x = x;
		this.#_y = y;
		this.#_z = z;
	}

	/**
	 * Gets the position X.
	 * @returns {Number} The position X.
	 */
	get x()
	{
		return this.#_x;
	}

	/**
	 * Gets the position Y.
	 * @returns {Number} The position Y.
	 */
	get y()
	{
		return this.#_y;
	}

	/**
	 * Gets the position Z.
	 * @returns {Number} The position Z.
	 */
	get z()
	{
		return this.#_z;
	}
}
