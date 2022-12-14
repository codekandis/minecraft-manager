'use strict';

import Abstract from '../../Types/Abstract.js';

class HttpRequestError extends Abstract
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

export default HttpRequestError;
