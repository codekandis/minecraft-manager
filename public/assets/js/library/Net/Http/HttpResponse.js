'use strict';

import Abstract from '../../Types/Abstract.js';

class HttpResponse extends Abstract
{
	#_uri        = undefined;
	#_statusCode = undefined;
	#_headers    = undefined;
	#_payload    = undefined;

	constructor( uri, statusCode, headers, payload )
	{
		super();

		this.#_uri        = uri;
		this.#_statusCode = statusCode;
		this.#_headers    = headers;
		this.#_payload    = payload;
	}

	get uri()
	{
		return this.#_uri;
	}

	get statusCode()
	{
		return this.#_statusCode;
	}

	get headers()
	{
		return this.#_headers;
	}

	get payload()
	{
		return this.#_payload;
	}
}

export default HttpResponse;
