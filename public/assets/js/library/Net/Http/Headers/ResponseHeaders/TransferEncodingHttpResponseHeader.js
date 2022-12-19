'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class TransferEncodingHttpResponseHeader extends HttpResponseHeader
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

export default TransferEncodingHttpResponseHeader;
