'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class VaryHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( VaryHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Vary';
	}
}

export default VaryHttpResponseHeader;
