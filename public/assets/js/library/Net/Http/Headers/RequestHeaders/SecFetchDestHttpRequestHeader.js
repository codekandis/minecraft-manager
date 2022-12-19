'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class SecFetchDestHttpRequestHeader extends HttpRequestHeader
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

export default SecFetchDestHttpRequestHeader;
