'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `Document`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { EventManager } from '../Types/EventManager.js';
import { DomContentLoadedEvent } from './DomContentLoadedEvent.js';

/**
 * Gets the DOM content loaded event.
 * @property {Function} domContentLoadedEvent
 * @memberOf Document.prototype
 */
Object.defineProperty(
	Document.prototype,
	'domContentLoadedEvent',
	{
		get()
		{
			return new EventManager( DomContentLoadedEvent, this );
		}
	}
);
