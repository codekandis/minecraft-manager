'use strict';

import { Collection } from '../Collections/Collection.js';
import { Abstract } from './Abstract.js';

/**
 * Represents a mapping of an event name and event handlers.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class EventHandlerMapping extends Abstract
{
	/**
	 * Stores the event name.
	 * @type {String}
	 */
	#_eventName;

	/**
	 * Stores the event handlers.
	 * @type {Collection<Event_EventHandler>}
	 */
	#_eventHandlers;

	/**
	 * Constructor method.
	 * @param {String} eventName The event name.
	 * @param {...Event_EventHandler} eventHandlers The event handlers.
	 */
	constructor( eventName, ...eventHandlers )
	{
		super();

		this.#_eventName     = eventName;
		this.#_eventHandlers = new Collection( ...eventHandlers );
	}

	/**
	 * Gets the event name.
	 * @returns {String} The event name.
	 */
	get eventName()
	{
		return this.#_eventName;
	}

	/**
	 * Gets the event handlers.
	 * @returns {Collection<Event_EventHandler>} The event handlers.
	 */
	get eventHandlers()
	{
		return this.#_eventHandlers;
	}
}
