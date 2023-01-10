'use strict';

import { AbstractEvent } from '../Types/AbstractEvent.js';

/**
 * Represents a cancel event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class CancelEvent extends AbstractEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'cancel';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( CancelEvent.EVENT_NAME, sender );
	}
}
