'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class FeaturePolicyHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( FeaturePolicyHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Feature-Policy';
	}
}

export default FeaturePolicyHttpResponseHeader;
