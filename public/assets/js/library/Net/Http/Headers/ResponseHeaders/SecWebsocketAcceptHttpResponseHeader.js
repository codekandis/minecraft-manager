'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Sec-WebSocket-Accept`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SecWebsocketAcceptHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Gets the name of the HTTP response header.
	 * @returns {String} The name of the HTTP response header.
	 */
	static get NAME()
	{
		return 'Sec-WebSocket-Accept';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( SecWebsocketAcceptHttpResponseHeader.NAME, value );
	}
}
