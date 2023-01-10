'use strict';

import { EventArguments } from './EventArguments.js';

export class InitializingEventArguments extends EventArguments
{
	#_object = undefined;

	constructor( object )
	{
		super();

		this.#_object = object;
	}

	get object()
	{
		return this.#_object;
	}
}
