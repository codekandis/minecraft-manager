'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class CookieHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( CookieHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Cookie';
	}
}

export default CookieHttpRequestHeader;
