'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class ContentLengthHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ContentLengthHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Length';
	}
}

export default ContentLengthHttpRequestHeader;
