'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class SecFetchDestHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SecFetchDestHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-Fetch-Dest';
	}
}
