'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class UpgradeHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( UpgradeHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Upgrade';
	}
}

export default UpgradeHttpRequestHeader;
