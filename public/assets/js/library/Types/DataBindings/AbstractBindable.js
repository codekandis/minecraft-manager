'use strict';

import { Abstract } from '../Abstract.js';
import { EventManager } from '../EventManager.js';
import { DataBindings } from './DataBindings.js';
import { PropertyChangedEvent } from './PropertyChangedEvent.js';
import { PropertyChangingEvent } from './PropertyChangingEvent.js';
import { PropertyEventArguments } from './PropertyEventArguments.js';

/**
 * Represents the base class of any bindable.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractBindable extends Abstract
{
	/**
	 * Stores the data bindings of the bindable.
	 * @type {DataBindings}
	 */
	#_dataBindings;

	/**
	 * Constructor method.
	 */
	constructor()
	{
		super();

		this.#_dataBindings = new DataBindings( this );
	}

	/**
	 * Gets the data bindings of the bindable.
	 * @returns {DataBindings} The data bindings of the bindable.
	 */
	get dataBindings()
	{
		return this.#_dataBindings;
	}

	/**
	 * Gets the property changing event.
	 * @returns {Function} The property changing event.
	 */
	get propertyChangingEvent()
	{
		return new EventManager( PropertyChangingEvent, this );
	}

	/**
	 * Gets the property changed event.
	 * @returns {Function} The property changed event.
	 */
	get propertyChangedEvent()
	{
		return new EventManager( PropertyChangedEvent, this );
	}

	/**
	 * Invokes the property changing event for a property specified by its name.
	 * @param {String} propertyName The name of the property.
	 * @param {Object} proxy The proxy that will be used as the object containing the property.
	 */
	_dispatchPropertyChangingEvent( propertyName, proxy = this )
	{
		this.propertyChangingEvent.dispatch(
			new PropertyEventArguments( proxy, propertyName )
		);
	}

	/**
	 * Invokes the property changed event for a property specified by its name.
	 * @param {String} propertyName The name of the property.
	 * @param {Object} proxy The proxy that will be used as the object containing the property.
	 */
	_dispatchPropertyChangedEvent( propertyName, proxy = this )
	{
		this.propertyChangedEvent.dispatch(
			new PropertyEventArguments( proxy, propertyName )
		);
	}
}
