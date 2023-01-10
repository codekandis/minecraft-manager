'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class DateHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( DateHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Date';
	}
}
