'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class ProxyAuthorizationHttpRequestHeader extends HttpRequestHeader
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
