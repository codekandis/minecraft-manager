'use strict';

import { Abstract } from '../Abstract.js';
import { DataBindingInitializationDirection } from './DataBindingInitializationDirection.js';
import { PropertyChangedEvent } from './PropertyChangedEvent.js';

/**
 * Represents a data binding.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DataBinding extends Abstract
{
	/**
	 * Stores the binder.
	 * @type {Object}
	 */
	#_binder;

	/**
	 * Stores the name of the binder's bound property.
	 * @type {String}
	 */
	#_binderPropertyName;

	/**
	 * Stores the bindable.
	 * @type {Object}
	 */
	#_bindable;

	/**
	 * Stores the name of the bindable's bound property.
	 * @type {String}
	 */
	#_bindablePropertyName;

	/**
	 * Stores the direction of the initial property update.
	 * @type {String}
	 */
	#_initializiationDirection;

	/**
	 * Stores true if the binder is locked against any property change event, otherwise false.
	 * @type {Boolean}
	 */
	#_isBinderPropertyChangeLocked = false;

	/**
	 * Stores true if the bindable is locked against any property change event, otherwise false.
	 * @type {Boolean}
	 */
	#_isBindablePropertyChangeLocked = false;

	/**
	 * Constructor method
	 * @param {Object} binder The binder.
	 * @param {String} binderPropertyName The name of the binder's bound property.
	 * @param {Object} bindable The bindable.
	 * @param {String} bindablePropertyName The name of the bindable's bound property.
	 * @param {String} initializationDirection The direction of the initial property update.
	 */
	constructor( binder, binderPropertyName, bindable, bindablePropertyName, initializationDirection = DataBindingInitializationDirection.BINDER )
	{
		super();

		this.#_binder                   = binder;
		this.#_binderPropertyName       = binderPropertyName;
		this.#_bindable                 = bindable;
		this.#_bindablePropertyName     = bindablePropertyName;
		this.#_initializiationDirection = initializationDirection;

		this.#initialize();
	}

	/**
	 * Gets the binder.
	 * @returns {Object} The binder.
	 */
	get binder()
	{
		return this.#_binder;
	}

	/**
	 * Gets the name of the binder's bound property.
	 * @returns {String} The name of the binder's bound property.
	 */
	get binderPropertyName()
	{
		return this.#_binderPropertyName;
	}

	/**
	 * Gets the bindable.
	 * @returns {Object} The bindable.
	 */
	get bindable()
	{
		return this.#_bindable;
	}

	/**
	 * Gets the name of the bindable's bound property.
	 * @returns {String} The name of the bindable's bound property.
	 */
	get bindablePropertyName()
	{
		return this.#_bindablePropertyName;
	}

	/**
	 * Initializes the data binding.
	 */
	#initialize()
	{
		this.#_binder.propertyChangedEvent( this.#binder_propertyChanged );
		this.#_bindable.propertyChangedEvent( this.#bindable_propertyChanged );

		switch ( this.#_initializiationDirection )
		{
			case DataBindingInitializationDirection.BINDER:
			{
				this.#updateBinderProperty();

				break;
			}
			case DataBindingInitializationDirection.BINDABLE:
			{
				this.#updateBindableProperty();

				break;
			}
		}
	}

	/**
	 * Locks the binder against any property change event.
	 */
	#lockBinderPropertyChange()
	{
		this.#_isBinderPropertyChangeLocked = true;
	}

	/**
	 * Unlocks the binder from any property change event.
	 */
	#unlockBinderPropertyChange()
	{
		this.#_isBinderPropertyChangeLocked = false;
	}

	/**
	 * Locks the bindable against any property change event.
	 */
	#lockBindablePropertyChange()
	{
		this.#_isBindablePropertyChangeLocked = true;
	}

	/**
	 * Unlocks the bindable from any property change event.
	 */
	#unlockBindablePropertyChange()
	{
		this.#_isBindablePropertyChangeLocked = false;
	}

	/**
	 * Updates the binder's property.
	 */
	#updateBinderProperty()
	{
		if ( true === this.#_isBinderPropertyChangeLocked )
		{
			return;
		}

		this.#lockBindablePropertyChange();

		this.#_binder[ this.#_binderPropertyName ] = this.#_bindable[ this.#_bindablePropertyName ];

		this.#unlockBindablePropertyChange();
	}

	/**
	 * Updates the bindable's property.
	 */
	#updateBindableProperty()
	{
		if ( true === this.#_isBindablePropertyChangeLocked )
		{
			return;
		}

		this.#lockBinderPropertyChange();

		this.#_bindable[ this.#_bindablePropertyName ] = this.#_binder[ this.#_binderPropertyName ];

		this.#unlockBinderPropertyChange();
	}

	/**
	 * Will be invoked when the binder's property changed event will be dispatched.
	 * @param {PropertyChangedEvent} propertyChangedEvent The binder's dispatched property changed event.
	 */
	#binder_propertyChanged = ( propertyChangedEvent ) =>
	{
		if (
			this.#_binder !== propertyChangedEvent.detail.eventArguments.object
			|| this.#_binderPropertyName !== propertyChangedEvent.detail.eventArguments.propertyName
		)
		{
			return;
		}

		this.#updateBindableProperty();
	}

	/**
	 * Will be invoked when the bindable's property changed event will be dispatched.
	 * @param {PropertyChangedEvent} propertyChangedEvent The bindable's dispatched property changed event.
	 */
	#bindable_propertyChanged = ( propertyChangedEvent ) =>
	{
		if (
			this.#_bindable !== propertyChangedEvent.detail.eventArguments.object
			|| this.#_bindablePropertyName !== propertyChangedEvent.detail.eventArguments.propertyName
		)
		{
			return;
		}

		this.#updateBinderProperty();
	}
}
