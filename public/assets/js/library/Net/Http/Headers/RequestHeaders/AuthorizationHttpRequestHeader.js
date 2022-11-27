'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class AuthorizationHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( AuthorizationHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Authorization';
	}
}

export default AuthorizationHttpRequestHeader;
