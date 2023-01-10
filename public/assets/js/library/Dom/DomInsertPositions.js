'use strict';

import { StaticAbstract } from '../Types/StaticAbstract.js';

export class DomInsertPositions extends StaticAbstract
{
	static get BEFORE()
	{
		return 'BEFORE';
	}

	static get AFTER()
	{
		return 'AFTER';
	}
}
