'use strict';

import { AbstractBindable } from '../../../../libraries/jotunheim/Types/DataBindings/AbstractBindable.js';
import { PropertyNames } from '../Enumerations/PropertyNames.js';

/**
 * Represents the settings of the javascript.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class Settings extends AbstractBindable
{
	/**
	 * Stores the chunk size.
	 * @type {Number}
	 */
	[ '#_' + PropertyNames.CHUNKSIZE ] = 0;

	/**
	 * Gets the chunk size.
	 * @returns {Number} The chunksize.
	 */
	get [ PropertyNames.CHUNKSIZE ]()
	{
		return this[ '#_' + PropertyNames.CHUNKSIZE ];
	}

	/**
	 * Sets the chunk size.
	 * @param {Number} value The chunk size.
	 */
	set [ PropertyNames.CHUNKSIZE ]( value )
	{
		this[ '#_' + PropertyNames.CHUNKSIZE ] = Number.parseInt( value );

		this._dispatchPropertyChangedEvent( PropertyNames.CHUNKSIZE );
	}
}
