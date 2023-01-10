'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class UpgradeHttpRequestHeader extends HttpRequestHeader
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
