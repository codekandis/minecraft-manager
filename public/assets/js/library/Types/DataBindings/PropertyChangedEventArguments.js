'use strict';

import EventArguments from '../EventArguments.js';

class PropertyChangedEventArguments extends EventArguments
{
	#_object       = undefined;
	#_propertyName = undefined;

	constructor( object, propertyName )
	{
		super();

		this.#_object       = object;
		this.#_propertyName = propertyName;
	}

	get object()
	{
		return this.#_object;
	}

	get propertyName()
	{
		return this.#_propertyName;
	}
}

export default PropertyChangedEventArguments;
