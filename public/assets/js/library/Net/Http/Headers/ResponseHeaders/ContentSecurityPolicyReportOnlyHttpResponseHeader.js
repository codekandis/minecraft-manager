'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class ContentSecurityPolicyReportOnlyHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( ContentSecurityPolicyReportOnlyHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Content-Security-Policy-Report-Only';
	}
}
