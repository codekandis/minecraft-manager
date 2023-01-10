'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class XDnsPrefetchControlHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( XDnsPrefetchControlHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'X-DNS-Prefetch-Control';
	}
}
