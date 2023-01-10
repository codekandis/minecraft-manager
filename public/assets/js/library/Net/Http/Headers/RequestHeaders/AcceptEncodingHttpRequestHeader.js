'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class AcceptEncodingHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( AcceptEncodingHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Accept-Encoding';
	}
}
