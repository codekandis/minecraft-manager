'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class MaxForwardsHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( MaxForwardsHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Max-Forwards';
	}
}
