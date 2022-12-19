'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class ContentLanguageHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ContentLanguageHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Language';
	}
}

export default ContentLanguageHttpResponseHeader;
