'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class ContentLengthHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ContentLengthHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Length';
	}
}
