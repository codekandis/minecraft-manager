'use strict';

import { LogicException } from './LogicException.js';

/**
 * Represents an exception if an abstract method has been called.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MethodIsAbstractException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param {String} className The name of the called class.
	 * @param {String} methodName The name of the abstract method.
	 * @returns {MethodIsAbstractException}
	 * @constructor
	 */
	static with_classNameAndMethodName( className, methodName )
	{
		return new MethodIsAbstractException(
			String.format`The method \`${ 0 }::${ 1 }()\` is declared abstract and therefore must be defined.`( className, methodName )
		)
	}

	/**
	 * Static constructor method.
	 * @param {String} className The name of the called class.
	 * @param {Function} method The abstract method.
	 * @returns {MethodIsAbstractException}
	 * @constructor
	 */
	static with_classNameAndMethod( className, method )
	{
		return MethodIsAbstractException.with_classNameAndMethodName( className, method.name );
	}

	/**
	 * Static constructor method.
	 * @param {Object} object The called object.
	 * @param {String} methodName The name of the abstract method.
	 * @returns {MethodIsAbstractException}
	 * @constructor
	 */
	static with_objectAndMethodName( object, methodName )
	{
		return MethodIsAbstractException.with_classNameAndMethodName( object.__proto__.constructor.name, methodName );
	}

	/**
	 * Static constructor method.
	 * @param {Object} object The called object.
	 * @param {Function} method The abstract method.
	 * @returns {MethodIsAbstractException}
	 * @constructor
	 */
	static with_objectAndMethod( object, method )
	{
		return MethodIsAbstractException.with_classNameAndMethodName( object.__proto__.constructor.name, method.name );
	}
}
