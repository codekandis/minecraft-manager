'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `X-Forwarded-Proto`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class XForwardedProtoHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Gets the name of the HTTP request header.
	 * @returns {String} The name of the HTTP request header.
	 */
	static get NAME()
	{
		return 'X-Forwarded-Proto';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( XForwardedProtoHttpRequestHeader.NAME, value );
	}
}
