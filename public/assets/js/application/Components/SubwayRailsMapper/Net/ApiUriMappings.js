'use strict';

import AbstractApiUriMappings from '../../../Net/AbstractApiUriMappings.js';
import ApiUriNames from './ApiUriNames.js';

class ApiUriMappings extends AbstractApiUriMappings
{
	__relativeUris = {
		[ ApiUriNames.SUBWAY_RAILS_MAPPERS ]: 'subway-rails-mappers',
		[ ApiUriNames.SUBWAY_RAILS_MAPPER ]:  'subway-rails-mappers'
	};
}

export default ApiUriMappings;
