'use strict';

import Abstract from '../../../../library/Types/Abstract.js';
import PropertyNames from '../Enumerations/PropertyNames.js';

class LanternPositionsCalculator extends Abstract
{
	calculate( lanternPositions )
	{
		const calculatedValues = {};

		const differenceX = lanternPositions[ PropertyNames.CURRENT_POSITION_X ] - lanternPositions[ PropertyNames.START_POSITION_X ];
		const differenceY = lanternPositions[ PropertyNames.CURRENT_POSITION_Y ] - lanternPositions[ PropertyNames.START_POSITION_Y ];
		const differenceZ = lanternPositions[ PropertyNames.CURRENT_POSITION_Z ] - lanternPositions[ PropertyNames.START_POSITION_Z ];

		calculatedValues[ PropertyNames.IS_CURRENT_POSITION_X_VALID ] = 0 === differenceX % lanternPositions[ PropertyNames.CHUNKSIZE ];
		calculatedValues[ PropertyNames.IS_CURRENT_POSITION_Y_VALID ] = 0 === differenceY % lanternPositions[ PropertyNames.CHUNKSIZE ];
		calculatedValues[ PropertyNames.IS_CURRENT_POSITION_Z_VALID ] = 0 === differenceZ % lanternPositions[ PropertyNames.CHUNKSIZE ];

		for ( let n = 1; n <= lanternPositions[ PropertyNames.CHUNKSIZE ]; n++ )
		{
			if ( 0 === ( ( differenceX - n ) % lanternPositions[ PropertyNames.CHUNKSIZE ] ) )
			{
				calculatedValues[ PropertyNames.CALCULATED_POSITION_XN ] = lanternPositions[ PropertyNames.CURRENT_POSITION_X ] - n;
			}
			if ( 0 === ( ( differenceX + n ) % lanternPositions[ PropertyNames.CHUNKSIZE ] ) )
			{
				calculatedValues[ PropertyNames.CALCULATED_POSITION_XP ] = lanternPositions[ PropertyNames.CURRENT_POSITION_X ] + n;
			}
			if ( 0 === ( ( differenceY - n ) % lanternPositions[ PropertyNames.CHUNKSIZE ] ) )
			{
				calculatedValues[ PropertyNames.CALCULATED_POSITION_YN ] = lanternPositions[ PropertyNames.CURRENT_POSITION_Y ] - n;
			}
			if ( 0 === ( ( differenceY + n ) % lanternPositions[ PropertyNames.CHUNKSIZE ] ) )
			{
				calculatedValues[ PropertyNames.CALCULATED_POSITION_YP ] = lanternPositions[ PropertyNames.CURRENT_POSITION_Y ] + n;
			}
			if ( 0 === ( ( differenceZ - n ) % lanternPositions[ PropertyNames.CHUNKSIZE ] ) )
			{
				calculatedValues[ PropertyNames.CALCULATED_POSITION_ZN ] = lanternPositions[ PropertyNames.CURRENT_POSITION_Z ] - n;
			}
			if ( 0 === ( ( differenceZ + n ) % lanternPositions[ PropertyNames.CHUNKSIZE ] ) )
			{
				calculatedValues[ PropertyNames.CALCULATED_POSITION_ZP ] = lanternPositions[ PropertyNames.CURRENT_POSITION_Z ] + n;
			}
		}

		return calculatedValues;
	}
}

export default LanternPositionsCalculator;
