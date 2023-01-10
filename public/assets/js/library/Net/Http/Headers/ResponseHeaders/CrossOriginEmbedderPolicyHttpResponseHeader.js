'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

export class CrossOriginEmbedderPolicyHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( CrossOriginEmbedderPolicyHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Cross-Origin-Embedder-Policy';
	}
}
