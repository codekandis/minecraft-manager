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
	 * Stores the start position X.
	 * @type {Number}
	 */
	#_startPositionX = 0;

	/**
	 * Stores the start position Y.
	 * @type {Number}
	 */
	#_startPositionY = 0;

	/**
	 * Stores the start position Z.
	 * @type {Number}
	 */
	#_startPositionZ = 0;

	/**
	 * Stores the current position X.
	 * @type {Number}
	 */
	#_currentPositionX = 0;

	/**
	 * Stores the current position Y.
	 * @type {Number}
	 */
	#_currentPositionY = 0;

	/**
	 * Stores the current position Z.
	 * @type {Number}
	 */
	#_currentPositionZ = 0;

	/**
	 * Stores true if the current position X is valid, otherwise `false`.
	 * @type {Boolean}
	 */
	#_isCurrentPositionXValid = false;

	/**
	 * Stores true if the current position Y is valid, otherwise `false`.
	 * @type {Boolean}
	 */
	#_isCurrentPositionYValid = false;

	/**
	 * Stores true if the current position Z is valid, otherwise `false`.
	 * @type {Boolean}
	 */
	#_isCurrentPositionZValid = false;

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
	 * Gets the start position X.
	 * @returns {Number} The start position X.
	 */
	get startPositionX()
	{
		return this.#_startPositionX;
	}

	/**
	 * Sets the start position X.
	 * @param {Number} value The start position X.
	 */
	set startPositionX( value )
	{
		this.#_startPositionX = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.START_POSITION_X );

		this.calculate();
	}

	/**
	 * Gets the start position Y.
	 * @returns {Number} The start position Y.
	 */
	get startPositionY()
	{
		return this.#_startPositionY;
	}

	/**
	 * Sets the start position Y.
	 * @param {Number} value The start position Y.
	 */
	set startPositionY( value )
	{
		this.#_startPositionY = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.START_POSITION_Y );

		this.calculate();
	}

	/**
	 * Gets the start position Z.
	 * @returns {Number} The start position Z.
	 */
	get startPositionZ()
	{
		return this.#_startPositionZ;
	}

	/**
	 * Sets the start position Z.
	 * @param {Number} value The start position Z.
	 */
	set startPositionZ( value )
	{
		this.#_startPositionZ = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.START_POSITION_Z );

		this.calculate();
	}

	/**
	 * Gets the current position X.
	 * @returns {Number} The current position X.
	 */
	get currentPositionX()
	{
		return this.#_currentPositionX;
	}

	/**
	 * Sets the current position X.
	 * @param {Number} value The current position X.
	 */
	set currentPositionX( value )
	{
		this.#_currentPositionX = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CURRENT_POSITION_X );

		this.calculate();
	}

	/**
	 * Gets the current position Y.
	 * @returns {Number} The current position Y.
	 */
	get currentPositionY()
	{
		return this.#_currentPositionY;
	}

	/**
	 * Sets the current position Y.
	 * @param {Number} value The current position Y.
	 */
	set currentPositionY( value )
	{
		this.#_currentPositionY = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CURRENT_POSITION_Y );

		this.calculate();
	}

	/**
	 * Gets the current position Z.
	 * @returns {Number} The current position Z.
	 */
	get currentPositionZ()
	{
		return this.#_currentPositionZ;
	}

	/**
	 * Sets the current position Z.
	 * @param {Number} value The current position Z.
	 */
	set currentPositionZ( value )
	{
		this.#_currentPositionZ = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CURRENT_POSITION_Z );

		this.calculate();
	}

	/**
	 * Gets if the current position X is valid.
	 * @returns {Boolean} `true` if the current position X is valid, otherwise `false`.
	 */
	get isCurrentPositionXValid()
	{
		return this.#_isCurrentPositionXValid;
	}

	/**
	 * Sets if the current position X is valid.
	 * @param {Boolean} value `true` if the current position X is valid, otherwise `false`.
	 */
	set #isCurrentPositionXValid( value )
	{
		this.#_isCurrentPositionXValid = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID );
	}

	/**
	 * Gets if the current position Y is valid.
	 * @returns {Boolean} `true` if the current position Y is valid, otherwise `false`.
	 */
	get isCurrentPositionYValid()
	{
		return this.#_isCurrentPositionYValid;
	}

	/**
	 * Sets if the current position Y is valid.
	 * @param {Boolean} value `true` if the current position Y is valid, otherwise `false`.
	 */
	set #isCurrentPositionYValid( value )
	{
		this.#_isCurrentPositionYValid = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID );
	}

	/**
	 * Gets if the current position Z is valid.
	 * @returns {Boolean} `true` if the current position Z is valid, otherwise `false`.
	 */
	get isCurrentPositionZValid()
	{
		return this.#_isCurrentPositionZValid;
	}

	/**
	 * Sets if the current position Z is valid.
	 * @param {Boolean} value `true` if the current position Z is valid, otherwise `false`.
	 */
	set #isCurrentPositionZValid( value )
	{
		this.#_isCurrentPositionZValid = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID );
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

		this.#isCurrentPositionXValid     = calculatedPositions.isCurrentPositionXValid;
		this.#isCurrentPositionYValid     = calculatedPositions.isCurrentPositionYValid;
		this.#isCurrentPositionZValid     = calculatedPositions.isCurrentPositionZValid;
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
			{
				this.calculate();

				break;
			}
		}
	}
}
