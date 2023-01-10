'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ContentLengthHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ContentLengthHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Length';
	}
}
