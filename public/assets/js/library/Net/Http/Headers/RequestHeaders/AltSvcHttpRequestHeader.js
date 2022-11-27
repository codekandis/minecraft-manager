'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class AltSvcHttpRequestHeader extends HttpRequestHeader
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

export default AltSvcHttpRequestHeader;
