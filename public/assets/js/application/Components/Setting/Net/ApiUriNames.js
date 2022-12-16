'use strict';

import StaticAbstract from '../../../../library/Types/StaticAbstract.js';

class ApiUriNames extends StaticAbstract
{
	static get SETTINGS()
	{
		return 'settings';
	}

	static get SETTING()
	{
		return 'setting';
	}
}

export default ApiUriNames;
