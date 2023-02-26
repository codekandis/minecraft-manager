'use strict';

import { HttpArgument } from './HttpArgument.js';

/**
 * Represents an HTTP GET argument.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpGetArgument extends HttpArgument
{
	/**
	 * Constructor method.
	 * @param {String} name The name of the HTTP GET argument.
	 * @param {String} value The value of the HTTP GET argument.
	 */
	constructor( name, value )
	{
		super( name, value );
	}

	/**
	 * Static constructor method.
	 * @param {HttpGetArgument} httpGetArgument The HTTP GET argument to create the HTTP GET argument from.
	 * @returns {HttpGetArgument}
	 * @constructor
	 */
	static fromHttpGetArgument( httpGetArgument )
	{
		return new HttpGetArgument( httpGetArgument.name, httpGetArgument.value )
	}
}
