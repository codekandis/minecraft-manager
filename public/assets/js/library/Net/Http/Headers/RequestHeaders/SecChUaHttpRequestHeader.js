'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Sec-CH-UA`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SecChUaHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Gets the name of the HTTP request header.
	 * @returns {String} The name of the HTTP request header.
	 */
	static get NAME()
	{
		return 'Sec-CH-UA';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( SecChUaHttpRequestHeader.NAME, value );
	}
}
