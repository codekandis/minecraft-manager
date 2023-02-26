'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `X-DNS-Prefetch-Control`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class XDnsPrefetchControlHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Gets the name of the HTTP response header.
	 * @returns {String} The name of the HTTP response header.
	 */
	static get NAME()
	{
		return 'X-DNS-Prefetch-Control';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( XDnsPrefetchControlHttpResponseHeader.NAME, value );
	}
}
