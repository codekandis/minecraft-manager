'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Access-Control-Allow-Origin`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AccessControlAllowOriginHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Gets the name of the HTTP response header.
	 * @returns {String} The name of the HTTP response header.
	 */
	static get NAME()
	{
		return 'Access-Control-Allow-Origin';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( AccessControlAllowOriginHttpResponseHeader.NAME, value );
	}
}
