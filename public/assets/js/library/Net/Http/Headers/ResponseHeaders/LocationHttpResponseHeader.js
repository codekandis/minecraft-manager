'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class LocationHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( LocationHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Location';
	}
}
