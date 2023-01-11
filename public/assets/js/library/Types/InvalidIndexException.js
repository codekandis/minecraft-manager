'use strict';

import { Exception } from './Exception.js';

/**
 * Represents an exception if an index is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidIndexException extends Exception
{
	/**
	 * Static constructor method.
	 * @constructor
	 * @param {Number|String} index The index which is invalid.
	 * @returns {InvalidIndexException}
	 */
	static with_index( index )
	{
		return new InvalidIndexException( String.format`The index \`${ 0 }\` is invalid.`( index ) );
	}
}
