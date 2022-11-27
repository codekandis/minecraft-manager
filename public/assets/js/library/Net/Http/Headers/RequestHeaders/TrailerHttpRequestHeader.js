'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class TrailerHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( TrailerHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Trailer';
	}
}

export default TrailerHttpRequestHeader;
