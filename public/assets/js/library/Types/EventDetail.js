'use strict';

import { Abstract } from './Abstract.js';

export class EventDetail extends Abstract
{
	#_sender         = undefined;
	#_eventArguments = undefined;

	constructor( sender, eventArguments )
	{
		super();

		this.#_sender         = sender;
		this.#_eventArguments = eventArguments;
	}

	get sender()
	{
		return this.#_sender;
	}

	get eventArguments()
	{
		return this.#_eventArguments;
	}
}
