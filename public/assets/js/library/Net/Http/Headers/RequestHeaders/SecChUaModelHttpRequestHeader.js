'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class SecChUaModelHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SecChUaModelHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-CH-UA-Model';
	}
}
