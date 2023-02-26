'use strict';

import { AbstractFocusEvent } from './AbstractFocusEvent.js';

/**
 * Represents a blur event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class BlurEvent extends AbstractFocusEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'blur';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( BlurEvent.EVENT_NAME, sender );
	}
}
