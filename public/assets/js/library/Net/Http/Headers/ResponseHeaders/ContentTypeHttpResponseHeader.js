'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class ContentTypeHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ContentTypeHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Type';
	}
}

export default ContentTypeHttpResponseHeader;
