'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `X-XSS-Protection`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class XXssProtectionHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Gets the name of the HTTP response header.
	 * @returns {String} The name of the HTTP response header.
	 */
	static get NAME()
	{
		return 'X-XSS-Protection';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( XXssProtectionHttpResponseHeader.NAME, value );
	}
}
