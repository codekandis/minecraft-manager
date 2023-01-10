'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class TeHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( TeHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'TE';
	}
}
