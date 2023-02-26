'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Strict-Transport-Security`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class StrictTransportSecurityHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Gets the name of the HTTP response header.
	 * @returns {String} The name of the HTTP response header.
	 */
	static get NAME()
	{
		return 'Strict-Transport-Security';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( StrictTransportSecurityHttpResponseHeader.NAME, value );
	}
}
