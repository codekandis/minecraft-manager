'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class OriginHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( OriginHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Origin';
	}
}
