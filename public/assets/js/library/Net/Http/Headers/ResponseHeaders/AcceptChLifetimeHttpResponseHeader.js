'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Accept-CH-Lifetime`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AcceptChLifetimeHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Gets the name of the HTTP response header.
	 * @returns {String} The name of the HTTP response header.
	 */
	static get NAME()
	{
		return 'Accept-CH-Lifetime';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( AcceptChLifetimeHttpResponseHeader.NAME, value );
	}
}
