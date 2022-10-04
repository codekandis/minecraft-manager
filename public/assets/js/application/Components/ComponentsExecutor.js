'use strict';

import Abstract from '../../library/Types/Abstract.js';

class ComponentsExecutor extends Abstract
{
	#_componentsClasses = undefined;

	constructor( ...componentsClasses )
	{
		super();

		this.#_componentsClasses = componentsClasses;
	}

	execute()
	{
		this.#_componentsClasses.forEach(
			( componentClass ) =>
			{
				( new componentClass() )
					.execute();
			}
		);
	}
}

export default ComponentsExecutor;
