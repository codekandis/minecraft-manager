'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ViaHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ViaHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Via';
	}
}
