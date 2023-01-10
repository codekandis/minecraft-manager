'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Last-Modified`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class LastModifiedHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Gets the name of the HTTP response header.
	 * @returns {String} The name of the HTTP response header.
	 */
	static get NAME()
	{
		return 'Last-Modified';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( LastModifiedHttpResponseHeader.NAME, value );
	}
}
