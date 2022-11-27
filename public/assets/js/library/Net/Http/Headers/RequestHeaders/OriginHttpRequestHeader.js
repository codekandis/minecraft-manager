'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class OriginHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( OriginHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Origin';
	}
}

export default OriginHttpRequestHeader;
