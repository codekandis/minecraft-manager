'use strict';

import StaticAbstract from '../../../library/Types/StaticAbstract.js';

class Directions extends StaticAbstract
{
	static get NORTH()
	{
		return 'NORTH';
	}

	static get EAST()
	{
		return 'EAST';
	}

	static get SOUTH()
	{
		return 'SOUTH';
	}

	static get WEST()
	{
		return 'WEST';
	}
}

export default Directions;
