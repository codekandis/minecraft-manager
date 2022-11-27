'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class SecChUaPlatformVersionHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SecChUaPlatformVersionHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-CH-UA-Platform-Version';
	}
}

export default SecChUaPlatformVersionHttpRequestHeader;
