'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class AccessControlAllowCredentialsHttpResponseHeader extends HttpResponseHeader
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
