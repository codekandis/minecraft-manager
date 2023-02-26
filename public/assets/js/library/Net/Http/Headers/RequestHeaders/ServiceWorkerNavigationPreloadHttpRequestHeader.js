'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Service-Worker-Navigation-Preload`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ServiceWorkerNavigationPreloadHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Gets the name of the HTTP request header.
	 * @returns {String} The name of the HTTP request header.
	 */
	static get NAME()
	{
		return 'Service-Worker-Navigation-Preload';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( ServiceWorkerNavigationPreloadHttpRequestHeader.NAME, value );
	}
}
