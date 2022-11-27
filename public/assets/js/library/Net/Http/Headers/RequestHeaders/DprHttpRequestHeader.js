'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class DprHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( DprHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'DPR';
	}
}

export default DprHttpRequestHeader;
