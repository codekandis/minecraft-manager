'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class AccessControlAllowHeadersHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( AccessControlAllowHeadersHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Access-Control-Allow-Headers';
	}
}

export default AccessControlAllowHeadersHttpResponseHeader;
