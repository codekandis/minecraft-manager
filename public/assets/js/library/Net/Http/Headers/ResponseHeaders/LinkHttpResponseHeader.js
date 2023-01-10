'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class LinkHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( LinkHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Link';
	}
}
