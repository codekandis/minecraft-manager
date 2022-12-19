'use strict';

import AbstractApiUriMappings from '../../../Net/AbstractApiUriMappings.js';
import ApiUriNames from './ApiUriNames.js';

class ApiUriMappings extends AbstractApiUriMappings
{
	__relativeUris = {
		[ ApiUriNames.SETTINGS ]: 'settings',
		[ ApiUriNames.SETTING ]:  'settings'
	};
}

export default ApiUriMappings;
