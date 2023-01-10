'use strict';

import { AbstractCustomEvent } from '../../../Types/AbstractCustomEvent.js';

/**
 * Represents an event if a valid file has been dropped or selected.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValidFileSelectedEvent extends AbstractCustomEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'validFileSelected';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 * @param {FileEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( ValidFileSelectedEvent.EVENT_NAME, sender, eventArguments );
	}
}
