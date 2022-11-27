'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class ContentRangeHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ContentRangeHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Range';
	}
}

export default ContentRangeHttpRequestHeader;
