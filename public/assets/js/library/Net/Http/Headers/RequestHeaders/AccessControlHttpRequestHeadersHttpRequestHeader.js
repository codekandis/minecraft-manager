'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class AccessControlHttpRequestHeadersHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( AccessControlHttpRequestHeadersHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Access-Control-HttpRequest-Headers';
	}
}
