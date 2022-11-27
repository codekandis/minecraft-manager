'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class SecChUaHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SecChUaHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-CH-UA';
	}
}

export default SecChUaHttpRequestHeader;
