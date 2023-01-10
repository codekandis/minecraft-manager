'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class IfRangeHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( IfRangeHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'If-Range';
	}
}
