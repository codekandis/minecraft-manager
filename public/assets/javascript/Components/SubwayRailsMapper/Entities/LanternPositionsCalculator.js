'use strict';

import { Abstract } from '../../../../libraries/jotunheim/Types/Abstract.js';
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

		const differenceX = lanternPositions.currentPositionX - lanternPositions.startPositionX;
		const differenceY = lanternPositions.currentPositionY - lanternPositions.startPositionY;
		const differenceZ = lanternPositions.currentPositionZ - lanternPositions.startPositionZ;

		calculatedValues.isCurrentPositionXValid = 0 === differenceX % this.#_settings.chunksize;
		calculatedValues.isCurrentPositionYValid = 0 === differenceY % this.#_settings.chunksize;
		calculatedValues.isCurrentPositionZValid = 0 === differenceZ % this.#_settings.chunksize;

		for ( let n = 1; n <= this.#_settings.chunksize; n++ )
		{
			if ( 0 === ( ( differenceX - n ) % this.#_settings.chunksize ) )
			{
				calculatedValues.calculatedPositionXNegative = lanternPositions.currentPositionX - n;
			}
			if ( 0 === ( ( differenceX + n ) % this.#_settings.chunksize ) )
			{
				calculatedValues.calculatedPositionXPositive = lanternPositions.currentPositionX + n;
			}
			if ( 0 === ( ( differenceY - n ) % this.#_settings.chunksize ) )
			{
				calculatedValues.calculatedPositionYNegative = lanternPositions.currentPositionY - n;
			}
			if ( 0 === ( ( differenceY + n ) % this.#_settings.chunksize ) )
			{
				calculatedValues.calculatedPositionYPositive = lanternPositions.currentPositionY + n;
			}
			if ( 0 === ( ( differenceZ - n ) % this.#_settings.chunksize ) )
			{
				calculatedValues.calculatedPositionZNegative = lanternPositions.currentPositionZ - n;
			}
			if ( 0 === ( ( differenceZ + n ) % this.#_settings.chunksize ) )
			{
				calculatedValues.calculatedPositionZPositive = lanternPositions.currentPositionZ + n;
			}
		}

		return calculatedValues;
	}
}
