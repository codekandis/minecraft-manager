'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class SecFetchModeHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SecFetchModeHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-Fetch-Mode';
	}
}

export default SecFetchModeHttpRequestHeader;
