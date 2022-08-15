'use strict';

import Abstract from '../Abstract.js';
import DataBinding from './DataBinding.js';
import DataBindingInitializationDirection from './DataBindingInitializationDirection.js';

class DataBindings extends Abstract
{
	#_binder   = undefined;
	#_bindings = [];

	constructor( binder )
	{
		super();

		this.#_binder = binder;
	}

	add( propertyName, bindable, bindablePropertyName, initializationDirection = DataBindingInitializationDirection.BINDER )
	{
		this.#_bindings.push(
			new DataBinding( this.#_binder, propertyName, bindable, bindablePropertyName, initializationDirection )
		);
	}
}

export default DataBindings;
