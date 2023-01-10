'use strict';

import { AbstractDragEvent } from './AbstractDragEvent.js';

/**
 * Represents a drop event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DropEvent extends AbstractDragEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'drop';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DropEvent.EVENT_NAME, sender );
	}
}
