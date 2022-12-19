'use strict';

import HttpHeader from './HttpHeader.js';

class HttpResponseHeader extends HttpHeader
{
	constructor( name, value )
	{
		super( name, value );
	}

	static fromHttpResponseHeader( httpResponseHeader )
	{
		return new HttpResponseHeader( httpResponseHeader.name, httpResponseHeader.value );
	}
}

export default HttpResponseHeader;
