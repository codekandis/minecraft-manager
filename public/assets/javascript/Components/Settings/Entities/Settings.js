'use strict';

import { AbstractBindable } from '../../../../libraries/jotunheim/Types/DataBindings/AbstractBindable.js';
import { SettingsPropertyNames } from '../Enumerations/SettingsPropertyNames.js';

/**
 * Represents the applications' settings.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class Settings extends AbstractBindable
{
	/**
	 * Stores the chunk size.
	 * @type {Number}
	 */
	#_chunkSize = 0;

	/**
	 * Gets the chunk size.
	 * @returns {Number} The chunk size.
	 */
	get chunkSize()
	{
		return this.#_chunkSize;
	}

	/**
	 * Sets the chunk size.
	 * @param {Number} value The chunk size.
	 */
	set chunkSize( value )
	{
		this.#_chunkSize = Number.parseInt( value );

		this._dispatchPropertyChangedEvent( SettingsPropertyNames.CHUNKSIZE );
	}
}
