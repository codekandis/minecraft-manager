'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class SecChUaBitnessHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SecChUaBitnessHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-CH-UA-Bitness';
	}
}

export default SecChUaBitnessHttpRequestHeader;
