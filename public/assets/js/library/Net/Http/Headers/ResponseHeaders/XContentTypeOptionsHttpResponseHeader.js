'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class XContentTypeOptionsHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( XContentTypeOptionsHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'X-Content-Type-Options';
	}
}

export default XContentTypeOptionsHttpResponseHeader;
