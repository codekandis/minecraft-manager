'use strict';

import { AbstractMouseEvent } from './AbstractMouseEvent.js';

/**
 * Represents a mouse up event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MouseUpEvent extends AbstractMouseEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'mouseup';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( MouseUpEvent.EVENT_NAME, sender );
	}
}
