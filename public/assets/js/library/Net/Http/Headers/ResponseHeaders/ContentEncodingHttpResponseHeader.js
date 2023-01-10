'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ContentEncodingHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ContentEncodingHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Encoding';
	}
}
