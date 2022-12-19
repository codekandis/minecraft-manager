'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class ViaHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ViaHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Via';
	}
}

export default ViaHttpResponseHeader;
