'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class AcceptChLifetimeHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( AcceptChLifetimeHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Accept-CH-Lifetime';
	}
}

export default AcceptChLifetimeHttpResponseHeader;
