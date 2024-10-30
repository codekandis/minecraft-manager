'use strict';

import { AbstractBindable } from '../../../../libraries/jotunheim/Types/DataBindings/AbstractBindable.js';
import { SettingsPropertyNames } from '../Enumerations/SettingsPropertyNames.js';

/**
 * Represents the application's settings.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class Settings extends AbstractBindable
{
	/**
	 * Stores the chunk size.
	 * @type {Number}
	 */
	#_chunksize = 0;

	/**
	 * Gets the chunk size.
	 * @returns {Number} The chunk size.
	 */
	get chunksize()
	{
		return this.#_chunksize;
	}

	/**
	 * Sets the chunk size.
	 * @param {Number} value The chunk size.
	 */
	set chunksize( value )
	{
		this.#_chunksize = Number.parseInt( value );

		this._dispatchPropertyChangedEvent( SettingsPropertyNames.CHUNKSIZE );
	}
}
