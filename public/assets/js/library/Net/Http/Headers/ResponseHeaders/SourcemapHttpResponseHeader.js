'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class SourcemapHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( SourcemapHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'SourceMap';
	}
}

export default SourcemapHttpResponseHeader;
