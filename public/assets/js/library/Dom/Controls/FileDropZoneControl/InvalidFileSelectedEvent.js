'use strict';

import { AbstractCustomEvent } from '../../../Types/AbstractCustomEvent.js';

/**
 * Represents an event if an invalid file has been dropped or selected.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidFileSelectedEvent extends AbstractCustomEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'invalidFileSelected';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 * @param {FileEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( InvalidFileSelectedEvent.EVENT_NAME, sender, eventArguments );
	}
}
