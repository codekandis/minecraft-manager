'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class StrictTransportSecurityHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( StrictTransportSecurityHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Strict-Transport-Security';
	}
}

export default StrictTransportSecurityHttpResponseHeader;
