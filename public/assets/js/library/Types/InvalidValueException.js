'use strict';

import { LogicException } from './LogicException.js';

/**
 * Represents the exception if a value is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidValueException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param {*} value The value which is invalid.
	 * @returns {InvalidValueException}
	 * @constructor
	 */
	static with_value( value )
	{
		return new InvalidValueException(
			String.format`The value \`${ 0 }\` is invalid.`( value )
		);
	}
}
