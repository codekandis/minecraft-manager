'use strict';

import Abstract from '../Types/Abstract.js';

class AbstractUriMappings extends Abstract
{
	__schema       = String.empty;
	__host         = String.empty;
	__port         = 0;
	__baseUri      = String.empty;
	__relativeUris = {};

	get schema()
	{
		return this.__schema;
	}

	get host()
	{
		return this.__host;
	}

	get port()
	{
		return this.__port;
	}

	get baseUri()
	{
		return this.__baseUri;
	}

	get relativeUris()
	{
		return this.__relativeUris;
	}

	getRelativeUri( uriName )
	{
		return this.__relativeUris[ uriName ];
	}
}

export default AbstractUriMappings;
