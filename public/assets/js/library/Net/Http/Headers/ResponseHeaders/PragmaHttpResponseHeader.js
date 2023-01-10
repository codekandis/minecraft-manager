'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class PragmaHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( PragmaHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Pragma';
	}
}
