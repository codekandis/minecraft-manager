'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class IfUnmodifiedSinceHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( IfUnmodifiedSinceHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'If-Unmodified-Since';
	}
}

export default IfUnmodifiedSinceHttpRequestHeader;
