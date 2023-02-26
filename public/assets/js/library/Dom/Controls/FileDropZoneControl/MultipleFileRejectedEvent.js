'use strict';

import { AbstractCustomEvent } from '../../../Types/AbstractCustomEvent.js';

/**
 * Represents an event if a multiple file has been dropped or selected but multiple files are disallowed.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MultipleFileRejectedEvent extends AbstractCustomEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'multipleFileRejected';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 * @param {FileEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( MultipleFileRejectedEvent.EVENT_NAME, sender, eventArguments );
	}
}
