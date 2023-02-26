'use strict';

import { AbstractStatic } from '../../../../libraries/jotunheim/Types/AbstractStatic.js';

/**
 * Represents the API URI names of the subway rails mapper component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ApiUriNames extends AbstractStatic
{
	/**
	 * Represents the URI of the lantern positions.
	 * @returns {String} The URI of the lantern positions.
	 */
	static get LANTERN_POSITIONS()
	{
		return 'lantern-positions';
	}
}
