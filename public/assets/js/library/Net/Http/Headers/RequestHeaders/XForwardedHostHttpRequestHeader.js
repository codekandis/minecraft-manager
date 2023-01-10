'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class XForwardedHostHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( XForwardedHostHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'X-Forwarded-Host';
	}
}
