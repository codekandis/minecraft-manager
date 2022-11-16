'use strict';

import AbstractBindable from '../../../../library/Types/DataBindings/AbstractBindable.js';
import PropertyNames from '../Enumerations/PropertyNames.js';
import LanternPositionsCalculator from './LanternPositionsCalculator.js';

class LanternPositions extends AbstractBindable
{
	[ '#_' + PropertyNames.CHUNKSIZE ]                   = 16;
	[ '#_' + PropertyNames.START_POSITION_X ]            = 0;
	[ '#_' + PropertyNames.START_POSITION_Y ]            = 0;
	[ '#_' + PropertyNames.START_POSITION_Z ]            = 0;
	[ '#_' + PropertyNames.CURRENT_POSITION_X ]          = 0;
	[ '#_' + PropertyNames.CURRENT_POSITION_Y ]          = 0;
	[ '#_' + PropertyNames.CURRENT_POSITION_Z ]          = 0;
	[ '#_' + PropertyNames.IS_CURRENT_POSITION_X_VALID ] = undefined;
	[ '#_' + PropertyNames.IS_CURRENT_POSITION_Y_VALID ] = undefined;
	[ '#_' + PropertyNames.IS_CURRENT_POSITION_Z_VALID ] = undefined;
	[ '#_' + PropertyNames.CALCULATED_POSITION_XN ]      = undefined;
	[ '#_' + PropertyNames.CALCULATED_POSITION_XP ]      = undefined;
	[ '#_' + PropertyNames.CALCULATED_POSITION_YN ]      = undefined;
	[ '#_' + PropertyNames.CALCULATED_POSITION_YP ]      = undefined;
	[ '#_' + PropertyNames.CALCULATED_POSITION_ZN ]      = undefined;
	[ '#_' + PropertyNames.CALCULATED_POSITION_ZP ]      = undefined;

	constructor()
	{
		super();

		this.#initialize();
	}

	get [ PropertyNames.CHUNKSIZE ]()
	{
		return this[ '#_' + PropertyNames.CHUNKSIZE ];
	}

	set [ PropertyNames.CHUNKSIZE ]( value )
	{
		this[ '#_' + PropertyNames.CHUNKSIZE ] = Number.parseInt( value );
		this._raisePropertyChangedEvent( PropertyNames.CHUNKSIZE );

		this.calculate();
	}

	get [ PropertyNames.START_POSITION_X ]()
	{
		return this[ '#_' + PropertyNames.START_POSITION_X ];
	}

	set [ PropertyNames.START_POSITION_X ]( value )
	{
		this[ '#_' + PropertyNames.START_POSITION_X ] = Number.parseInt( value );
		this._raisePropertyChangedEvent( PropertyNames.START_POSITION_X );

		this.calculate();
	}

	get [ PropertyNames.START_POSITION_Y ]()
	{
		return this[ '#_' + PropertyNames.START_POSITION_Y ];
	}

	set [ PropertyNames.START_POSITION_Y ]( value )
	{
		this[ '#_' + PropertyNames.START_POSITION_Y ] = Number.parseInt( value );
		this._raisePropertyChangedEvent( PropertyNames.START_POSITION_Y );

		this.calculate();
	}

	get [ PropertyNames.START_POSITION_Z ]()
	{
		return this[ '#_' + PropertyNames.START_POSITION_Z ];
	}

	set [ PropertyNames.START_POSITION_Z ]( value )
	{
		this[ '#_' + PropertyNames.START_POSITION_Z ] = Number.parseInt( value );
		this._raisePropertyChangedEvent( PropertyNames.START_POSITION_Z );

		this.calculate();
	}

	get [ PropertyNames.CURRENT_POSITION_X ]()
	{
		return this[ '#_' + PropertyNames.CURRENT_POSITION_X ];
	}

	set [ PropertyNames.CURRENT_POSITION_X ]( value )
	{
		this[ '#_' + PropertyNames.CURRENT_POSITION_X ] = Number.parseInt( value );
		this._raisePropertyChangedEvent( PropertyNames.CURRENT_POSITION_X );

		this.calculate();
	}

	get [ PropertyNames.CURRENT_POSITION_Y ]()
	{
		return this[ '#_' + PropertyNames.CURRENT_POSITION_Y ];
	}

	set [ PropertyNames.CURRENT_POSITION_Y ]( value )
	{
		this[ '#_' + PropertyNames.CURRENT_POSITION_Y ] = Number.parseInt( value );
		this._raisePropertyChangedEvent( PropertyNames.CURRENT_POSITION_Y );

		this.calculate();
	}

	get [ PropertyNames.CURRENT_POSITION_Z ]()
	{
		return this[ '#_' + PropertyNames.CURRENT_POSITION_Z ];
	}

	set [ PropertyNames.CURRENT_POSITION_Z ]( value )
	{
		this[ '#_' + PropertyNames.CURRENT_POSITION_Z ] = Number.parseInt( value );
		this._raisePropertyChangedEvent( PropertyNames.CURRENT_POSITION_Z );

		this.calculate();
	}

	get [ PropertyNames.IS_CURRENT_POSITION_X_VALID ]()
	{
		return this[ '#_' + PropertyNames.IS_CURRENT_POSITION_X_VALID ];
	}

	set [ '#' + PropertyNames.IS_CURRENT_POSITION_X_VALID ]( value )
	{
		this[ '#_' + PropertyNames.IS_CURRENT_POSITION_X_VALID ] = value;
		this._raisePropertyChangedEvent( PropertyNames.IS_CURRENT_POSITION_X_VALID );
	}

	get [ PropertyNames.IS_CURRENT_POSITION_Y_VALID ]()
	{
		return this[ '#_' + PropertyNames.IS_CURRENT_POSITION_Y_VALID ];
	}

	set [ '#' + PropertyNames.IS_CURRENT_POSITION_Y_VALID ]( value )
	{
		this[ '#_' + PropertyNames.IS_CURRENT_POSITION_Y_VALID ] = value;
		this._raisePropertyChangedEvent( PropertyNames.IS_CURRENT_POSITION_Y_VALID );
	}

	get [ PropertyNames.IS_CURRENT_POSITION_Z_VALID ]()
	{
		return this[ '#_' + PropertyNames.IS_CURRENT_POSITION_Z_VALID ];
	}

	set [ '#' + PropertyNames.IS_CURRENT_POSITION_Z_VALID ]( value )
	{
		this[ '#_' + PropertyNames.IS_CURRENT_POSITION_Z_VALID ] = value;
		this._raisePropertyChangedEvent( PropertyNames.IS_CURRENT_POSITION_Z_VALID );
	}

	get [ PropertyNames.CALCULATED_POSITION_XN ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_POSITION_XN ];
	}

	set [ '#' + PropertyNames.CALCULATED_POSITION_XN ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_POSITION_XN ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_POSITION_XN );
	}

	get [ PropertyNames.CALCULATED_POSITION_XP ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_POSITION_XP ];
	}

	set [ '#' + PropertyNames.CALCULATED_POSITION_XP ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_POSITION_XP ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_POSITION_XP );
	}

	get [ PropertyNames.CALCULATED_POSITION_YN ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_POSITION_YN ];
	}

	set [ '#' + PropertyNames.CALCULATED_POSITION_YN ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_POSITION_YN ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_POSITION_YN );
	}

	get [ PropertyNames.CALCULATED_POSITION_YP ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_POSITION_YP ];
	}

	set [ '#' + PropertyNames.CALCULATED_POSITION_YP ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_POSITION_YP ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_POSITION_YP );
	}

	get [ PropertyNames.CALCULATED_POSITION_ZN ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_POSITION_ZN ];
	}

	set [ '#' + PropertyNames.CALCULATED_POSITION_ZN ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_POSITION_ZN ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_POSITION_ZN );
	}

	get [ PropertyNames.CALCULATED_POSITION_ZP ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_POSITION_ZP ];
	}

	set [ '#' + PropertyNames.CALCULATED_POSITION_ZP ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_POSITION_ZP ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_POSITION_ZP );
	}

	#initialize()
	{
		this.calculate();
	}

	calculate()
	{
		const calculatedPositions = ( new LanternPositionsCalculator() )
			.calculate( this );

		this[ '#' + PropertyNames.IS_CURRENT_POSITION_X_VALID ] = calculatedPositions[ PropertyNames.IS_CURRENT_POSITION_X_VALID ];
		this[ '#' + PropertyNames.IS_CURRENT_POSITION_Y_VALID ] = calculatedPositions[ PropertyNames.IS_CURRENT_POSITION_Y_VALID ];
		this[ '#' + PropertyNames.IS_CURRENT_POSITION_Z_VALID ] = calculatedPositions[ PropertyNames.IS_CURRENT_POSITION_Z_VALID ];
		this[ '#' + PropertyNames.CALCULATED_POSITION_XN ]      = calculatedPositions[ PropertyNames.CALCULATED_POSITION_XN ];
		this[ '#' + PropertyNames.CALCULATED_POSITION_XP ]      = calculatedPositions[ PropertyNames.CALCULATED_POSITION_XP ];
		this[ '#' + PropertyNames.CALCULATED_POSITION_YN ]      = calculatedPositions[ PropertyNames.CALCULATED_POSITION_YN ];
		this[ '#' + PropertyNames.CALCULATED_POSITION_YP ]      = calculatedPositions[ PropertyNames.CALCULATED_POSITION_YP ];
		this[ '#' + PropertyNames.CALCULATED_POSITION_ZN ]      = calculatedPositions[ PropertyNames.CALCULATED_POSITION_ZN ];
		this[ '#' + PropertyNames.CALCULATED_POSITION_ZP ]      = calculatedPositions[ PropertyNames.CALCULATED_POSITION_ZP ];
	}
}

export default LanternPositions;
