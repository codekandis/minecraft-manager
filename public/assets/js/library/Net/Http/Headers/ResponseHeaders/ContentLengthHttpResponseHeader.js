'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class ContentLengthHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ContentLengthHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Length';
	}
}

export default ContentLengthHttpResponseHeader;
