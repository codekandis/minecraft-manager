'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class CacheControlHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( CacheControlHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Cache-Control';
	}
}
