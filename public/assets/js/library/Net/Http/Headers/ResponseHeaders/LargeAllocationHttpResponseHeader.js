'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class LargeAllocationHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( LargeAllocationHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Large-Allocation';
	}
}
