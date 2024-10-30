'use strict';

import { Abstract } from '../../../../libraries/jotunheim/Types/Abstract.js';
import { SettingsPropertyNames } from '../../Settings/Enumerations/SettingsPropertyNames.js';
import { LanternPositionsPropertyNames } from '../Enumerations/LanternPositionsPropertyNames.js';
import { CalculatedLanternPositions } from './CalculatedLanternPositions.js';

/**
 * Represents a lantern positions calculator.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class LanternPositionsCalculator extends Abstract
{
	/**
	 * Stores the application's settings.
	 * @type {Settings}
	 */
	#_settings;

	/**
	 * Constructor method.
	 * @param {Settings} settings The application's settings.
	 */
	constructor( settings )
	{
		{
			super();

			this.#_settings = settings;
		}
	}

	/**
	 * Calculates the lantern positions.
	 * @param {LanternPositions} lanternPositions The actual lantern positions.
	 * @returns {CalculatedLanternPositions} The calculated lantern positions.
	 */
	calculate( lanternPositions )
	{
		const calculatedValues = new CalculatedLanternPositions();

		const differenceX = lanternPositions[ LanternPositionsPropertyNames.CURRENT_POSITION_X ] - lanternPositions[ LanternPositionsPropertyNames.START_POSITION_X ];
		const differenceY = lanternPositions[ LanternPositionsPropertyNames.CURRENT_POSITION_Y ] - lanternPositions[ LanternPositionsPropertyNames.START_POSITION_Y ];
		const differenceZ = lanternPositions[ LanternPositionsPropertyNames.CURRENT_POSITION_Z ] - lanternPositions[ LanternPositionsPropertyNames.START_POSITION_Z ];

		calculatedValues[ LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID ] = 0 === differenceX % this.#_settings[ SettingsPropertyNames.CHUNKSIZE ];
		calculatedValues[ LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID ] = 0 === differenceY % this.#_settings[ SettingsPropertyNames.CHUNKSIZE ];
		calculatedValues[ LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID ] = 0 === differenceZ % this.#_settings[ SettingsPropertyNames.CHUNKSIZE ];

		for ( let n = 1; n <= this.#_settings[ SettingsPropertyNames.CHUNKSIZE ]; n++ )
		{
			if ( 0 === ( ( differenceX - n ) % this.#_settings[ SettingsPropertyNames.CHUNKSIZE ] ) )
			{
				calculatedValues[ LanternPositionsPropertyNames.CALCULATED_POSITION_X_NEGATIVE ] = lanternPositions[ LanternPositionsPropertyNames.CURRENT_POSITION_X ] - n;
			}
			if ( 0 === ( ( differenceX + n ) % this.#_settings[ SettingsPropertyNames.CHUNKSIZE ] ) )
			{
				calculatedValues[ LanternPositionsPropertyNames.CALCULATED_POSITION_X_POSITIVE ] = lanternPositions[ LanternPositionsPropertyNames.CURRENT_POSITION_X ] + n;
			}
			if ( 0 === ( ( differenceY - n ) % this.#_settings[ SettingsPropertyNames.CHUNKSIZE ] ) )
			{
				calculatedValues[ LanternPositionsPropertyNames.CALCULATED_POSITION_Y_NEGATIVE ] = lanternPositions[ LanternPositionsPropertyNames.CURRENT_POSITION_Y ] - n;
			}
			if ( 0 === ( ( differenceY + n ) % this.#_settings[ SettingsPropertyNames.CHUNKSIZE ] ) )
			{
				calculatedValues[ LanternPositionsPropertyNames.CALCULATED_POSITION_Y_POSITIVE ] = lanternPositions[ LanternPositionsPropertyNames.CURRENT_POSITION_Y ] + n;
			}
			if ( 0 === ( ( differenceZ - n ) % this.#_settings[ SettingsPropertyNames.CHUNKSIZE ] ) )
			{
				calculatedValues[ LanternPositionsPropertyNames.CALCULATED_POSITION_Z_NEGATIVE ] = lanternPositions[ LanternPositionsPropertyNames.CURRENT_POSITION_Z ] - n;
			}
			if ( 0 === ( ( differenceZ + n ) % this.#_settings[ SettingsPropertyNames.CHUNKSIZE ] ) )
			{
				calculatedValues[ LanternPositionsPropertyNames.CALCULATED_POSITION_Z_POSITIVE ] = lanternPositions[ LanternPositionsPropertyNames.CURRENT_POSITION_Z ] + n;
			}
		}

		return calculatedValues;
	}
}
