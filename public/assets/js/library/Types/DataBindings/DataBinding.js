'use strict';

import DomHelper from '../../Dom/DomHelper.js';
import Abstract from '../Abstract.js';
import DataBindingInitializationDirection from './DataBindingInitializationDirection.js';
import PropertyChangedEvent from './PropertyChangedEvent.js';

class DataBinding extends Abstract
{
	#_binder                         = undefined;
	#_binderPropertyName             = undefined;
	#_bindable                       = undefined;
	#_bindablePropertyName           = undefined;
	#_initializiationDirection       = undefined;
	#_isBinderPropertyChangeLocked   = false;
	#_isBindablePropertyChangeLocked = false;

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

	get binder()
	{
		return this.#_binder;
	}

	get binderPropertyName()
	{
		return this.#_binderPropertyName;
	}

	get bindable()
	{
		return this.#_bindable;
	}

	get bindablePropertyName()
	{
		return this.#_bindablePropertyName;
	}

	#initialize()
	{
		DomHelper.addEventHandler(
			this.#_binder,
			PropertyChangedEvent.EVENT_NAME,
			this.bindToEventHandler( this.#binder_propertyChanged )
		);
		DomHelper.addEventHandler(
			this.#_bindable,
			PropertyChangedEvent.EVENT_NAME,
			this.bindToEventHandler( this.#bindable_propertyChanged )
		);

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

	#lockBinderPropertyChange()
	{
		this.#_isBinderPropertyChangeLocked = true;
	}

	#unlockBinderPropertyChange()
	{
		this.#_isBinderPropertyChangeLocked = false;
	}

	#lockBindablePropertyChange()
	{
		this.#_isBindablePropertyChangeLocked = true;
	}

	#unlockBindablePropertyChange()
	{
		this.#_isBindablePropertyChangeLocked = false;
	}

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

	#binder_propertyChanged( propertyChangedEvent )
	{
		if ( this.#_binder !== propertyChangedEvent.detail.eventArguments.object
			|| this.#_binderPropertyName !== propertyChangedEvent.detail.eventArguments.propertyName )
		{
			return;
		}

		this.#updateBindableProperty();
	}

	#bindable_propertyChanged( propertyChangedEvent )
	{
		if ( this.#_bindable !== propertyChangedEvent.detail.eventArguments.object
			|| this.#_bindablePropertyName !== propertyChangedEvent.detail.eventArguments.propertyName )
		{
			return;
		}

		this.#updateBinderProperty();
	}
}

export default DataBinding;
