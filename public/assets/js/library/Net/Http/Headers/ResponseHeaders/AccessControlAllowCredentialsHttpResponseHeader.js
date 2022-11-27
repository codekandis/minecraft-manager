'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class AccessControlAllowCredentialsHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( AccessControlAllowCredentialsHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Access-Control-Allow-Credentials';
	}
}

export default AccessControlAllowCredentialsHttpResponseHeader;
