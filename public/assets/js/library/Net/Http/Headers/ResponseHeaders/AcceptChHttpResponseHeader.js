'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class AcceptChHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( AcceptChHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Accept-CH';
	}
}
