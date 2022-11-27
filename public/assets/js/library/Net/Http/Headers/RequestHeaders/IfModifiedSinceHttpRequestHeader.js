'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class IfModifiedSinceHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( IfModifiedSinceHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'If-Modified-Since';
	}
}

export default IfModifiedSinceHttpRequestHeader;
