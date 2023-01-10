'use strict';

import { AbstractCustomEvent } from '../AbstractCustomEvent.js';

/**
 * Represents a property changing event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class PropertyChangingEvent extends AbstractCustomEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'propertyChanging';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 * @param {PropertyEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( PropertyChangingEvent.EVENT_NAME, sender, eventArguments );
	}
}
