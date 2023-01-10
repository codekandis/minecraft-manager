'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ClearSiteDataHttpResponseHeader extends HttpResponseHeader
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
