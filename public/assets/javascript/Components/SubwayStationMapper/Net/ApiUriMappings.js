'use strict';

import { AbstractApiUriMappings } from '../../../Net/AbstractApiUriMappings.js';
import { ApiUriNames } from './ApiUriNames.js';

/**
 * Represents the API URI mappings of the subway station mapper component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ApiUriMappings extends AbstractApiUriMappings
{
	/**
	 * @inheritDoc
	 */
	__relativeUriTemplates = {
		[ ApiUriNames.STATION_POSITIONS ]: String.format`subway-station-mapper/station-positions`
	};
}
