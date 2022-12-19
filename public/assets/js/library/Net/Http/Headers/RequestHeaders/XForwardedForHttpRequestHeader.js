'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class XForwardedForHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( XForwardedForHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'X-Forwarded-For';
	}
}

export default XForwardedForHttpRequestHeader;
