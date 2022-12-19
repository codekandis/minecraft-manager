'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class ForwardedHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ForwardedHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Forwarded';
	}
}

export default ForwardedHttpRequestHeader;
