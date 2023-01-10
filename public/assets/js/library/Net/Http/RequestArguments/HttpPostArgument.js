'use strict';

import { HttpArgument } from './HttpArgument.js';

export class HttpPostArgument extends HttpArgument
{
	constructor( name, value )
	{
		super( name, value );
	}

	static fromHttpPostArgument( httpPostArgument )
	{
		return new HttpPostArgument( httpPostArgument.name, httpPostArgument.value );
	}
}
