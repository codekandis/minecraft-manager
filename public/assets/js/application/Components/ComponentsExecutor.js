'use strict';

import { Abstract } from '../../library/Types/Abstract.js';

export class ComponentsExecutor extends Abstract
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
