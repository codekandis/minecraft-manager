'use strict';

import { Abstract } from '../../libraries/jotunheim/Types/Abstract.js';

/**
 * Represents a position offset.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class PositionOffset extends Abstract
{
	/**
	 * Stores the position offset X.
	 * @type {Number}
	 */
	#_x;

	/**
	 * Stores the position offset Y.
	 * @type {Number}
	 */
	#_y;

	/**
	 * Stores the position offset Z.
	 * @type {Number}
	 */
	#_z;

	/**
	 * Constructor method.
	 * @param {Number} x The position offset X.
	 * @param {Number} y The position offset Y.
	 * @param {Number} z The position offset Z.
	 */
	constructor( x, y, z )
	{
		super();

		this.#_x = x;
		this.#_y = y;
		this.#_z = z;
	}

	/**
	 * Gets the position offset X.
	 * @returns {Number} The position offset X.
	 */
	get x()
	{
		return this.#_x;
	}

	/**
	 * Gets the position offset Y.
	 * @returns {Number} The position offset Y.
	 */
	get y()
	{
		return this.#_y;
	}

	/**
	 * Gets the position offset Z.
	 * @returns {Number} The position offset Z.
	 */
	get z()
	{
		return this.#_z;
	}
}
