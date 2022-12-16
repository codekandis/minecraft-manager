'use strict';

import StaticAbstract from '../../../../library/Types/StaticAbstract.js';

class PropertyNames extends StaticAbstract
{
	static get START_POSITION_X()
	{
		return 'startPositionX';
	}

	static get START_POSITION_Y()
	{
		return 'startPositionY';
	}

	static get START_POSITION_Z()
	{
		return 'startPositionZ';
	}

	static get CURRENT_POSITION_X()
	{
		return 'currentPositionX';
	}

	static get IS_CURRENT_POSITION_X_VALID()
	{
		return 'isCurrentPositionXValid';
	}

	static get CURRENT_POSITION_Y()
	{
		return 'currentPositionY';
	}

	static get IS_CURRENT_POSITION_Y_VALID()
	{
		return 'isCurrentPositionYValid';
	}

	static get CURRENT_POSITION_Z()
	{
		return 'currentPositionZ';
	}

	static get IS_CURRENT_POSITION_Z_VALID()
	{
		return 'isCurrentPositionZValid';
	}

	static get CALCULATED_POSITION_XN()
	{
		return 'calculatedPositionXN';
	}

	static get CALCULATED_POSITION_XP()
	{
		return 'calculatedPositionXP';
	}

	static get CALCULATED_POSITION_YN()
	{
		return 'calculatedPositionYN';
	}

	static get CALCULATED_POSITION_YP()
	{
		return 'calculatedPositionYP';
	}

	static get CALCULATED_POSITION_ZN()
	{
		return 'calculatedPositionZN';
	}

	static get CALCULATED_POSITION_ZP()
	{
		return 'calculatedPositionZP';
	}
}

export default PropertyNames;
