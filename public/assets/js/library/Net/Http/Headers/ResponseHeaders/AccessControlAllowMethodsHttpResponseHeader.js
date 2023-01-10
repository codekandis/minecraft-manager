'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class AccessControlAllowMethodsHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( AccessControlAllowMethodsHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Access-Control-Allow-Methods';
	}
}
