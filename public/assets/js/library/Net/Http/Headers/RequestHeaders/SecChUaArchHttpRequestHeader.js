'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class SecChUaArchHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SecChUaArchHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-CH-UA-Arch';
	}
}

export default SecChUaArchHttpRequestHeader;
