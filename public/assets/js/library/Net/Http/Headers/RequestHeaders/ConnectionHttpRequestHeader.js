'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class ConnectionHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ConnectionHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Connection';
	}
}
