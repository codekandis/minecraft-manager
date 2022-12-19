'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class AccessControlAllowMethodsHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( AccessControlAllowMethodsHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Access-Control-Allow-Methods';
	}
}

export default AccessControlAllowMethodsHttpResponseHeader;
