'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Cross-Origin-Embedder-Policy`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class CrossOriginEmbedderPolicyHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Gets the name of the HTTP response header.
	 * @returns {String} The name of the HTTP response header.
	 */
	static get NAME()
	{
		return 'Cross-Origin-Embedder-Policy';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( CrossOriginEmbedderPolicyHttpResponseHeader.NAME, value );
	}
}
