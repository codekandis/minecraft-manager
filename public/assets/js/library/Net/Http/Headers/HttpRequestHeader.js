'use strict';

import { HttpHeader } from './HttpHeader.js';

export class HttpRequestHeader extends HttpHeader
{
	constructor( name, value )
	{
		super( name, value );
	}

	static fromHttpRequestHeader( httpRequestHeader )
	{
		return new HttpRequestHeader( httpRequestHeader.name, httpRequestHeader.value );
	}
}
