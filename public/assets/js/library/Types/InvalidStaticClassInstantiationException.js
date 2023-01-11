'use strict';

import { Exception } from './Exception.js';

/**
 * Represents an exception if a nonstatic class has been tried to instantiate.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidStaticClassInstantiationException extends Exception
{
	/**
	 * Static constructor method.
	 * @constructor
	 * @param {String} className The name of the class which has been tried to instantiate.
	 * @returns {InvalidStaticClassInstantiationException}
	 */
	static with_className( className )
	{
		return new InvalidStaticClassInstantiationException(
			String.format`The static class \`${ 0 }\` cannot be instantiated.`( className )
		);
	}

	/**
	 * Static constructor method.
	 * @constructor
	 * @param {Object} object The object which has been tried to instantiate.
	 * @returns {InvalidStaticClassInstantiationException}
	 */
	static with_object( object )
	{
		return InvalidStaticClassInstantiationException.with_className( object.__proto__.constructor.name );
	}
}
