'use strict';

import { EventDetail } from './EventDetail.js';

/**
 * Represents the base class of any event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractEvent extends CustomEvent
{
	/**
	 * Constructor method.
	 * @param {String} eventName The name of the event.
	 * @param {Object} sender The object which raised the event.
	 * @param {EventArguments} eventArguments The arguments of the event.
	 */
	constructor( eventName, sender, eventArguments )
	{
		super(
			eventName,
			{
				detail: new EventDetail( sender, eventArguments )
			}
		);
	}

	/**
	 * Raises the event.
	 */
	raise()
	{
		this.detail.sender.dispatchEvent( this );
	}
}
