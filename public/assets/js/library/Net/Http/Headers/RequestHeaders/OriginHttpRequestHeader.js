'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Origin`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class OriginHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Gets the name of the HTTP request header.
	 * @returns {String} The name of the HTTP request header.
	 */
	static get NAME()
	{
		return 'Origin';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( OriginHttpRequestHeader.NAME, value );
	}
}
