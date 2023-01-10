'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class NelHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( NelHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'NEL';
	}
}
