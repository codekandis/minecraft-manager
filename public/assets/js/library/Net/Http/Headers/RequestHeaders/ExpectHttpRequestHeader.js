'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class ExpectHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ExpectHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Expect';
	}
}
