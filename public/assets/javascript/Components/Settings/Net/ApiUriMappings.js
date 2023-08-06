'use strict';

import { AbstractApiUriMappings } from '../../../Net/AbstractApiUriMappings.js';
import { ApiUriNames } from './ApiUriNames.js';

/**
 * Represents the API URI mappings of the settings component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ApiUriMappings extends AbstractApiUriMappings
{
	/**
	 * @inheritDoc
	 */
	__relativeUriTemplates = {
		[ ApiUriNames.SETTINGS ]: String.format`settings/settings`
	};
}
