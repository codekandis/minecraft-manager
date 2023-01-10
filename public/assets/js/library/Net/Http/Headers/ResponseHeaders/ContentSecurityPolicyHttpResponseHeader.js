'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ContentSecurityPolicyHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ContentSecurityPolicyHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Security-Policy';
	}
}
