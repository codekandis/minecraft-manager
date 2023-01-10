'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class AccessControlMaxAgeHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( AccessControlMaxAgeHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Access-Control-Max-Age';
	}
}
