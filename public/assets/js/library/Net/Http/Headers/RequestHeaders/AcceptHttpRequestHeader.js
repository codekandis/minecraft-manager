'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class AcceptHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( AcceptHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Accept';
	}
}
