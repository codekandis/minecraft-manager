'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ContentTypeHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ContentTypeHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Type';
	}
}
