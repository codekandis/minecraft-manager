'use strict';

import { AbstractMouseEvent } from './AbstractMouseEvent.js';

/**
 * Represents a mouse down event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MouseDownEvent extends AbstractMouseEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'mousedown';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( MouseDownEvent.EVENT_NAME, sender );
	}
}
