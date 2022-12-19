'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class XForwardedProtoHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( XForwardedProtoHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'X-Forwarded-Proto';
	}
}

export default XForwardedProtoHttpRequestHeader;
