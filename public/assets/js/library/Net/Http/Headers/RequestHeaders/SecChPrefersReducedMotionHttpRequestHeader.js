'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

export class SecChPrefersReducedMotionHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SecChPrefersReducedMotionHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Sec-CH-Prefers-Reduced-Motion';
	}
}
