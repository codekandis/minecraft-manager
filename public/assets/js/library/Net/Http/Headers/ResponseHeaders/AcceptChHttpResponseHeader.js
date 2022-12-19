'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class AcceptChHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( AcceptChHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Accept-CH';
	}
}

export default AcceptChHttpResponseHeader;
