'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class SecChUaPlatformHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SecChUaPlatformHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-CH-UA-Platform';
	}
}
