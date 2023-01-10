'use strict';

import { Abstract } from '../Abstract.js';

export class PropertyChangingEventArguments extends Abstract
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
