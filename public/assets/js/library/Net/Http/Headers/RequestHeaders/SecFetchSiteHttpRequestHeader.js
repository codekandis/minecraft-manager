'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class SecFetchSiteHttpRequestHeader extends HttpRequestHeader
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

export default SecFetchSiteHttpRequestHeader;
