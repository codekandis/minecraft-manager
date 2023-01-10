'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class RttHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( RttHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'RTT';
	}
}
