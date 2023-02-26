'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Sec-CH-Prefers-Reduced-Motion`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SecChPrefersReducedMotionHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Gets the name of the HTTP request header.
	 * @returns {String} The name of the HTTP request header.
	 */
	static get NAME()
	{
		return 'Sec-CH-Prefers-Reduced-Motion';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( SecChPrefersReducedMotionHttpRequestHeader.NAME, value );
	}
}
