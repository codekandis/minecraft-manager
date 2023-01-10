'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class TransferEncodingHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( TransferEncodingHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Transfer-Encoding';
	}
}
