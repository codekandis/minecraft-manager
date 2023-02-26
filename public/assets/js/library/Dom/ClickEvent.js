'use strict';

import { AbstractMouseEvent } from './AbstractMouseEvent.js';

/**
 * Represents a click event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ClickEvent extends AbstractMouseEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'click';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( ClickEvent.EVENT_NAME, sender );
	}
}
