'use strict';

import Abstract from '../../Types/Abstract.js';

class HttpRequestCreator extends Abstract
{
	#_requestCreatorDelegate = undefined;

	constructor( requestCreatorDelegate )
	{
		super();

		this.#_requestCreatorDelegate = requestCreatorDelegate;
	}

	create( uri )
	{
		return this.#_requestCreatorDelegate( uri );
	}
}

export default HttpRequestCreator;
