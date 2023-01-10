'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class XForwardedProtoHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( XForwardedProtoHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'X-Forwarded-Proto';
	}
}
