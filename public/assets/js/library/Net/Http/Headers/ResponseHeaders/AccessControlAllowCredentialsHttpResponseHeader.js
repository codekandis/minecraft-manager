'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Access-Control-Allow-Credentials`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AccessControlAllowCredentialsHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Gets the name of the HTTP response header.
	 * @returns {String} The name of the HTTP response header.
	 */
	static get NAME()
	{
		return 'Access-Control-Allow-Credentials';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( AccessControlAllowCredentialsHttpResponseHeader.NAME, value );
	}
}
