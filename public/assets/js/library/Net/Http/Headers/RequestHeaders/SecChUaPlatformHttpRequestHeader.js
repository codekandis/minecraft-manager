'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Sec-CH-UA-Platform`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SecChUaPlatformHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Gets the name of the HTTP request header.
	 * @returns {String} The name of the HTTP request header.
	 */
	static get NAME()
	{
		return 'Sec-CH-UA-Platform';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( SecChUaPlatformHttpRequestHeader.NAME, value );
	}
}
