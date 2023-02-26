'use strict';

import { AbstractDragEvent } from './AbstractDragEvent.js';

/**
 * Represents a drag leave event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DragLeaveEvent extends AbstractDragEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'dragleave';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DragLeaveEvent.EVENT_NAME, sender );
	}
}
