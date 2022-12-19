'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class DownlinkHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( DownlinkHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Downlink';
	}
}

export default DownlinkHttpRequestHeader;
