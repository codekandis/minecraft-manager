'use strict';

import { AbstractKeyboardEvent } from './AbstractKeyboardEvent.js';

/**
 * Represents a key down event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class KeyDownEvent extends AbstractKeyboardEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'keydown';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( KeyDownEvent.EVENT_NAME, sender );
	}
}
