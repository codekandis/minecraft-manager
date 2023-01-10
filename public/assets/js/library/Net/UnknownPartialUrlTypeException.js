'use strict';

import { LogicException } from '../Types/LogicException.js';

/**
 * Represents the exception if a partial URL type is unknown.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class UnknownPartialUrlTypeException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param {String} partialUrlType The partial URL type which is invalid.
	 * @returns {UnknownPartialUrlTypeException}
	 * @constructor
	 */
	static with_partialUrlType( partialUrlType )
	{
		return new UnknownPartialUrlTypeException(
			String.format`The partial URL \`${ 0 }\` is invalid.`( partialUrlType )
		);
	}
}
