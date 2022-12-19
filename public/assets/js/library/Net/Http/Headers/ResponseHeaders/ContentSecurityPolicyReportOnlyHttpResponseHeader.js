'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class ContentSecurityPolicyReportOnlyHttpResponseHeader extends HttpResponseHeader
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

export default ContentSecurityPolicyReportOnlyHttpResponseHeader;
