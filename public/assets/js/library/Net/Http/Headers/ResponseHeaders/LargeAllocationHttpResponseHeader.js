'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class LargeAllocationHttpResponseHeader extends HttpResponseHeader
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

export default LargeAllocationHttpResponseHeader;
