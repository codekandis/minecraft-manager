'use strict';

import { AbstractKeyboardEvent } from './AbstractKeyboardEvent.js';

/**
 * Represents a key up event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class KeyUpEvent extends AbstractKeyboardEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'keyup';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( KeyUpEvent.EVENT_NAME, sender );
	}
}
