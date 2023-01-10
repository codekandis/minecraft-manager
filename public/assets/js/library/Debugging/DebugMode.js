'use strict';

import { AbstractStatic } from '../Types/AbstractStatic.js';
import { InvalidDebugModeException } from './InvalidDebugModeException.js';

/**
 * Represents an enumeration of debug modes.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DebugMode extends AbstractStatic
{
	/**
	 * Represents the disabled debug mode.
	 * @returns {String} The disabled debug mode.
	 */
	static get DISABLED()
	{
		return 'DISABLED';
	}

	/**
	 * Represents the enabled debug mode.
	 * @returns {String} The enabled debug mode.
	 */
	static get ENABLED()
	{
		return 'ENABLED';
	}

	/**
	 * Stores the debug mode.
	 * @type {String}
	 */
	static #_mode = DebugMode.DISABLED;

	/**
	 * Stores any valid debug mode.
	 * @type {String[]}
	 */
	static #_validDebugModes = [
		DebugMode.DISABLED,
		DebugMode.ENABLED
	];

	/**
	 * Gets the debug mode.
	 * @returns {String} The debug mode.
	 */
	static get mode()
	{
		return DebugMode.#_mode;
	}

	/**
	 * Sets the debug mode.
	 * @param {String} value The debug mode.
	 */
	static set mode( value )
	{
		if ( false === DebugMode.#_validDebugModes.includes( value ) )
		{
			throw InvalidDebugModeException.with_debugMode( value );
		}

		DebugMode.#_mode = value;
	}

	/**
	 * Disables debugging.
	 */
	static disable()
	{
		DebugMode.mode = DebugMode.DISABLED;
	}

	/**
	 * Enables debugging.
	 */
	static enable()
	{
		DebugMode.mode = DebugMode.ENABLED;
	}
}
