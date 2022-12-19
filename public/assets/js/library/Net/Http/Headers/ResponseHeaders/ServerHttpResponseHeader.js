'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class ServerHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ServerHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Server';
	}
}

export default ServerHttpResponseHeader;
