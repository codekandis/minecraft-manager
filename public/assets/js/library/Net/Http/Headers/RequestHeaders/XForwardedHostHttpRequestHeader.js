'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `X-Forwarded-Host`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class XForwardedHostHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Gets the name of the HTTP request header.
	 * @returns {String} The name of the HTTP request header.
	 */
	static get NAME()
	{
		return 'X-Forwarded-Host';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( XForwardedHostHttpRequestHeader.NAME, value );
	}
}
