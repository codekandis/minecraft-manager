'use strict';

import { AbstractUriMappings } from '../../library/Net/AbstractUriMappings.js';

/**
 * Represents the base class of any API URI mappings of the application.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractApiUriMappings extends AbstractUriMappings
{
	/**
	 * @inheritDoc
	 */
	__schema = 'https';

	/**
	 * @inheritDoc
	 */
	__host = 'minecraft-manager.codekandis';

	/**
	 * @inheritDoc
	 */
	__port = 443;

	/**
	 * @inheritDoc
	 */
	__baseUri = '/api/';
}
