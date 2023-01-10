'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class AccessControlAllowHeadersHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( AccessControlAllowHeadersHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Access-Control-Allow-Headers';
	}
}
