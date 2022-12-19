'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class AcceptEncodingHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( AcceptEncodingHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Accept-Encoding';
	}
}

export default AcceptEncodingHttpRequestHeader;
