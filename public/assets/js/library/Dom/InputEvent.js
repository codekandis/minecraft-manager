'use strict';

import { AbstractEvent } from '../Types/AbstractEvent.js';

/**
 * Represents an input event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InputEvent extends AbstractEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'input';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( InputEvent.EVENT_NAME, sender );
	}
}
