'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class ContentDprHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ContentDprHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-DPR';
	}
}

export default ContentDprHttpResponseHeader;
