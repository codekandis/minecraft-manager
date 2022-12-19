'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class AcceptRangesHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( AcceptRangesHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Accept-Ranges';
	}
}

export default AcceptRangesHttpResponseHeader;
