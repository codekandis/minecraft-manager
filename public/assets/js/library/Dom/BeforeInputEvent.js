'use strict';

import { AbstractInputEvent } from './AbstractInputEvent.js';

/**
 * Represents a before input event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class BeforeInputEvent extends AbstractInputEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'beforeinput';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( BeforeInputEvent.EVENT_NAME, sender );
	}
}
