'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class ContentLanguageHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ContentLanguageHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Language';
	}
}

export default ContentLanguageHttpRequestHeader;
