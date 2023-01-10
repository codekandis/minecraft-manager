'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class RefererHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( RefererHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Referer';
	}
}
