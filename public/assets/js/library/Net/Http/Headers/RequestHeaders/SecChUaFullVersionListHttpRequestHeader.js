'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Sec-CH-UA-Full-Version-List`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SecChUaFullVersionListHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Gets the name of the HTTP request header.
	 * @returns {String} The name of the HTTP request header.
	 */
	static get NAME()
	{
		return 'Sec-CH-UA-Full-Version-List';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( SecChUaFullVersionListHttpRequestHeader.NAME, value );
	}
}
