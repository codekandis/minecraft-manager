'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class UserAgentHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( UserAgentHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'User-Agent';
	}
}

export default UserAgentHttpRequestHeader;
