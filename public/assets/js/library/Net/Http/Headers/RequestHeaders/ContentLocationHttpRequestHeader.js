'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class ContentLocationHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ContentLocationHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Location';
	}
}
