'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class ServerTimingHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ServerTimingHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Server-Timing';
	}
}

export default ServerTimingHttpResponseHeader;
