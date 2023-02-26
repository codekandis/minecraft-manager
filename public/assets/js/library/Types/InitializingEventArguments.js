'use strict';

import { EventArguments } from './EventArguments.js';

/**
 * Represents the arguments of the initializing event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InitializingEventArguments extends EventArguments
{
	/**
	 * Stores the object which has been initialized.
	 * @type {Object}
	 */
	#_object;

	/**
	 * Constructor method.
	 * @param {Object} object The object which has been initialized.
	 */
	constructor( object )
	{
		super();

		this.#_object = object;
	}

	/**
	 * Gets the object which has been initialized.
	 * @returns {Object} The object which has been initialized.
	 */
	get object()
	{
		return this.#_object;
	}
}
