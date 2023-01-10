'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class RangeHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( RangeHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Range';
	}
}
