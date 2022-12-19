'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class AllowHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( AllowHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Allow';
	}
}

export default AllowHttpResponseHeader;
