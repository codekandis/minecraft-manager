'use strict';

import { AbstractMouseEvent } from './AbstractMouseEvent.js';

/**
 * Represents a mouse leave event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MouseLeaveEvent extends AbstractMouseEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'mouseleave';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( MouseLeaveEvent.EVENT_NAME, sender );
	}
}
