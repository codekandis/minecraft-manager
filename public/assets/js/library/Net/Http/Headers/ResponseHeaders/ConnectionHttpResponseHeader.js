'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class ConnectionHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ConnectionHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Connection';
	}
}

export default ConnectionHttpResponseHeader;
