'use strict';

import { AbstractStatic } from '../../../../libraries/jotunheim/Types/AbstractStatic.js';

/**
 * Represents the API URI names of the settings component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ApiUriNames extends AbstractStatic
{
	/**
	 * Represents the URI name of the applications' settings.
	 * @returns {String} The URI name of the applications' settings.
	 */
	static get SETTINGS()
	{
		return 'settings';
	}
}
