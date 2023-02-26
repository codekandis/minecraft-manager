'use strict';

import { AbstractBindable } from '../../../../libraries/jotunheim/Types/DataBindings/AbstractBindable.js';
import { PropertyChangedEvent } from '../../../../libraries/jotunheim/Types/DataBindings/PropertyChangedEvent.js';
import { PropertyNames as SettingPropertyNames } from '../../Settings/Enumerations/PropertyNames.js';
import { LanternPositionsPropertyNames } from '../Enumerations/LanternPositionsPropertyNames.js';
import { LanternPositionsCalculator } from './LanternPositionsCalculator.js';

/**
 * Represents the lantern positions.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class LanternPositions extends AbstractBindable
{
	/**
	 * Stores the settings of the javascript.
	 * @type {Settings}
	 */
	#_settings;

	/**
	 * Stores the start position X.
	 * @type {Number}
	 */
	[ '#_' + LanternPositionsPropertyNames.START_POSITION_X ] = 0;

	/**
	 * Stores the start position Y.
	 * @type {Number}
	 */
	[ '#_' + LanternPositionsPropertyNames.START_POSITION_Y ] = 0;

	/**
	 * Stores the start position Z.
	 * @type {Number}
	 */
	[ '#_' + LanternPositionsPropertyNames.START_POSITION_Z ] = 0;

	/**
	 * Stores the current position X.
	 * @type {Number}
	 */
	[ '#_' + LanternPositionsPropertyNames.CURRENT_POSITION_X ] = 0;

	/**
	 * Stores the current position Y.
	 * @type {Number}
	 */
	[ '#_' + LanternPositionsPropertyNames.CURRENT_POSITION_Y ] = 0;

	/**
	 * Stores the current position Z.
	 * @type {Number}
	 */
	[ '#_' + LanternPositionsPropertyNames.CURRENT_POSITION_Z ] = 0;

	/**
	 * Stores true if the current position X is valid, otherwise false.
	 * @type {Boolean}
	 */
	[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID ];

	/**
	 * Stores true if the current position Y is valid, otherwise false.
	 * @type {Boolean}
	 */
	[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID ];

	/**
	 * Stores true if the current position Z is valid, otherwise false.
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
	 * Constructor method.
	 * @param {Settings} settings The settings of the javascript.
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
	get [ LanternPositionsPropertyNames.START_POSITION_X ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.START_POSITION_X ];
	}

	/**
	 * Sets the start position X.
	 * @param {Number} value The start position X.
	 */
	set [ LanternPositionsPropertyNames.START_POSITION_X ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.START_POSITION_X ] = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.START_POSITION_X );

		this.calculate();
	}

	/**
	 * Gets the start position Y.
	 * @returns {Number} The start position Y.
	 */
	get [ LanternPositionsPropertyNames.START_POSITION_Y ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.START_POSITION_Y ];
	}

	/**
	 * Sets the start position Y.
	 * @param {Number} value The start position Y.
	 */
	set [ LanternPositionsPropertyNames.START_POSITION_Y ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.START_POSITION_Y ] = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.START_POSITION_Y );

		this.calculate();
	}

	/**
	 * Gets the start position Z.
	 * @returns {Number} The start position Z.
	 */
	get [ LanternPositionsPropertyNames.START_POSITION_Z ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.START_POSITION_Z ];
	}

	/**
	 * Sets the start position Z.
	 * @param {Number} value The start position Z.
	 */
	set [ LanternPositionsPropertyNames.START_POSITION_Z ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.START_POSITION_Z ] = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.START_POSITION_Z );

		this.calculate();
	}

	/**
	 * Gets the current position X.
	 * @returns {Number} The current position X.
	 */
	get [ LanternPositionsPropertyNames.CURRENT_POSITION_X ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.CURRENT_POSITION_X ];
	}

	/**
	 * Sets the current position X.
	 * @param {Number} value The current position X.
	 */
	set [ LanternPositionsPropertyNames.CURRENT_POSITION_X ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.CURRENT_POSITION_X ] = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CURRENT_POSITION_X );

		this.calculate();
	}

	/**
	 * Gets the current position Y.
	 * @returns {Number} The current position Y.
	 */
	get [ LanternPositionsPropertyNames.CURRENT_POSITION_Y ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.CURRENT_POSITION_Y ];
	}

	/**
	 * Sets the current position Y.
	 * @param {Number} value The current position Y.
	 */
	set [ LanternPositionsPropertyNames.CURRENT_POSITION_Y ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.CURRENT_POSITION_Y ] = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CURRENT_POSITION_Y );

		this.calculate();
	}

	/**
	 * Gets the current position Z.
	 * @returns {Number} The current position Z.
	 */
	get [ LanternPositionsPropertyNames.CURRENT_POSITION_Z ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.CURRENT_POSITION_Z ];
	}

	/**
	 * Sets the current position Z.
	 * @param {Number} value The current position Z.
	 */
	set [ LanternPositionsPropertyNames.CURRENT_POSITION_Z ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.CURRENT_POSITION_Z ] = Number.parseInt( value );
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CURRENT_POSITION_Z );

		this.calculate();
	}

	/**
	 * Gets if the current position X is valid.
	 * @returns {Boolean} True if the current position X is valid, otherwise false.
	 */
	get [ LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID ];
	}

	/**
	 * Sets if the current position X is valid.
	 * @param {Boolean} value True if the current position X is valid, otherwise false.
	 */
	set [ '#' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID ] = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID );
	}

	/**
	 * Gets if the current position Y is valid.
	 * @returns {Boolean} True if the current position Y is valid, otherwise false.
	 */
	get [ LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID ];
	}

	/**
	 * Sets if the current position Y is valid.
	 * @param {Boolean} value True if the current position Y is valid, otherwise false.
	 */
	set [ '#' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID ] = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID );
	}

	/**
	 * Gets if the current position Z is valid.
	 * @returns {Boolean} True if the current position Z is valid, otherwise false.
	 */
	get [ LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID ];
	}

	/**
	 * Sets if the current position Z is valid.
	 * @param {Boolean} value True if the current position Z is valid, otherwise false.
	 */
	set [ '#' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID ] = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID );
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
	set [ '#' + LanternPositionsPropertyNames.CALCULATED_POSITION_X_NEGATIVE ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_X_NEGATIVE ] = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CALCULATED_POSITION_X_NEGATIVE );
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
	set [ '#' + LanternPositionsPropertyNames.CALCULATED_POSITION_X_POSITIVE ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_X_POSITIVE ] = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CALCULATED_POSITION_X_POSITIVE );
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
	set [ '#' + LanternPositionsPropertyNames.CALCULATED_POSITION_Y_NEGATIVE ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Y_NEGATIVE ] = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CALCULATED_POSITION_Y_NEGATIVE );
	}

	/**
	 * Gets the calculated position Y positive.
	 * @returns {Number} The calculated position Y positive.
	 */
	get [ LanternPositionsPropertyNames.CALCULATED_POSITION_Y_POSITIVE ]()
	{
		return this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Y_POSITIVE ];
	}

	/**
	 * Sets the calculated position Y positive.
	 * @param {Number} value The calculated position Y positive.
	 */
	set [ '#' + LanternPositionsPropertyNames.CALCULATED_POSITION_Y_POSITIVE ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Y_POSITIVE ] = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CALCULATED_POSITION_Y_POSITIVE );
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
	set [ '#' + LanternPositionsPropertyNames.CALCULATED_POSITION_Z_NEGATIVE ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Z_NEGATIVE ] = value;
		this._dispatchPropertyChangedEvent( LanternPositionsPropertyNames.CALCULATED_POSITION_Z_NEGATIVE );
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
	set [ '#' + LanternPositionsPropertyNames.CALCULATED_POSITION_Z_POSITIVE ]( value )
	{
		this[ '#_' + LanternPositionsPropertyNames.CALCULATED_POSITION_Z_POSITIVE ] = value;
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

		this[ '#' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID ]    = calculatedPositions[ LanternPositionsPropertyNames.IS_CURRENT_POSITION_X_VALID ];
		this[ '#' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID ]    = calculatedPositions[ LanternPositionsPropertyNames.IS_CURRENT_POSITION_Y_VALID ];
		this[ '#' + LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID ]    = calculatedPositions[ LanternPositionsPropertyNames.IS_CURRENT_POSITION_Z_VALID ];
		this[ '#' + LanternPositionsPropertyNames.CALCULATED_POSITION_X_NEGATIVE ] = calculatedPositions[ LanternPositionsPropertyNames.CALCULATED_POSITION_X_NEGATIVE ];
		this[ '#' + LanternPositionsPropertyNames.CALCULATED_POSITION_X_POSITIVE ] = calculatedPositions[ LanternPositionsPropertyNames.CALCULATED_POSITION_X_POSITIVE ];
		this[ '#' + LanternPositionsPropertyNames.CALCULATED_POSITION_Y_NEGATIVE ] = calculatedPositions[ LanternPositionsPropertyNames.CALCULATED_POSITION_Y_NEGATIVE ];
		this[ '#' + LanternPositionsPropertyNames.CALCULATED_POSITION_Y_POSITIVE ] = calculatedPositions[ LanternPositionsPropertyNames.CALCULATED_POSITION_Y_POSITIVE ];
		this[ '#' + LanternPositionsPropertyNames.CALCULATED_POSITION_Z_NEGATIVE ] = calculatedPositions[ LanternPositionsPropertyNames.CALCULATED_POSITION_Z_NEGATIVE ];
		this[ '#' + LanternPositionsPropertyNames.CALCULATED_POSITION_Z_POSITIVE ] = calculatedPositions[ LanternPositionsPropertyNames.CALCULATED_POSITION_Z_POSITIVE ];
	}

	/**
	 * Handles the property changed event of the settings of the javascript.
	 * @param {PropertyChangedEvent} event The property changed event which will be handled.
	 */
	#settings_propertyChanged = ( event ) =>
	{
		switch ( event.detail.eventArguments.propertyName )
		{
			case SettingPropertyNames.CHUNKSIZE:
			{
				this.calculate();

				break;
			}
		}
	}
}
