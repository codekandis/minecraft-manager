'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class FromHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( FromHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'From';
	}
}

export default FromHttpRequestHeader;
