'use strict';

import { Abstract } from '../../Types/Abstract.js';

/**
 * Represents an HTTP request error.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpRequestError extends Abstract
{
	/**
	 * Stores the error message.
	 * @type {String}
	 */
	#_message;

	/**
	 * Constructor method.
	 * @param {String} message The error message.
	 */
	constructor( message )
	{
		super();

		this.#_message = message;
	}

	/**
	 * Gets the error message.
	 * @returns {String} The error message.
	 */
	get message()
	{
		return this.#_message;
	}
}
