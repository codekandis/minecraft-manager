'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class SecChUaFullVersionHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SecChUaFullVersionHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-CH-UA-Full-Version';
	}
}
