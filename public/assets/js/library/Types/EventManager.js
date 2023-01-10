'use strict';

import { DomHelper } from '../Dom/DomHelper.js';
import { Abstract } from './Abstract.js';
import { EventHandlerMapping } from './EventHandlerMapping.js';

/**
 * Represents an event manager managing event handlers for a specific event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class EventManager extends Abstract
{
	/**
	 * Stores the class reference of the managed event.
	 * @type {Function} The class reference of the managed event.
	 */
	#_eventClass;

	/**
	 * Stores the object which will dispatch the event.
	 * @type {Object}
	 */
	#_sender;

	/**
	 * Constructor method.
	 * @param {Function} eventClass The class of the managed event.
	 * @param {Object} sender The object which will dispatch the event.
	 * @returns {Function} The event managing function.
	 */
	constructor( eventClass, sender )
	{
		super();

		this.#_eventClass = eventClass;
		this.#_sender     = sender;

		return this.#createManagingFunction();
	}

	/**
	 * Creates the event managing function.
	 * @return {Function} The event managing function.
	 */
	#createManagingFunction()
	{
		const managingFunction    = ( ...eventHandlers ) =>
		{
			DomHelper.addEventHandlers(
				this.#_sender,
				new EventHandlerMapping( this.#_eventClass.EVENT_NAME, ...eventHandlers )
			);
		};
		managingFunction.dispatch = this.#dispatch;

		return managingFunction;
	}

	/**
	 * Dispatches the event.
	 * @param {?EventArguments} eventArguments The arguments of the event.
	 */
	#dispatch = ( eventArguments ) =>
	{
		( new this.#_eventClass( this.#_sender, eventArguments ) )
			.dispatch();
	}
}
