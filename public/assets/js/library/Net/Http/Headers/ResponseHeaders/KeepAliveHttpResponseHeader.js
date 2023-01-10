'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class KeepAliveHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( KeepAliveHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Keep-Alive';
	}
}
