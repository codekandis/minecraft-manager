'use strict';

import Abstract from '../../library/Types/Abstract.js';

class ComponentsExecutor extends Abstract
{
	#_components = undefined;

	constructor( ...components )
	{
		super();

		this.#_components = components;
	}

	execute()
	{
		this.#_components.forEach(
			( component ) =>
			{
				component.execute();
			}
		);
	}
}

export default ComponentsExecutor;
