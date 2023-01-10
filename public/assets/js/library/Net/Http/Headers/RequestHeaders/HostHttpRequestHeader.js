'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class HostHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( HostHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Host';
	}
}
