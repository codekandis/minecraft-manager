'use strict';

import { EventArguments } from './EventArguments.js';
import { EventDetails } from './EventDetails.js';

/**
 * Represents the default event details.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DefaultEventDetails extends EventDetails
{
	/**
	 * Constructor method.
	 * @param {Object} sender The object which dispatched the event.
	 */
	constructor( sender )
	{
		super( sender, new EventArguments() );
	}
}
