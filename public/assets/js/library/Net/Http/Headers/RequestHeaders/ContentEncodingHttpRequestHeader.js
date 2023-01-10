'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class ContentEncodingHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ContentEncodingHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Encoding';
	}
}
