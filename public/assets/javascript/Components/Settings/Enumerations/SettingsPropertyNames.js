'use strict';

import { AbstractStatic } from '../../../../libraries/jotunheim/Types/AbstractStatic.js';

/**
 * Represents an enumeration of property names of the settings component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SettingsPropertyNames extends AbstractStatic
{
	/**
	 * Represents the property `chunkSize`.
	 * @returns {String} The property `chunkSize`.
	 */
	static get CHUNKSIZE()
	{
		return 'chunkSize';
	}

	/**
	 * Represents the property `initialPositionX`.
	 * @returns {String} The property `initialPositionX`.
	 */
	static get INITIAL_POSITION_X()
	{
		return 'initialPositionX';
	}

	/**
	 * Represents the property `initialPositionY`.
	 * @returns {String} The property `initialPositionY`.
	 */
	static get INITIAL_POSITION_Y()
	{
		return 'initialPositionY';
	}

	/**
	 * Represents the property `initialPositionZ`.
	 * @returns {String} The property `initialPositionZ`.
	 */
	static get INITIAL_POSITION_Z()
	{
		return 'initialPositionZ';
	}
}
