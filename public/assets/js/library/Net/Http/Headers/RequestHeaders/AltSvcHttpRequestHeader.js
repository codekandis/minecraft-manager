'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class AltSvcHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( AltSvcHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Alt-Svc';
	}
}
