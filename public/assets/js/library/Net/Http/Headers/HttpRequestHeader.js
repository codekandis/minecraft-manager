'use strict';

import HttpHeader from './HttpHeader.js';

class HttpRequestHeader extends HttpHeader
{
	constructor( name, value )
	{
		super( name, value );
	}

	static fromHttpRequestHeader( httpRequestHeader )
	{
		return new HttpRequestHeader( httpRequestHeader.name, httpRequestHeader.value );
	}
}

export default HttpRequestHeader;
