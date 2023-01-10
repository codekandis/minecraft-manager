'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class DeviceMemoryHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( DeviceMemoryHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Device-Memory';
	}
}
