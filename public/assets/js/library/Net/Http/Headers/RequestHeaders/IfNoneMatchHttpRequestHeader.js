'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class IfNoneMatchHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( IfNoneMatchHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'If-None-Match';
	}
}

export default IfNoneMatchHttpRequestHeader;
