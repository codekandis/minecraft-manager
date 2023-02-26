'use strict';

import { AbstractApiUriMappings } from '../../../Net/AbstractApiUriMappings.js';
import { ApiUriNames } from './ApiUriNames.js';

/**
 * Represents the API URI mappings of the subway rails mapper component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ApiUriMappings extends AbstractApiUriMappings
{
	/**
	 * @inheritDoc
	 */
	__relativeUris = {
		[ ApiUriNames.LANTERN_POSITIONS ]: 'subway-rails-mapper/lantern-positions'
	};
}
