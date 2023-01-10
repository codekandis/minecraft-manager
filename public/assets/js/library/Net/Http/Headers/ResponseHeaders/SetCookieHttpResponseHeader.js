'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Set-Cookie`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SetCookieHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Gets the name of the HTTP response header.
	 * @returns {String} The name of the HTTP response header.
	 */
	static get NAME()
	{
		return 'Set-Cookie';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( SetCookieHttpResponseHeader.NAME, value );
	}
}
