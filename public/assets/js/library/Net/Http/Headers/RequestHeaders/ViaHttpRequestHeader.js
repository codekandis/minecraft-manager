'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Via`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ViaHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Gets the name of the HTTP request header.
	 * @returns {String} The name of the HTTP request header.
	 */
	static get NAME()
	{
		return 'Via';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( ViaHttpRequestHeader.NAME, value );
	}
}
