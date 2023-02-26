'use strict';

import { AbstractCustomEvent } from '../AbstractCustomEvent.js';

/**
 * Represents a property changed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class PropertyChangedEvent extends AbstractCustomEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'propertyChanged';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 * @param {PropertyEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( PropertyChangedEvent.EVENT_NAME, sender, eventArguments );
	}
}
