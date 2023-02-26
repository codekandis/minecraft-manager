'use strict';

import { AbstractDragEvent } from './AbstractDragEvent.js';

/**
 * Represents a drag enter event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DragEnterEvent extends AbstractDragEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'dragenter';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DragEnterEvent.EVENT_NAME, sender );
	}
}
