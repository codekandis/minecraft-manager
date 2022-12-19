'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class ProxyAuthorizationHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ProxyAuthorizationHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Proxy-Authorization';
	}
}

export default ProxyAuthorizationHttpRequestHeader;
