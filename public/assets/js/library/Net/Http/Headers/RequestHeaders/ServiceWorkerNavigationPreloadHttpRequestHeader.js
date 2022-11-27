'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class ServiceWorkerNavigationPreloadHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( ServiceWorkerNavigationPreloadHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Service-Worker-Navigation-Preload';
	}
}

export default ServiceWorkerNavigationPreloadHttpRequestHeader;
