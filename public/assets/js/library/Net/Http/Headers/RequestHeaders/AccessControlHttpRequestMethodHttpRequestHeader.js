'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class AccessControlHttpRequestMethodHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( AccessControlHttpRequestMethodHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Access-Control-HttpRequest-Method';
	}
}
