'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class EarlyDataHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( EarlyDataHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Early-Data';
	}
}
