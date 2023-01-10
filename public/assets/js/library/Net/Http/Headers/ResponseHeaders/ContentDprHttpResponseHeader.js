'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ContentDprHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ContentDprHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-DPR';
	}
}
