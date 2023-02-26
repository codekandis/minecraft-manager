'use strict';

import { EventDetails } from './EventDetails.js';

/**
 * Represents the base class of any custom event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractCustomEvent extends CustomEvent
{
	/**
	 * Gets the name of the event.
	 * @returns {String} The name of the event.
	 */
	static get EVENT_NAME()
	{
		return String.empty;
	}

	/**
	 * Stores the event details.
	 * @type {EventDetails}
	 */
	#_detail;

	/**
	 * Constructor method.
	 * @param {String} eventName The name of the event.
	 * @param {Object} sender The object which dispatched the event.
	 * @param {EventArguments} eventArguments The arguments of the event.
	 */
	constructor( eventName, sender, eventArguments )
	{
		super( eventName );

		this.#_detail = new EventDetails( sender, eventArguments );
	}

	/**
	 * Gets the event details.
	 * @returns {EventDetails} The event details.
	 */
	get detail()
	{
		return this.#_detail;
	}

	/**
	 * Dispatches the event.
	 */
	dispatch()
	{
		this.detail.sender.dispatchEvent( this );
	}

	/**
	 * Returns the name of the event.
	 * @returns {String} The name of the event.
	 */
	toString()
	{
		return this.type;
	}
}
