'use strict';

import { AbstractStatic } from '../../../../libraries/jotunheim/Types/AbstractStatic.js';

/**
 * Represents an enumeration of property names of the settings component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SettingsPropertyNames extends AbstractStatic
{
	/**
	 * Represents the property `chunksize`.
	 * @returns {String} The property `chunksize`.
	 */
	static get CHUNKSIZE()
	{
		return 'chunksize';
	}
}
