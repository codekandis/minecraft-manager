'use strict';

import { Abstract } from '../../libraries/jotunheim/Types/Abstract.js';

/**
 * Represents a components executor.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ComponentsExecutor extends Abstract
{
	/**
	 * Stores the components to execute.
	 * @type {AbstractComponent[]}
	 */
	#_components;

	/**
	 * Constructor method.
	 * @param {...AbstractComponent} components The components to execute.
	 */
	constructor( ...components )
	{
		super();

		this.#_components = components;
	}

	/**
	 * Executes the components.
	 */
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
