'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class ContentRangeHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ContentRangeHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Range';
	}
}

export default ContentRangeHttpResponseHeader;
