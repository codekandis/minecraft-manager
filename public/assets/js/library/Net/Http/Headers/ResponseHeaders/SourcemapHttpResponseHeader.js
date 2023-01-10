'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class SourcemapHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( SourcemapHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'SourceMap';
	}
}
