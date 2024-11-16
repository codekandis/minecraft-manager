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
	 * Stores the initial position X.
	 * @type {Number}
	 */
	#_initialPositionX = 0;

	/**
	 * Stores the initial position Y.
	 * @type {Number}
	 */
	#_initialPositionY = 0;

	/**
	 * Stores the initial position Z.
	 * @type {Number}
	 */
	#_initialPositionZ = 0;

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

	/**
	 * Gets the initial position X.
	 * @returns {Number} The initial position X.
	 */
	get initialPositionX()
	{
		return this.#_initialPositionX;
	}

	/**
	 * Sets the initial position X.
	 * @param {Number} value The initial position X.
	 */
	set initialPositionX( value )
	{
		this.#_initialPositionX = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( SettingsPropertyNames.INITIAL_POSITION_X );
	}

	/**
	 * Gets the initial position Y.
	 * @returns {Number} The initial position Y.
	 */
	get initialPositionY()
	{
		return this.#_initialPositionY;
	}

	/**
	 * Sets the initial position Y.
	 * @param {Number} value The initial position Y.
	 */
	set initialPositionY( value )
	{
		this.#_initialPositionY = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( SettingsPropertyNames.INITIAL_POSITION_Y );
	}

	/**
	 * Gets the initial position Z.
	 * @returns {Number} The initial position Z.
	 */
	get initialPositionZ()
	{
		return this.#_initialPositionZ;
	}

	/**
	 * Sets the initial position Z.
	 * @param {Number} value The initial position Z.
	 */
	set initialPositionZ( value )
	{
		this.#_initialPositionZ = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( SettingsPropertyNames.INITIAL_POSITION_Z );
	}
}
