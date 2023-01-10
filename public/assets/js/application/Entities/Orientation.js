'use strict';

import { AbstractStatic } from '../../library/Types/AbstractStatic.js';

/**
 * Represents an enumeration of orientations.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class Orientation extends AbstractStatic
{
	/**
	 * Represents the orientation `NORTH`.
	 * @returns {String} The orientation `NORTH`.
	 */
	static get NORTH()
	{
		return 'NORTH';
	}

	/**
	 * Represents the orientation `EAST`.
	 * @returns {String} The orientation `EAST`.
	 */
	static get EAST()
	{
		return 'EAST';
	}

	/**
	 * Represents the orientation `SOUTH`.
	 * @returns {String} The orientation `SOUTH`.
	 */
	static get SOUTH()
	{
		return 'SOUTH';
	}

	/**
	 * Represents the orientation `WEST`.
	 * @returns {String} The orientation `WEST`.
	 */
	static get WEST()
	{
		return 'WEST';
	}
}
