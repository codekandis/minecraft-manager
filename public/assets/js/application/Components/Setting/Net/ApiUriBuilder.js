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

	buildSettingsUri()
	{
		return this.build( ApiUriNames.SETTINGS );
	}

	buildSettingUri()
	{
		return this.build( ApiUriNames.SETTING );
	}
}

export default ApiUriBuilder;
