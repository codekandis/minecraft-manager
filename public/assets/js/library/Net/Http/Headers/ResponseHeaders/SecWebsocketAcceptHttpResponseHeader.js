'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class SecWebsocketAcceptHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( SecWebsocketAcceptHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-WebSocket-Accept';
	}
}

export default SecWebsocketAcceptHttpResponseHeader;
