'use strict';

/**
 * Represents an exception if an error occured.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class Exception extends Error
{
	/**
	 * Stores the message of the exception.
	 * @type {String}
	 */
	#_message;

	/**
	 * Constructor method.
	 * @param {String} message The message of the exception.
	 */
	constructor( message )
	{
		super( message );

		this.#_message = message;
	}
}
