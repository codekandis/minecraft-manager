'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class PragmaHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( PragmaHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Pragma';
	}
}

export default PragmaHttpRequestHeader;
