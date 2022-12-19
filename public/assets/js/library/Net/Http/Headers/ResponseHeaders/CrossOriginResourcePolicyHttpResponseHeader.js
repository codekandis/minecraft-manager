'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class CrossOriginResourcePolicyHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( CrossOriginResourcePolicyHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Cross-Origin-Resource-Policy';
	}
}

export default CrossOriginResourcePolicyHttpResponseHeader;
