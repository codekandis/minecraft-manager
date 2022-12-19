'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class ContentDispositionHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ContentDispositionHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Disposition';
	}
}

export default ContentDispositionHttpResponseHeader;
