'use strict';

import { Abstract } from '../../Types/Abstract.js';

/**
 * Represents an HTTP request result.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpRequestResult extends Abstract
{
	/**
	 * Stores the request error.
	 * @type {?HttpRequestError}
	 */
	#_error;

	/**
	 * Stores the response.
	 * @type {?HttpResponse}
	 */
	#_response;

	/**
	 * Constructor method.
	 * @param {?HttpRequestError} error The request error.
	 * @param {?HttpResponse} response The response.
	 */
	constructor( error, response )
	{
		super();

		this.#_error    = error;
		this.#_response = response;
	}

	/**
	 * Gets the request error.
	 * @returns {?HttpRequestError} The request error.
	 */
	get error()
	{
		return this.#_error;
	}

	/**
	 * Gets the response.
	 * @returns {?HttpResponse} The response.
	 */
	get response()
	{
		return this.#_response;
	}
}
