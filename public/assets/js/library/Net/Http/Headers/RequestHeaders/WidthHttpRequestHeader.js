'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class WidthHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( WidthHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Width';
	}
}
