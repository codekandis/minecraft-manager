'use strict';

import { AbstractEvent } from '../Types/AbstractEvent.js';

/**
 * Represents a DOM content loaded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DomContentLoadedEvent extends AbstractEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'DOMContentLoaded';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DomContentLoadedEvent.EVENT_NAME, sender );
	}
}
