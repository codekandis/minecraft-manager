'use strict';

import { AbstractMouseEvent } from './AbstractMouseEvent.js';

/**
 * Represents a mouse enter event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MouseEnterEvent extends AbstractMouseEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'mouseenter';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( MouseEnterEvent.EVENT_NAME, sender );
	}
}
