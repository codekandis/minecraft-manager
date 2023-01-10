'use strict';

import { Abstract } from '../../Types/Abstract.js';

export class HttpRequestResult extends Abstract
{
	#_error    = undefined;
	#_response = undefined;

	constructor( error, response )
	{
		super();

		this.#_error    = error;
		this.#_response = response;
	}

	get error()
	{
		return this.#_error;
	}

	get response()
	{
		return this.#_response;
	}
}
