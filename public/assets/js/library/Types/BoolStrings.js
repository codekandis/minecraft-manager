'use strict';

import { StaticAbstract } from './StaticAbstract.js';

export class BoolStrings extends StaticAbstract
{
	static get FALSE()
	{
		return 'FALSE';
	}

	static get TRUE()
	{
		return 'TRUE';
	}
}
