'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class AcceptChLifetimeHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( AcceptChLifetimeHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Accept-CH-Lifetime';
	}
}
