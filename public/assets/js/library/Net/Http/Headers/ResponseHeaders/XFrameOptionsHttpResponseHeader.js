'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class XFrameOptionsHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( XFrameOptionsHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'X-Frame-Options';
	}
}
