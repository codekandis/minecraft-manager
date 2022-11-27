'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class ContentLocationHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ContentLocationHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Location';
	}
}

export default ContentLocationHttpRequestHeader;
