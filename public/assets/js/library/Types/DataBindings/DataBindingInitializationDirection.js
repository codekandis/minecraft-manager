'use strict';

import { AbstractStatic } from '../AbstractStatic.js';

/**
 * Stores an enumeration of initial data binding directions.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DataBindingInitializationDirection extends AbstractStatic
{
	/**
	 * Specifies that the binder's property is the initial value.
	 * @returns {String} The binder's property is the initial value.
	 */
	static get BINDER()
	{
		return 'BINDER';
	}

	/**
	 * Specifies that the bindable's property is the initial value.
	 * @returns {String} The bindable's property is the initial value.
	 */
	static get BINDABLE()
	{
		return 'BINDABLE';
	}
}
