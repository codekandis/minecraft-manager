'use strict';

import { AbstractBindable } from '../../../../libraries/jotunheim/Types/DataBindings/AbstractBindable.js';
import { PropertyChangedEvent } from '../../../../libraries/jotunheim/Types/DataBindings/PropertyChangedEvent.js';
import { SettingsPropertyNames } from '../../Settings/Enumerations/SettingsPropertyNames.js';
import { LanternPositionsPropertyNames } from '../Enumerations/LanternPositionsPropertyNames.js';
import { LanternPositionsCalculator } from './LanternPositionsCalculator.js';

/**
 * Represents the lantern positions.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class LanternPositions extends AbstractBindable
{
	/**
	 * Stores the applications' settings.
	 * @type {Settings}
	 */
	#_settings;

	/**
	 * Stores the position current X.
	 * @type {Number}
	 */
	#_currentX = 0;

	/**
	 * Stores the position current Y.
	 * @type {Number}
	 */
	#_currentY = 0;

	/**
	 * Stores the position current Z.
	 * @type {Number}
	 */
	#_currentZ = 0;

	/**
	 * Stores true if the position current X is valid, otherwise `false`.
	 * @type {Boolean}
	 */
	#_isCurrentXValid = false;

	/**
	 * Stores true if the position current Y is valid, otherwise `false`.
	 * @type {Boolean}
	 */
	#_isCurrentYValid = false;

	/**
	 * Stores true if the position current Z is valid, otherwise `false`.
	 * @type {Boolean}
	 */
	#_isCurrentZValid = false;

	/**
	 * Stores the calculated position X negative.
	 * @type {Number}
	 */
	#_calculatedPositionXNegative = 0;

	/**
	 * Stores the calculated position X positive.
	 * @type {Number}
	 */
	#_calculatedPositionXPositive = 0;

	/**
	 * Stores the calculated position Y negative.
	 * @type {Number}
	 */
	#_calculatedPositionYNegative = 0;

	/**
	 * Stores the calculated position Y positive.
	 * @type {Number}
	 */
	#_calculatedPositionYPositive = 0;

	/**
	 * Stores the calculated position Z negative.
	 * @type {Number}
	 */
	#_calculatedPositionZNegative = 0;

	/**
	 * Stores the calculated position Z positive.
	 * @type {Number}
	 */
	#_calculatedPositionZPositive = 0;

	/**
	 * Constructor method.
	 * @param {Settings} settings The applications' settings.
	 */
	constructor( settings )
	{
		super();

		this.#_settings = settings;

		this.#initialize();
	}

	/**
	 * Gets the position current X.
	 * @returns {Number} The position current X.
	 */
	get currentX()
	{
		return this.#_currentX;
	}

	/**
	 * Sets the position current X.
	 * @param {Number} value The position current X.
	 */
	set currentX( value )
	{
		this.#_currentX = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CURRENT_X );

		this.calculate();
	}

	/**
	 * Gets the position current Y.
	 * @returns {Number} The position current Y.
	 */
	get currentY()
	{
		return this.#_currentY;
	}

	/**
	 * Sets the position current Y.
	 * @param {Number} value The position current Y.
	 */
	set currentY( value )
	{
		this.#_currentY = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CURRENT_Y );

		this.calculate();
	}

	/**
	 * Gets the position current Z.
	 * @returns {Number} The position current Z.
	 */
	get currentZ()
	{
		return this.#_currentZ;
	}

	/**
	 * Sets the position current Z.
	 * @param {Number} value The position current Z.
	 */
	set currentZ( value )
	{
		this.#_currentZ = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CURRENT_Z );

		this.calculate();
	}

	/**
	 * Gets if the position current X is valid.
	 * @returns {Boolean} `true` if the position current X is valid, otherwise `false`.
	 */
	get isCurrentXValid()
	{
		return this.#_isCurrentXValid;
	}

	/**
	 * Sets if the position current X is valid.
	 * @param {Boolean} value `true` if the position current X is valid, otherwise `false`.
	 */
	set #isCurrentXValid( value )
	{
		this.#_isCurrentXValid = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.IS_CURRENT_X_VALID );
	}

	/**
	 * Gets if the position current Y is valid.
	 * @returns {Boolean} `true` if the position current Y is valid, otherwise `false`.
	 */
	get isCurrentYValid()
	{
		return this.#_isCurrentYValid;
	}

	/**
	 * Sets if the position current Y is valid.
	 * @param {Boolean} value `true` if the position current Y is valid, otherwise `false`.
	 */
	set #isCurrentYValid( value )
	{
		this.#_isCurrentYValid = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.IS_CURRENT_Y_VALID );
	}

	/**
	 * Gets if the position current Z is valid.
	 * @returns {Boolean} `true` if the position current Z is valid, otherwise `false`.
	 */
	get isCurrentZValid()
	{
		return this.#_isCurrentZValid;
	}

	/**
	 * Sets if the position current Z is valid.
	 * @param {Boolean} value `true` if the position current Z is valid, otherwise `false`.
	 */
	set #isCurrentZValid( value )
	{
		this.#_isCurrentZValid = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.IS_CURRENT_Z_VALID );
	}

	/**
	 * Gets the calculated position X negative.
	 * @returns {Number} The calculated position X negative.
	 */
	get calculatedPositionXNegative()
	{
		return this.#_calculatedPositionXNegative;
	}

	/**
	 * Sets the calculated position X negative.
	 * @param {Number} value The calculated position X negative.
	 */
	set #calculatedPositionXNegative( value )
	{
		this.#_calculatedPositionXNegative = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CALCULATED_POSITION_X_NEGATIVE );
	}

	/**
	 * Gets the calculated position X positive.
	 * @returns {Number} The calculated position X positive.
	 */
	get calculatedPositionXPositive()
	{
		return this.#_calculatedPositionXPositive;
	}

	/**
	 * Sets the calculated position X positive.
	 * @param {Number} value The calculated position X positive.
	 */
	set #calculatedPositionXPositive( value )
	{
		this.#_calculatedPositionXPositive = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CALCULATED_POSITION_X_POSITIVE );
	}

	/**
	 * Gets the calculated position Y negative.
	 * @returns {Number} The calculated position Y negative.
	 */
	get calculatedPositionYNegative()
	{
		return this.#_calculatedPositionYNegative;
	}

	/**
	 * Sets the calculated position Y negative.
	 * @param {Number} value The calculated position Y negative.
	 */
	set #calculatedPositionYNegative( value )
	{
		this.#_calculatedPositionYNegative = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CALCULATED_POSITION_Y_NEGATIVE );
	}

	/**
	 * Gets the calculated position Y positive.
	 * @returns {Number} The calculated position Y positive.
	 */
	get calculatedPositionYPositive()
	{
		return this.#_calculatedPositionYPositive;
	}

	/**
	 * Sets the calculated position Y positive.
	 * @param {Number} value The calculated position Y positive.
	 */
	set #calculatedPositionYPositive( value )
	{
		this.#_calculatedPositionYPositive = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CALCULATED_POSITION_Y_POSITIVE );
	}

	/**
	 * Gets the calculated position Z negative.
	 * @returns {Number} The calculated position Z negative.
	 */
	get calculatedPositionZNegative()
	{
		return this.#_calculatedPositionZNegative;
	}

	/**
	 * Sets the calculated position Z negative.
	 * @param {Number} value The calculated position Z negative.
	 */
	set #calculatedPositionZNegative( value )
	{
		this.#_calculatedPositionZNegative = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CALCULATED_POSITION_Z_NEGATIVE );
	}

	/**
	 * Gets the calculated position Z positive.
	 * @returns {Number} The calculated position Z positive.
	 */
	get calculatedPositionZPositive()
	{
		return this.#_calculatedPositionZPositive;
	}

	/**
	 * Sets the calculated position Z positive.
	 * @param {Number} value The calculated position Z positive.
	 */
	set #calculatedPositionZPositive( value )
	{
		this.#_calculatedPositionZPositive = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CALCULATED_POSITION_Z_POSITIVE );
	}

	/**
	 * Initializes the lantern positions.
	 */
	#initialize()
	{
		this.#_settings.propertyChangedEvent( this.#settings_propertyChanged );

		this.calculate();
	}

	/**
	 * Calculates the lantern positions.
	 */
	calculate()
	{
		const calculatedPositions = ( new LanternPositionsCalculator( this.#_settings ) )
			.calculate( this );

		this.#isCurrentXValid             = calculatedPositions.isCurrentXValid;
		this.#isCurrentYValid             = calculatedPositions.isCurrentYValid;
		this.#isCurrentZValid             = calculatedPositions.isCurrentZValid;
		this.#calculatedPositionXNegative = calculatedPositions.calculatedPositionXNegative;
		this.#calculatedPositionXPositive = calculatedPositions.calculatedPositionXPositive;
		this.#calculatedPositionYNegative = calculatedPositions.calculatedPositionYNegative;
		this.#calculatedPositionYPositive = calculatedPositions.calculatedPositionYPositive;
		this.#calculatedPositionZNegative = calculatedPositions.calculatedPositionZNegative;
		this.#calculatedPositionZPositive = calculatedPositions.calculatedPositionZPositive;
	}

	/**
	 * Handles the property changed event of the applications' settings.
	 * @param {PropertyChangedEvent} event The property changed event which will be handled.
	 */
	#settings_propertyChanged = ( event ) =>
	{
		switch ( event.detail.eventArguments.propertyName )
		{
			case SettingsPropertyNames.CHUNKSIZE:
			case SettingsPropertyNames.INITIAL_POSITION_X:
			case SettingsPropertyNames.INITIAL_POSITION_Y:
			case SettingsPropertyNames.INITIAL_POSITION_Z:
			{
				this.calculate();

				break;
			}
		}
	}
}
