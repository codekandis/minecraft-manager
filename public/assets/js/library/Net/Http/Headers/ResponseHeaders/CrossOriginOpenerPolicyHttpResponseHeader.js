'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Cross-Origin-Opener-Policy`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class CrossOriginOpenerPolicyHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Gets the name of the HTTP response header.
	 * @returns {String} The name of the HTTP response header.
	 */
	static get NAME()
	{
		return 'Cross-Origin-Opener-Policy';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( CrossOriginOpenerPolicyHttpResponseHeader.NAME, value );
	}
}
