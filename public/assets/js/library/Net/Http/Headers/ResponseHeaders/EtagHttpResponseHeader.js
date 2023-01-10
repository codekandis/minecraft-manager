'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class EtagHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( EtagHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'ETag';
	}
}
