'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class RefererHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( RefererHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Referer';
	}
}

export default RefererHttpRequestHeader;
