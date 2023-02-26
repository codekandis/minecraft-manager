'use strict';

import { AbstractMouseEvent } from './AbstractMouseEvent.js';

/**
 * Represents a double click event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DoubleClickEvent extends AbstractMouseEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'dblclick';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DoubleClickEvent.EVENT_NAME, sender );
	}
}
