'use strict';

import { EventArguments } from '../EventArguments.js';

/**
 * Represents the event arguments of any property related event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class PropertyEventArguments extends EventArguments
{
	/**
	 * Stores the object whose property is affected.
	 * @type {Object}
	 */
	#_object;

	/**
	 * Stores the name of the affected property.
	 * @type {String}
	 */
	#_propertyName;

	/**
	 * Constructor method.
	 * @param {Object} object The object whose property is affected.
	 * @param {String} propertyName The name of the affected property.
	 */
	constructor( object, propertyName )
	{
		super();

		this.#_object       = object;
		this.#_propertyName = propertyName;
	}

	/**
	 * Gets the object whose property is affected.
	 * @returns {Object} The object whose property is affected.
	 */
	get object()
	{
		return this.#_object;
	}

	/**
	 * Gets the name of the affected property.
	 * @returns {String} The name of the affected property.
	 */
	get propertyName()
	{
		return this.#_propertyName;
	}
}
