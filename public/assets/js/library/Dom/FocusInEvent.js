'use strict';

import { AbstractFocusEvent } from './AbstractFocusEvent.js';

/**
 * Represents a focus in event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FocusInEvent extends AbstractFocusEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'focusin';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( FocusInEvent.EVENT_NAME, sender );
	}
}
