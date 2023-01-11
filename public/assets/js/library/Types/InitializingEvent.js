'use strict';

import { AbstractEvent } from './AbstractEvent.js';

/**
 * Represents the event if an object has been initialized.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InitializingEvent extends AbstractEvent
{
	/**
	 * Constructor method.
	 * @param {Object} sender The object which raised the event.
	 * @param {InitializingEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( InitializingEvent.EVENT_NAME, sender, eventArguments );
	}

	/**
	 * Gets the name of the event.
	 * @returns {String} The name of the event.
	 */
	static get EVENT_NAME()
	{
		return 'initializing';
	}
}
