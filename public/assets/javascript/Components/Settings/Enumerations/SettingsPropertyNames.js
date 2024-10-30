'use strict';

import { AbstractStatic } from '../../../../libraries/jotunheim/Types/AbstractStatic.js';

/**
 * Represents an enumeration of property names of the settings component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SettingsPropertyNames extends AbstractStatic
{
	/**
	 * Represents the property `chunkSize`.
	 * @returns {String} The property `chunkSize`.
	 */
	static get CHUNKSIZE()
	{
		return 'chunkSize';
	}
}
