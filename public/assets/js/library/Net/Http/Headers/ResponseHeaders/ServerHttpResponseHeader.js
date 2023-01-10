'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ServerHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ServerHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Server';
	}
}
