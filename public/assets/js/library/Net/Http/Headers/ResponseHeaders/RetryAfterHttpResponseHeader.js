'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class RetryAfterHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( RetryAfterHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Retry-After';
	}
}

export default RetryAfterHttpResponseHeader;
