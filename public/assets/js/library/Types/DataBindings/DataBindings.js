'use strict';

import { Abstract } from '../Abstract.js';
import { DataBinding } from './DataBinding.js';
import { DataBindingInitializationDirection } from './DataBindingInitializationDirection.js';

/**
 * Represents a collection of data bindings of any bindable.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DataBindings extends Abstract
{
	/**
	 * Stores the object whose properties will be bound.
	 * @type {Object}
	 */
	#_binder;

	/**
	 * Stores the internal list of data bindings.
	 * @type {*[]}
	 */
	#_bindings = [];

	/**
	 * Constructor method.
	 * @param {Object} binder The object whose properties will be bound.
	 */
	constructor( binder )
	{
		super();

		this.#_binder = binder;
	}

	/**
	 * Adds a data binding.
	 * @param {String} propertyName The name of the binder's property.
	 * @param {Object} bindable The object whose property will be bound to the binder.
	 * @param {String} bindablePropertyName The name of the property which will be bound to the binder.
	 * @param {String} initializationDirection The direction of the initial property update.
	 */
	add( propertyName, bindable, bindablePropertyName, initializationDirection = DataBindingInitializationDirection.BINDER )
	{
		this.#_bindings.add(
			new DataBinding( this.#_binder, propertyName, bindable, bindablePropertyName, initializationDirection )
		);
	}
}
