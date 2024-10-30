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
	[ '#_' + SettingsPropertyNames.CHUNKSIZE ] = 0;

	/**
	 * Gets the chunk size.
	 * @returns {Number} The chunk size.
	 */
	get [ SettingsPropertyNames.CHUNKSIZE ]()
	{
		return this[ '#_' + SettingsPropertyNames.CHUNKSIZE ];
	}

	/**
	 * Sets the chunk size.
	 * @param {Number} value The chunk size.
	 */
	set [ SettingsPropertyNames.CHUNKSIZE ]( value )
	{
		this[ '#_' + SettingsPropertyNames.CHUNKSIZE ] = Number.parseInt( value );

		this._dispatchPropertyChangedEvent( SettingsPropertyNames.CHUNKSIZE );
	}
}
