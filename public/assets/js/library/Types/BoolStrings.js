'use strict';

import StaticAbstract from './StaticAbstract.js';

class BoolStrings extends StaticAbstract
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

export default BoolStrings;
