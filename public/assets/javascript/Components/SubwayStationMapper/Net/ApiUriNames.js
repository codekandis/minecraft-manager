'use strict';

import { AbstractStatic } from '../../../../libraries/jotunheim/Types/AbstractStatic.js';

/**
 * Represents the API URI names of the subway station mapper component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ApiUriNames extends AbstractStatic
{
	/**
	 * Represents the URI of the station positions.
	 * @returns {String} The URI of the station positions.
	 */
	static get STATION_POSITIONS()
	{
		return 'station-positions';
	}
}
