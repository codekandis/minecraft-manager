'use strict';

import { Abstract } from '../../../Types/Abstract.js';
import { HttpArgumentNamePreparator } from './HttpArgumentNamePreparator.js';

/**
 * Represents an HTTP argument.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpArgument extends Abstract
{
	/**
	 * Stores the name of the HTTP argument.
	 * @var {String}
	 */
	#_name;

	/**
	 * Stores the value of the HTTP argument.
	 * @var {String}
	 */
	#_value;

	/**
	 * Constructor method.
	 * @param {String} name The name of the HTTP argument.
	 * @param {String} value The value of the HTTP argument.
	 */
	constructor( name, value )
	{
		super();

		this.#_name  = ( new HttpArgumentNamePreparator() )
			.prepare( name );
		this.#_value = value;
	}

	/**
	 * Static constructor method.
	 * @param {HttpArgument} httpArgument The HTTP argument to create the HTTP argument from.
	 * @returns {HttpArgument}
	 * @constructor
	 */
	static fromHttpArgument( httpArgument )
	{
		return new HttpArgument( httpArgument.name, httpArgument.value )
	}

	/**
	 * Gets the name of the HTTP argument.
	 * @returns {String} The name of the HTTP argument.
	 */
	get name()
	{
		return this.#_name;
	}

	/**
	 * Gets the value of the HTTP argument.
	 * @returns {String} The value of the HTTP argument.
	 */
	get value()
	{
		return this.#_value;
	}

	/**
	 * Gets the full HTTP argument string of the HTTP argument.
	 * @returns {String} The full HTTP argument string of the HTTP argument.
	 */
	get fullHttpArgumentString()
	{
		return String.format`${ 0 }=${ 1 }`
		(
			encodeURIComponent( this.name ),
			encodeURIComponent( this.value )
		);
	}
}
