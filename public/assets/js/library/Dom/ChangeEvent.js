'use strict';

import { AbstractEvent } from '../Types/AbstractEvent.js';

/**
 * Represents a change event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ChangeEvent extends AbstractEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'change';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( ChangeEvent.EVENT_NAME, sender );
	}
}
