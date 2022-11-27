'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class SecFetchUserHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SecFetchUserHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-Fetch-User';
	}
}

export default SecFetchUserHttpRequestHeader;
