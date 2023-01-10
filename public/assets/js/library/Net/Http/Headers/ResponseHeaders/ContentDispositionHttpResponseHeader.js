'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ContentDispositionHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ContentDispositionHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Disposition';
	}
}
