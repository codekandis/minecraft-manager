'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class ViewportWidthHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ViewportWidthHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Viewport-Width';
	}
}
