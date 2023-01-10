'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ExpectCtHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ExpectCtHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Expect-CT';
	}
}
