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
	 * Stores the applications' settings.
	 * @type {Settings}
	 */
	#_settings;

	/**
	 * Constructor method.
	 * @param {Settings} settings The applications' settings.
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
		const calculatedLanternPositions = new CalculatedLanternPositions();

		const differenceX = lanternPositions.currentX - this.#_settings.initialPositionX;
		const differenceY = lanternPositions.currentY - this.#_settings.initialPositionY;
		const differenceZ = lanternPositions.currentZ - this.#_settings.initialPositionZ;

		calculatedLanternPositions.isCurrentXValid = 0 === differenceX % this.#_settings.chunkSize;
		calculatedLanternPositions.isCurrentYValid = 0 === differenceY % this.#_settings.chunkSize;
		calculatedLanternPositions.isCurrentZValid = 0 === differenceZ % this.#_settings.chunkSize;

		for ( let n = 1; n <= this.#_settings.chunkSize; n++ )
		{
			if ( 0 === ( ( differenceX - n ) % this.#_settings.chunkSize ) )
			{
				calculatedLanternPositions.calculatedPositionXNegative = lanternPositions.currentX - n;
			}
			if ( 0 === ( ( differenceX + n ) % this.#_settings.chunkSize ) )
			{
				calculatedLanternPositions.calculatedPositionXPositive = lanternPositions.currentX + n;
			}
			if ( 0 === ( ( differenceY - n ) % this.#_settings.chunkSize ) )
			{
				calculatedLanternPositions.calculatedPositionYNegative = lanternPositions.currentY - n;
			}
			if ( 0 === ( ( differenceY + n ) % this.#_settings.chunkSize ) )
			{
				calculatedLanternPositions.calculatedPositionYPositive = lanternPositions.currentY + n;
			}
			if ( 0 === ( ( differenceZ - n ) % this.#_settings.chunkSize ) )
			{
				calculatedLanternPositions.calculatedPositionZNegative = lanternPositions.currentZ - n;
			}
			if ( 0 === ( ( differenceZ + n ) % this.#_settings.chunkSize ) )
			{
				calculatedLanternPositions.calculatedPositionZPositive = lanternPositions.currentZ + n;
			}
		}

		return calculatedLanternPositions;
	}
}
