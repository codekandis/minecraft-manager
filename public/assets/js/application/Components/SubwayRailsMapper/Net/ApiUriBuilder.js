'use strict';

import AbstractUriBuilder from '../../../../library/Net/AbstractUriBuilder.js';
import ApiUriMappings from './ApiUriMappings.js';
import ApiUriNames from './ApiUriNames.js';

class ApiUriBuilder extends AbstractUriBuilder
{
	constructor()
	{
		super(
			new ApiUriMappings()
		);
	}

	buildSubwayRailsMappersUri()
	{
		return this.build( ApiUriNames.SUBWAY_RAILS_MAPPERS );
	}

	buildSubwayRailsMapperUri()
	{
		return this.build( ApiUriNames.SUBWAY_RAILS_MAPPER );
	}
}

export default ApiUriBuilder;
