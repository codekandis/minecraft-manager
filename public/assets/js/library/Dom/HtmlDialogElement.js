'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `HTMLDialogElement`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { EventManager } from '../Types/EventManager.js';
import { CancelEvent } from './CancelEvent.js';

/**
 * Gets the cancel event.
 * @property {Function} inputEvent
 * @memberOf HTMLDialogElement.prototype
 */
Object.defineProperty(
	HTMLDialogElement.prototype,
	'cancelEvent',
	{
		get()
		{
			return new EventManager( CancelEvent, this );
		}
	}
);
