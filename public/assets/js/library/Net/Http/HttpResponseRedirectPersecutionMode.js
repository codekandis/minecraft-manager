'use strict';

import { StaticAbstract } from '../../Types/StaticAbstract.js';

export class HttpResponseRedirectPersecutionMode extends StaticAbstract
{
	static get NONE()
	{
		return 'none';
	}

	static get STRICT()
	{
		return 'strict';
	}

	static get LAX()
	{
		return 'lax';
	}
}
