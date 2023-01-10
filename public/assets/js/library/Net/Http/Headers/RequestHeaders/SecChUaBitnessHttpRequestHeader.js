'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class SecChUaBitnessHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SecChUaBitnessHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-CH-UA-Bitness';
	}
}
