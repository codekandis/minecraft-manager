'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class CacheControlHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( CacheControlHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Cache-Control';
	}
}

export default CacheControlHttpRequestHeader;
