'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ExpiresHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ExpiresHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Expires';
	}
}
