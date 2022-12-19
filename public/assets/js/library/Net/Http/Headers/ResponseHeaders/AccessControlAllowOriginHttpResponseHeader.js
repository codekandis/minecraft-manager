'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class AccessControlAllowOriginHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( AccessControlAllowOriginHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Access-Control-Allow-Origin';
	}
}

export default AccessControlAllowOriginHttpResponseHeader;
