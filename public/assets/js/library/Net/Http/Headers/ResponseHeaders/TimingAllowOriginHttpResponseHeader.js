'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class TimingAllowOriginHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( TimingAllowOriginHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Timing-Allow-Origin';
	}
}

export default TimingAllowOriginHttpResponseHeader;
