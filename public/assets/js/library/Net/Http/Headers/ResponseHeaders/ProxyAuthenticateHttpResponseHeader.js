'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class ProxyAuthenticateHttpResponseHeader extends HttpResponseHeader
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

export default ProxyAuthenticateHttpResponseHeader;
