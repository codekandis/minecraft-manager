'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class AccessControlHttpRequestHeadersHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( AccessControlHttpRequestHeadersHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Access-Control-HttpRequest-Headers';
	}
}

export default AccessControlHttpRequestHeadersHttpRequestHeader;
