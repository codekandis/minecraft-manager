'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class SaveDataHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SaveDataHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Save-Data';
	}
}
