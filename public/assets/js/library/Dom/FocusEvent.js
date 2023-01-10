'use strict';

import { AbstractFocusEvent } from './AbstractFocusEvent.js';

/**
 * Represents a focus event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FocusEvent extends AbstractFocusEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'focus';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( FocusEvent.EVENT_NAME, sender );
	}
}
