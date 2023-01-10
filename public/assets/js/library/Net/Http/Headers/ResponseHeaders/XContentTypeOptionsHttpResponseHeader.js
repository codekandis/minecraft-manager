'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `X-Content-Type-Options`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class XContentTypeOptionsHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Gets the name of the HTTP response header.
	 * @returns {String} The name of the HTTP response header.
	 */
	static get NAME()
	{
		return 'X-Content-Type-Options';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( XContentTypeOptionsHttpResponseHeader.NAME, value );
	}
}
