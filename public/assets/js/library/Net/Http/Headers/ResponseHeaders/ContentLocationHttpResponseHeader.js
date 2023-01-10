'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ContentLocationHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ContentLocationHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Location';
	}
}
