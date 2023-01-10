'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ReferrerPolicyHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ReferrerPolicyHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Referrer-Policy';
	}
}
