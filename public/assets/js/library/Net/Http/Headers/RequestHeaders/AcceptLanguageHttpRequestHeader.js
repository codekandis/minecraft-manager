'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class AcceptLanguageHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( AcceptLanguageHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Accept-Language';
	}
}

export default AcceptLanguageHttpRequestHeader;
