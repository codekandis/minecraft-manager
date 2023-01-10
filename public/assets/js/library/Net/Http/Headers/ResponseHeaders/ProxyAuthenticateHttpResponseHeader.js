'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ProxyAuthenticateHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ProxyAuthenticateHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Proxy-Authenticate';
	}
}
