'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class AgeHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( AgeHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Age';
	}
}

export default AgeHttpResponseHeader;
