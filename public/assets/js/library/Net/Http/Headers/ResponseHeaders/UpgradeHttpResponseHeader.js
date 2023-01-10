'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class UpgradeHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( UpgradeHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Upgrade';
	}
}
