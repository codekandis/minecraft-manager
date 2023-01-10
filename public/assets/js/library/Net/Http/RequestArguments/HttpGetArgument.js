'use strict';

import { HttpArgument } from './HttpArgument.js';

export class HttpGetArgument extends HttpArgument
{
	constructor( name, value )
	{
		super( name, value );
	}

	static fromHttpGetArgument( httpGetArgument )
	{
		return new HttpGetArgument( httpGetArgument.name, httpGetArgument.value );
	}
}
