'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class TrailerHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( TrailerHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Trailer';
	}
}

export default TrailerHttpResponseHeader;
