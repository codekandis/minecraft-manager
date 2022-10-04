'use strict';

import EventArguments from './EventArguments.js';

class InitializingEventArguments extends EventArguments
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

export default InitializingEventArguments;
