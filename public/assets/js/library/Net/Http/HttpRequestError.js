'use strict';

import { Abstract } from '../../Types/Abstract.js';

export class HttpRequestError extends Abstract
{
	#_message = undefined;

	constructor( message )
	{
		super();

		this.#_message = message;
	}

	get message()
	{
		return this.#_message;
	}
}
