'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class ContentRangeHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ContentRangeHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Range';
	}
}
