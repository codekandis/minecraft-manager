'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Timing-Allow-Origin`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class TimingAllowOriginHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Gets the name of the HTTP response header.
	 * @returns {String} The name of the HTTP response header.
	 */
	static get NAME()
	{
		return 'Timing-Allow-Origin';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( TimingAllowOriginHttpResponseHeader.NAME, value );
	}
}
