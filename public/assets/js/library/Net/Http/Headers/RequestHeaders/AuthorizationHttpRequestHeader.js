'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class AuthorizationHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( AuthorizationHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Authorization';
	}
}
