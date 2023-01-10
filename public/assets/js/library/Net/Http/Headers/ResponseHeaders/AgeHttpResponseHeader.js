'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class AgeHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( AgeHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Age';
	}
}
