'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class ContentLanguageHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ContentLanguageHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Language';
	}
}
