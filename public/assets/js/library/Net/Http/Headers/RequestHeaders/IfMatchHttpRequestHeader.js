'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class IfMatchHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( IfMatchHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'If-Match';
	}
}

export default IfMatchHttpRequestHeader;
