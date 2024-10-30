'use strict';

import { Abstract } from '../../../../libraries/jotunheim/Types/Abstract.js';
import { LanternPositionsPropertyNames } from '../Enumerations/LanternPositionsPropertyNames.js';

/**
 * Represents the calculated lantern positions.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class CalculatedLanternPositions extends Abstract
{
	/**
	 * Stores true if the current position X is valid, otherwise `false`.
	 * @type {Boolean}
	 */
	[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID ];

	/**
	 * Stores true if the current position Y is valid, otherwise `false`.
	 * @type {Boolean}
	 */
	[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID ];

	/**
	 * Stores true if the current position Z is valid, otherwise `false`.
	 * @type {Boolean}
	 */
	[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID ];

	/**
	 * Stores the calculated position X negative.
	 * @type {Number}
	 */
	[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_X_NEGATIVE ];

	/**
	 * Stores the calculated position X positive.
	 * @type {Number}
	 */
	[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_X_POSITIVE ];

	/**
	 * Stores the calculated position Y negative.
	 * @type {Number}
	 */
	[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Y_NEGATIVE ];

	/**
	 * Stores the calculated position Y positive.
	 * @type {Number}
	 */
	[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Y_POSITIVE ];

	/**
	 * Stores the calculated position Z negative.
	 * @type {Number}
	 */
	[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Z_NEGATIVE ];

	/**
	 * Stores the calculated position Z positive.
	 * @type {Number}
	 */
	[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Z_POSITIVE ];

	/**
	 * Gets if the current position X is valid.
	 * @returns {Boolean} `true` if the current position X is valid, otherwise `false`.
	 */
	get [ LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID ];
	}

	/**
	 * Sets if the current position X is valid.
	 * @param {Boolean} value `true` if the current position X is valid, otherwise `false`.
	 */
	set [ LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID ] = value;
	}

	/**
	 * Gets if the current position Y is valid.
	 * @returns {Boolean} `true` if the current position Y is valid, otherwise `false`.
	 */
	get [ LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID ];
	}

	/**
	 * Sets if the current position Y is valid.
	 * @param {Boolean} value `true` if the current position Y is valid, otherwise `false`.
	 */
	set [ LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID ] = value;
	}

	/**
	 * Gets if the current position Z is valid.
	 * @returns {Boolean} `true` if the current position Z is valid, otherwise `false`.
	 */
	get [ LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID ];
	}

	/**
	 * Sets if the current position Z is valid.
	 * @param {Boolean} value `true` if the current position Z is valid, otherwise `false`.
	 */
	set [ LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID ] = value;
	}

	/**
	 * Gets the calculated position X negative.
	 * @returns {Number} The calculated position X negative.
	 */
	get [ LanternPositionsPropertyNames.CALCULATED_POSITION_X_NEGATIVE ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_X_NEGATIVE ];
	}

	/**
	 * Sets the calculated position X negative.
	 * @param {Number} value The calculated position X negative.
	 */
	set [ LanternPositionsPropertyNames.CALCULATED_POSITION_X_NEGATIVE ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_X_NEGATIVE ] = value;
	}

	/**
	 * Gets the calculated position X positive.
	 * @returns {Number} The calculated position X positive.
	 */
	get [ LanternPositionsPropertyNames.CALCULATED_POSITION_X_POSITIVE ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_X_POSITIVE ];
	}

	/**
	 * Sets the calculated position X positive.
	 * @param {Number} value The calculated position X positive.
	 */
	set [ LanternPositionsPropertyNames.CALCULATED_POSITION_X_POSITIVE ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_X_POSITIVE ] = value;
	}

	/**
	 * Gets the calculated position Y negative.
	 * @returns {Number} The calculated position Y negative.
	 */
	get [ LanternPositionsPropertyNames.CALCULATED_POSITION_Y_NEGATIVE ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Y_NEGATIVE ];
	}

	/**
	 * Sets the calculated position Y negative.
	 * @param {Number} value The calculated position Y negative.
	 */
	set [ LanternPositionsPropertyNames.CALCULATED_POSITION_Y_NEGATIVE ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Y_NEGATIVE ] = value;
	}

	/**
	 * Gets the calculated position Y positive.
	 * @returns {Number} The calculated position y positive.
	 */
	get [ LanternPositionsPropertyNames.CALCULATED_POSITION_Y_POSITIVE ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Y_POSITIVE ];
	}

	/**
	 * Sets the calculated position Y positive.
	 * @param {Number} value The calculated position Y positive.
	 */
	set [ LanternPositionsPropertyNames.CALCULATED_POSITION_Y_POSITIVE ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Y_POSITIVE ] = value;
	}

	/**
	 * Gets the calculated position Z negative.
	 * @returns {Number} The calculated position Z negative.
	 */
	get [ LanternPositionsPropertyNames.CALCULATED_POSITION_Z_NEGATIVE ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Z_NEGATIVE ];
	}

	/**
	 * Sets the calculated position Z negative.
	 * @param {Number} value The calculated position Z negative.
	 */
	set [ LanternPositionsPropertyNames.CALCULATED_POSITION_Z_NEGATIVE ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Z_NEGATIVE ] = value;
	}

	/**
	 * Gets the calculated position Z positive.
	 * @returns {Number} The calculated position Z positive.
	 */
	get [ LanternPositionsPropertyNames.CALCULATED_POSITION_Z_POSITIVE ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Z_POSITIVE ];
	}

	/**
	 * Sets the calculated position Z positive.
	 * @param {Number} value The calculated position Z positive.
	 */
	set [ LanternPositionsPropertyNames.CALCULATED_POSITION_Z_POSITIVE ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Z_POSITIVE ] = value;
	}
}
