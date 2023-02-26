'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Access-Control-HttpRequest-Method`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AccessControlHttpRequestMethodHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Gets the name of the HTTP request header.
	 * @returns {String} The name of the HTTP request header.
	 */
	static get NAME()
	{
		return 'Access-Control-HttpRequest-Method';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( AccessControlHttpRequestMethodHttpRequestHeader.NAME, value );
	}
}
