'use strict';

import { AbstractCustomEvent } from './AbstractCustomEvent.js';

/**
 * Represents an initializing event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InitializingEvent extends AbstractCustomEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'initializing';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object which dispatched the event.
	 * @param {InitializingEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( InitializingEvent.EVENT_NAME, sender, eventArguments );
	}
}
