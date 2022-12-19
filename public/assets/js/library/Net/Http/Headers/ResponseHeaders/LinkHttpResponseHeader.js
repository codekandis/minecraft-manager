'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class LinkHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( LinkHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Link';
	}
}

export default LinkHttpResponseHeader;
