'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class ContentTypeHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ContentTypeHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Type';
	}
}
