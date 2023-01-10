'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class WwwAuthenticateHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( WwwAuthenticateHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'WWW-Authenticate';
	}
}
