'use strict';

import { Abstract } from './Abstract.js';

/**
 * Represents an event detail.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class EventDetail extends Abstract
{
	/**
	 * Stores the object which raised the event.
	 * @type {Object}
	 */
	#_sender;

	/**
	 * Stores the arguments of the event.
	 * @type {EventArguments}
	 */
	#_eventArguments;

	/**
	 * Constructor method.
	 * @param {Object} sender The object which raised the event.
	 * @param {EventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super();

		this.#_sender         = sender;
		this.#_eventArguments = eventArguments;
	}

	/**
	 * Gets the object which raised the event.
	 * @returns {Object} The object which raised the event.
	 */
	get sender()
	{
		return this.#_sender;
	}

	/**
	 * Gets the arguments of the event.
	 * @returns {EventArguments} The arguments of the event.
	 */
	get eventArguments()
	{
		return this.#_eventArguments;
	}
}
