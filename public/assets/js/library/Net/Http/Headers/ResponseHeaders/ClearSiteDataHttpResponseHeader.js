'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class ClearSiteDataHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ClearSiteDataHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Clear-Site-Data';
	}
}

export default ClearSiteDataHttpResponseHeader;
