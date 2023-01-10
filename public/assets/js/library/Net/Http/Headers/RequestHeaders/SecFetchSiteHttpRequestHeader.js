'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class SecFetchSiteHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SecFetchSiteHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-Fetch-Site';
	}
}
