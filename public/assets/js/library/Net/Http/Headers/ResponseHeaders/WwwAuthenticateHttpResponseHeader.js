'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `WWW-Authenticate`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class WwwAuthenticateHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Gets the name of the HTTP response header.
	 * @returns {String} The name of the HTTP response header.
	 */
	static get NAME()
	{
		return 'WWW-Authenticate';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( WwwAuthenticateHttpResponseHeader.NAME, value );
	}
}
