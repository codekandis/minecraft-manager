'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class SecChUaMobileHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SecChUaMobileHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-CH-UA-Mobile';
	}
}

export default SecChUaMobileHttpRequestHeader;
