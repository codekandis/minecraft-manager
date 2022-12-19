'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class WwwAuthenticateHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( WwwAuthenticateHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'WWW-Authenticate';
	}
}

export default WwwAuthenticateHttpResponseHeader;
