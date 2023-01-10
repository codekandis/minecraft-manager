'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class KeepAliveHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( KeepAliveHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Keep-Alive';
	}
}
