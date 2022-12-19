'use strict';

import Abstract from '../Types/Abstract.js';

class AbstractUriBuilder extends Abstract
{
	#_uriMappings = undefined;

	constructor( uriMappings )
	{
		super();

		this.#_uriMappings = uriMappings;
	}

	build( uriName )
	{
		return new URL(
			String.format`${ 0 }://${ 1 }:${ 2 }${ 3 }${ 4 }`(
				this.#_uriMappings.schema,
				this.#_uriMappings.host,
				this.#_uriMappings.port,
				this.#_uriMappings.baseUri,
				this.#_uriMappings.getRelativeUri( uriName )
			)
		);
	}
}

export default AbstractUriBuilder;
