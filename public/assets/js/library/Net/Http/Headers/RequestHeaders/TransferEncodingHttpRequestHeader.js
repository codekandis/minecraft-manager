'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class TransferEncodingHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( TransferEncodingHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Transfer-Encoding';
	}
}

export default TransferEncodingHttpRequestHeader;
