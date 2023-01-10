'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class RetryAfterHttpResponseHeader extends HttpResponseHeader
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
