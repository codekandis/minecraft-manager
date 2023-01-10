'use strict';

import { LogicException } from '../Types/LogicException.js';

/**
 * Represents the exception if a debug mode is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidDebugModeException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param {String} debugMode The invalid debug mode.
	 * @returns {InvalidDebugModeException}
	 * @constructor
	 */
	static with_debugMode( debugMode )
	{
		return new InvalidDebugModeException(
			String.format`The debug mode \`${ 0 }\` is invalid.`( debugMode )
		);
	}
}
