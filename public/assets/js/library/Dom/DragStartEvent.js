'use strict';

import { AbstractDragEvent } from './AbstractDragEvent.js';

/**
 * Represents a drag start event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DragStartEvent extends AbstractDragEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'dragstart';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DragStartEvent.EVENT_NAME, sender );
	}
}
