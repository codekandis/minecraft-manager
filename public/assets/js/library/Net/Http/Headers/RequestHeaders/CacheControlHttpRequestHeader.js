'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class CacheControlHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( CacheControlHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Cache-Control';
	}
}
