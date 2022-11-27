'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class ExpectCtHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ExpectCtHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Expect-CT';
	}
}

export default ExpectCtHttpResponseHeader;
