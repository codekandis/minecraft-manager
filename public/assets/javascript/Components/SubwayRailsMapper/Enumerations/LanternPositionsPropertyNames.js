'use strict';

import { AbstractStatic } from '../../../../libraries/jotunheim/Types/AbstractStatic.js';

/**
 * Represents an enumeration of property names of the lantern positions.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class LanternPositionsPropertyNames extends AbstractStatic
{
	/**
	 * Represents the property `currentX`.
	 * @returns {String} The property `currentX`.
	 */
	static get CURRENT_X()
	{
		return 'currentX';
	}

	/**
	 * Represents the property `isCurrentXValid`.
	 * @returns {String} The property `isCurrentXValid`.
	 */
	static get IS_CURRENT_X_VALID()
	{
		return 'isCurrentXValid';
	}

	/**
	 * Represents the property `currentY`.
	 * @returns {String} The property `currentY`.
	 */
	static get CURRENT_Y()
	{
		return 'currentY';
	}

	/**
	 * Represents the property `isCurrentYValid`.
	 * @returns {String} The property `isCurrentYValid`.
	 */
	static get IS_CURRENT_Y_VALID()
	{
		return 'isCurrentYValid';
	}

	/**
	 * Represents the property `currentZ`.
	 * @returns {String} The property `currentZ`.
	 */
	static get CURRENT_Z()
	{
		return 'currentZ';
	}

	/**
	 * Represents the property `isCurrentZValid`.
	 * @returns {String} The property `isCurrentZValid`.
	 */
	static get IS_CURRENT_Z_VALID()
	{
		return 'isCurrentZValid';
	}

	/**
	 * Represents the property `calculatedPositionXNegative`.
	 * @returns {String} The property `calculatedPositionXNegative`.
	 */
	static get CALCULATED_POSITION_X_NEGATIVE()
	{
		return 'calculatedPositionXNegative';
	}

	/**
	 * Represents the property `calculatedPositionXPositive`.
	 * @returns {String} The property `calculatedPositionXPositive`.
	 */
	static get CALCULATED_POSITION_X_POSITIVE()
	{
		return 'calculatedPositionXPositive';
	}

	/**
	 * Represents the property `calculatedPositionYNegative`.
	 * @returns {String} The property `calculatedPositionYNegative`.
	 */
	static get CALCULATED_POSITION_Y_NEGATIVE()
	{
		return 'calculatedPositionYNegative';
	}

	/**
	 * Represents the property `calculatedPositionYPositive`.
	 * @returns {String} The property `calculatedPositionYPositive`.
	 */
	static get CALCULATED_POSITION_Y_POSITIVE()
	{
		return 'calculatedPositionYPositive';
	}

	/**
	 * Represents the property `calculatedPositionZNegative`.
	 * @returns {String} The property `calculatedPositionZNegative`.
	 */
	static get CALCULATED_POSITION_Z_NEGATIVE()
	{
		return 'calculatedPositionZNegative';
	}

	/**
	 * Represents the property `calculatedPositionZPositive`.
	 * @returns {String} The property `calculatedPositionZPositive`.
	 */
	static get CALCULATED_POSITION_Z_POSITIVE()
	{
		return 'calculatedPositionZPositive';
	}
}
