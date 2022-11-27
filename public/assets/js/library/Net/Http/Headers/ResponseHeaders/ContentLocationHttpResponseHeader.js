'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class ContentLocationHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ContentLocationHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Location';
	}
}

export default ContentLocationHttpResponseHeader;
