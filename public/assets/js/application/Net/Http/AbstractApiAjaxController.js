'use strict';

import Abstract from '../../../library/Types/Abstract.js';

class AbstractApiAjaxController extends Abstract
{
	__uriBuilder = undefined;

	constructor( uriBuilder )
	{
		super();

		this.__uriBuilder = uriBuilder;
	}

	_createRequestPayload( obj )
	{
		return JSON.stringify( obj );
	}

	_createJsonResponse( payload )
	{
		return JSON.parse( payload );
	}
}

export default AbstractApiAjaxController;
