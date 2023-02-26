'use strict';

import { AbstractFocusEvent } from './AbstractFocusEvent.js';

/**
 * Represents a focus out event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FocusOutEvent extends AbstractFocusEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'focusout';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( FocusOutEvent.EVENT_NAME, sender );
	}
}
