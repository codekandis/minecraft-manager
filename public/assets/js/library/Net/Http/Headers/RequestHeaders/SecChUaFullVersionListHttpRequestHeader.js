'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class SecChUaFullVersionListHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SecChUaFullVersionListHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-CH-UA-Full-Version-List';
	}
}
