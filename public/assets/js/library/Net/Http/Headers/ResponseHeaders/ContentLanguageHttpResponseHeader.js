'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ContentLanguageHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ContentLanguageHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Language';
	}
}
