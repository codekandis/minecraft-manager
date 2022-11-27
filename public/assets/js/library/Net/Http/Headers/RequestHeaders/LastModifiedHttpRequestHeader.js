'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class LastModifiedHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( LastModifiedHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Last-Modified';
	}
}

export default LastModifiedHttpRequestHeader;
