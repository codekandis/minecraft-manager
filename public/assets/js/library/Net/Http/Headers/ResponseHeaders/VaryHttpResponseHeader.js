'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class VaryHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( VaryHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Vary';
	}
}
