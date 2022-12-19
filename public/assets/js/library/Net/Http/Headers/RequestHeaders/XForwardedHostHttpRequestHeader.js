'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class XForwardedHostHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( XForwardedHostHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'X-Forwarded-Host';
	}
}

export default XForwardedHostHttpRequestHeader;
