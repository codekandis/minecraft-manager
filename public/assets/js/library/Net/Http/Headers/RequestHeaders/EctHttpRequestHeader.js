'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class EctHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( EctHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'ECT';
	}
}

export default EctHttpRequestHeader;
