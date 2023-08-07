'use strict';

import { AbstractUriMappings } from '../../libraries/jotunheim/Net/AbstractUriMappings.js';

/**
 * Represents the base class of any API URI mappings of the application.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractApiUriMappings extends AbstractUriMappings
{
	/**
	 * Constructor method.
	 */
	constructor()
	{
		super();

		const currentUri = new URL( document.location.href );
		const protocol   = currentUri.protocol.trimStringsFromEnd( ':' );

		this.__schema  = protocol;
		this.__host    = currentUri.host;
		this.__port    = 'https' === protocol
			? 443
			: 80;
		this.__baseUri = '/api/';
	}
}
