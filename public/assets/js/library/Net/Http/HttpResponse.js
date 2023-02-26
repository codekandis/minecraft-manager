'use strict';

import { Abstract } from '../../Types/Abstract.js';

/**
 * Represents an HTTP response.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpResponse extends Abstract
{
	/**
	 * Stores the URI of the request.
	 * @type {URL}
	 */
	#_uri;

	/**
	 * Stores the status code of the response.
	 * @type {Number}
	 */
	#_statusCode;

	/**
	 * Stores the headers of the response.
	 * @type {HttpResponseHeaderCollection}
	 */
	#_headers;

	/**
	 * Stores the payload of the response.
	 * @type {String}
	 */
	#_payload;

	/**
	 * Constructor method.
	 * @param {URL} uri The URI of the request.
	 * @param {Number} statusCode The status code of the response.
	 * @param {HttpResponseHeaderCollection} headers The headers of the response.
	 * @param {String} payload The payload of the response.
	 */
	constructor( uri, statusCode, headers, payload )
	{
		super();

		this.#_uri        = uri;
		this.#_statusCode = statusCode;
		this.#_headers    = headers;
		this.#_payload    = payload;
	}

	/**
	 * Gets the URI of the request.
	 * @returns {URL} The URI of the request.
	 */
	get uri()
	{
		return this.#_uri;
	}

	/**
	 * Gets the status code of the response.
	 * @returns {Number} The status code of the response.
	 */
	get statusCode()
	{
		return this.#_statusCode;
	}

	/**
	 * Gets the headers of the response.
	 * @returns {HttpResponseHeaderCollection} The headers of the response.
	 */
	get headers()
	{
		return this.#_headers;
	}

	/**
	 * Gets the payload of the response.
	 * @returns {String} The payload of the response.
	 */
	get payload()
	{
		return this.#_payload;
	}
}
