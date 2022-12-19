'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class ViaHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ViaHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Via';
	}
}

export default ViaHttpRequestHeader;
