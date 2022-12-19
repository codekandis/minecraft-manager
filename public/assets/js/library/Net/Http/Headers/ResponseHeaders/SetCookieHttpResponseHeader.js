'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class SetCookieHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( SetCookieHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Set-Cookie';
	}
}

export default SetCookieHttpResponseHeader;
