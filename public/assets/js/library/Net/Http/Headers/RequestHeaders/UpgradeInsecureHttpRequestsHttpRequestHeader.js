'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class UpgradeInsecureHttpRequestsHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( UpgradeInsecureHttpRequestsHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Upgrade-Insecure-HttpRequests';
	}
}
