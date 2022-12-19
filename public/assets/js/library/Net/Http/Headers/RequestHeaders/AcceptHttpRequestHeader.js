'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class AcceptHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( AcceptHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Accept';
	}
}

export default AcceptHttpRequestHeader;
