'use strict';

import { LogicException } from './LogicException.js';

/**
 * Represents an exception if an element is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidElementException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param {*} element The element which is invalid.
	 * @returns {InvalidElementException}
	 * @constructor
	 */
	static with_element( element )
	{
		return new InvalidElementException(
			String.format`The element \`${ 0 }\` is invalid.`( element )
		);
	}
}
