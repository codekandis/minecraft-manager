'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class FeaturePolicyHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( FeaturePolicyHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Feature-Policy';
	}
}
