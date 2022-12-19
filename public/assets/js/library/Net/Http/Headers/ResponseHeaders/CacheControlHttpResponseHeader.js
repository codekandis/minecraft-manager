'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class CacheControlHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( CacheControlHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Cache-Control';
	}
}

export default CacheControlHttpResponseHeader;
