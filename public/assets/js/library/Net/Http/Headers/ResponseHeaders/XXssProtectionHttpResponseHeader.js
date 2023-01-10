'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class XXssProtectionHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( XXssProtectionHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'X-XSS-Protection';
	}
}
