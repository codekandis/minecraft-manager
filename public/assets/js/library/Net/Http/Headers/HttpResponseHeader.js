'use strict';

import { HttpHeader } from './HttpHeader.js';

/**
 * Represents an HTTP response header.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpResponseHeader extends HttpHeader
{
	/**
	 * Constructor method.
	 * @param {String} name The name of the HTTP response header.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( name, value )
	{
		super( name, value );
	}

	/**
	 * Static constructor method.
	 * @param {HttpResponseHeader} httpResponseHeader The response header to create the HTTP response header from.
	 * @returns {HttpResponseHeader}
	 * @constructor
	 */
	static from_httpResponseHeader( httpResponseHeader )
	{
		return new HttpResponseHeader( httpResponseHeader.name, httpResponseHeader.value );
	}
}
