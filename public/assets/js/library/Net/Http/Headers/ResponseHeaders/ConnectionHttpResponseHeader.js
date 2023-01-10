'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ConnectionHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ConnectionHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Connection';
	}
}
