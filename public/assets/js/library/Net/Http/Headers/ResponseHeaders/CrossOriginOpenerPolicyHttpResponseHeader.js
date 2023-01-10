'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class CrossOriginOpenerPolicyHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( CrossOriginOpenerPolicyHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Cross-Origin-Opener-Policy';
	}
}
