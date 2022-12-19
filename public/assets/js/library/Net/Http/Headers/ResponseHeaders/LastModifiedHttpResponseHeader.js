'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class LastModifiedHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( LastModifiedHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Last-Modified';
	}
}

export default LastModifiedHttpResponseHeader;
