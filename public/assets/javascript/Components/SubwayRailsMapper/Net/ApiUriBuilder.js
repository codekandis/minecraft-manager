'use strict';

import { AbstractUriBuilder } from '../../../../libraries/jotunheim/Net/AbstractUriBuilder.js';
import { ApiUriMappings } from './ApiUriMappings.js';
import { ApiUriNames } from './ApiUriNames.js';

/**
 * Represents the API URI builder of the subway rails mapper component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ApiUriBuilder extends AbstractUriBuilder
{
	/**
	 * Constructor method.
	 */
	constructor()
	{
		super(
			new ApiUriMappings()
		);
	}

	/**
	 * Builds the URI of the lantern positions.
	 * @returns {URL} The URI of the lantern positions.
	 */
	buildLanternPositionsUri()
	{
		return this.build( ApiUriNames.LANTERN_POSITIONS );
	}
}
