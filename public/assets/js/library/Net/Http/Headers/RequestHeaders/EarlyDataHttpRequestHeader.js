'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class EarlyDataHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( EarlyDataHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Early-Data';
	}
}

export default EarlyDataHttpRequestHeader;
