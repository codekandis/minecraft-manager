'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class AcceptLanguageHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( AcceptLanguageHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Accept-Language';
	}
}
