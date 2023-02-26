'use strict';

import { AbstractStatic } from '../../../../libraries/jotunheim/Types/AbstractStatic.js';

/**
 * Represents the API URI names of the settings component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ApiUriNames extends AbstractStatic
{
	/**
	 * Represents the URI of the settings of the javascript.
	 * @returns {String} The URI of the settings of the javascript.
	 */
	static get SETTINGS()
	{
		return 'settings';
	}
}
