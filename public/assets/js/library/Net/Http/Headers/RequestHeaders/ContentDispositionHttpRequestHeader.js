'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class ContentDispositionHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ContentDispositionHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Disposition';
	}
}
