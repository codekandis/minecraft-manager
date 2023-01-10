'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Access-Control-HttpRequest-Headers`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AccessControlHttpRequestHeadersHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Gets the name of the HTTP request header.
	 * @returns {String} The name of the HTTP request header.
	 */
	static get NAME()
	{
		return 'Access-Control-HttpRequest-Headers';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( AccessControlHttpRequestHeadersHttpRequestHeader.NAME, value );
	}
}
