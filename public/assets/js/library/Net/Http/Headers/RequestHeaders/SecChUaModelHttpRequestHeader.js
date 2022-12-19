'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class SecChUaModelHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SecChUaModelHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-CH-UA-Model';
	}
}

export default SecChUaModelHttpRequestHeader;
