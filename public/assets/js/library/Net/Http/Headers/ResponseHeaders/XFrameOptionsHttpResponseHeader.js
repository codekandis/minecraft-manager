'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class XFrameOptionsHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( XFrameOptionsHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'X-Frame-Options';
	}
}

export default XFrameOptionsHttpResponseHeader;
