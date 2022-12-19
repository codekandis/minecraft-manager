'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class AccessControlExposeHeadersHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( AccessControlExposeHeadersHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Access-Control-Expose-Headers';
	}
}

export default AccessControlExposeHeadersHttpResponseHeader;
