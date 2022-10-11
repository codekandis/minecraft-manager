'use strict';

import AbstractBindable from '../../../library/Types/DataBindings/AbstractBindable.js';
import Directions from './Directions.js';
import PropertyNames from './PropertyNames.js';
import StationOffsetsCalculator from './StationOffsetsCalculator.js';

class StationPositions extends AbstractBindable
{
	[ '#_' + PropertyNames.SUBWAY_STATION_BASE_NAME ]            = 'codekandis:subway-station';
	[ '#_' + PropertyNames.HEAD_1_NAME ]                         = String.format`${ 0 }-head-1`( this[ '#_' + PropertyNames.SUBWAY_STATION_BASE_NAME ] );
	[ '#_' + PropertyNames.HEAD_2_NAME ]                         = String.format`${ 0 }-head-2`( this[ '#_' + PropertyNames.SUBWAY_STATION_BASE_NAME ] );
	[ '#_' + PropertyNames.CONCOURSE_NAME ]                      = String.format`${ 0 }-concourse`( this[ '#_' + PropertyNames.SUBWAY_STATION_BASE_NAME ] );
	[ '#_' + PropertyNames.STAIRS_PORT_NAME ]                    = String.format`${ 0 }-stairs-port`( this[ '#_' + PropertyNames.SUBWAY_STATION_BASE_NAME ] );
	[ '#_' + PropertyNames.STAIRS_NAME ]                         = String.format`${ 0 }-stairs`( this[ '#_' + PropertyNames.SUBWAY_STATION_BASE_NAME ] );
	[ '#_' + PropertyNames.STAIRS_ENTRANCE_NAME ]                = String.format`${ 0 }-stairs-entrance`( this[ '#_' + PropertyNames.SUBWAY_STATION_BASE_NAME ] );
	[ '#_' + PropertyNames.STAIRWAY_NAME ]                       = String.format`${ 0 }-stairway`( this[ '#_' + PropertyNames.SUBWAY_STATION_BASE_NAME ] );
	[ '#_' + PropertyNames.STAIRWAY_LEFT_NAME ]                  = String.format`${ 0 }`( this[ '#_' + PropertyNames.STAIRWAY_NAME ] );
	[ '#_' + PropertyNames.STAIRWAY_RIGHT_NAME ]                 = String.format`${ 0 }`( this[ '#_' + PropertyNames.STAIRWAY_NAME ] );
	[ '#_' + PropertyNames.DIRECTION ]                           = Directions.NORTH;
	[ '#_' + PropertyNames.CURRENT_POSITION_X ]                  = 0;
	[ '#_' + PropertyNames.CURRENT_POSITION_Y ]                  = 0;
	[ '#_' + PropertyNames.CURRENT_POSITION_Z ]                  = 0;
	[ '#_' + PropertyNames.CALCULATED_ROTATION ]                 = undefined;
	[ '#_' + PropertyNames.CALCULATED_HALL ]                     = undefined;
	[ '#_' + PropertyNames.CALCULATED_HALL_1_X ]                 = undefined;
	[ '#_' + PropertyNames.CALCULATED_HALL_1_Y ]                 = undefined;
	[ '#_' + PropertyNames.CALCULATED_HALL_1_Z ]                 = undefined;
	[ '#_' + PropertyNames.CALCULATED_HALL_2_X ]                 = undefined;
	[ '#_' + PropertyNames.CALCULATED_HALL_2_Y ]                 = undefined;
	[ '#_' + PropertyNames.CALCULATED_HALL_2_Z ]                 = undefined;
	[ '#_' + PropertyNames.CALCULATED_ARRIVAL_BELL ]             = undefined;
	[ '#_' + PropertyNames.CALCULATED_ARRIVAL_BELL_X ]           = undefined;
	[ '#_' + PropertyNames.CALCULATED_ARRIVAL_BELL_Y ]           = undefined;
	[ '#_' + PropertyNames.CALCULATED_ARRIVAL_BELL_Z ]           = undefined;
	[ '#_' + PropertyNames.CALCULATED_DEPARTURE_BELL ]           = undefined;
	[ '#_' + PropertyNames.CALCULATED_DEPARTURE_BELL_X ]         = undefined;
	[ '#_' + PropertyNames.CALCULATED_DEPARTURE_BELL_Y ]         = undefined;
	[ '#_' + PropertyNames.CALCULATED_DEPARTURE_BELL_Z ]         = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_1_X ]          = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_1_Y ]          = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_1_Z ]          = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_2_X ]          = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_2_Y ]          = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_2_Z ]          = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_CONCOURSE_X ]       = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_CONCOURSE_Y ]       = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_CONCOURSE_Z ]       = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X ]     = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y ]     = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z ]     = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_X ]          = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_Y ]          = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_Z ]          = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X ] = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y ] = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z ] = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X ]   = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y ]   = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z ]   = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X ]  = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y ]  = undefined;
	[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z ]  = undefined;

	constructor()
	{
		super();

		this.#initialize();
	}

	get [ PropertyNames.HEAD_1_NAME ]()
	{
		return this[ '#_' + PropertyNames.HEAD_1_NAME ];
	}

	get [ PropertyNames.HEAD_2_NAME ]()
	{
		return this[ '#_' + PropertyNames.HEAD_2_NAME ];
	}

	get [ PropertyNames.CONCOURSE_NAME ]()
	{
		return this[ '#_' + PropertyNames.CONCOURSE_NAME ];
	}

	get [ PropertyNames.STAIRS_PORT_NAME ]()
	{
		return this[ '#_' + PropertyNames.STAIRS_PORT_NAME ];
	}

	get [ PropertyNames.STAIRS_NAME ]()
	{
		return this[ '#_' + PropertyNames.STAIRS_NAME ];
	}

	get [ PropertyNames.STAIRS_ENTRANCE_NAME ]()
	{
		return this[ '#_' + PropertyNames.STAIRS_ENTRANCE_NAME ];
	}

	get [ PropertyNames.STAIRWAY_LEFT_NAME ]()
	{
		return this[ '#_' + PropertyNames.STAIRWAY_LEFT_NAME ];
	}

	get [ PropertyNames.STAIRWAY_RIGHT_NAME ]()
	{
		return this[ '#_' + PropertyNames.STAIRWAY_RIGHT_NAME ];
	}

	get [ PropertyNames.DIRECTION ]()
	{
		return this[ '#_' + PropertyNames.DIRECTION ];
	}

	set [ PropertyNames.DIRECTION ]( value )
	{
		this[ '#_' + PropertyNames.DIRECTION ] = value;
		this._raisePropertyChangedEvent( PropertyNames.DIRECTION );

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

	get [ PropertyNames.CALCULATED_ROTATION ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_ROTATION ];
	}

	set [ '#' + PropertyNames.CALCULATED_ROTATION ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_ROTATION ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_ROTATION );
	}

	get [ PropertyNames.CALCULATED_HALL ]()
	{
		return String.format`/fill ${ 0 } ${ 1 } ${ 2 } ${ 3 } ${ 4 } ${ 5 } cave_air replace `(
			this[ '#_' + PropertyNames.CALCULATED_HALL_1_X ],
			this[ '#_' + PropertyNames.CALCULATED_HALL_1_Y ],
			this[ '#_' + PropertyNames.CALCULATED_HALL_1_Z ],
			this[ '#_' + PropertyNames.CALCULATED_HALL_2_X ],
			this[ '#_' + PropertyNames.CALCULATED_HALL_2_Y ],
			this[ '#_' + PropertyNames.CALCULATED_HALL_2_Z ]
		);
	}

	get [ PropertyNames.CALCULATED_HALL_1_X ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_HALL_1_X ];
	}

	set [ '#' + PropertyNames.CALCULATED_HALL_1_X ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_HALL_1_X ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_HALL_1_X );
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_HALL );
	}

	get [ PropertyNames.CALCULATED_HALL_1_Y ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_HALL_1_Y ];
	}

	set [ '#' + PropertyNames.CALCULATED_HALL_1_Y ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_HALL_1_Y ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_HALL_1_Y );
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_HALL );
	}

	get [ PropertyNames.CALCULATED_HALL_1_Z ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_HALL_1_Z ];
	}

	set [ '#' + PropertyNames.CALCULATED_HALL_1_Z ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_HALL_1_Z ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_HALL_1_Z );
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_HALL );
	}

	get [ PropertyNames.CALCULATED_HALL_2_X ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_HALL_2_X ];
	}

	set [ '#' + PropertyNames.CALCULATED_HALL_2_X ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_HALL_2_X ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_HALL_2_X );
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_HALL );
	}

	get [ PropertyNames.CALCULATED_HALL_2_Y ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_HALL_2_Y ];
	}

	set [ '#' + PropertyNames.CALCULATED_HALL_2_Y ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_HALL_2_Y ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_HALL_2_Y );
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_HALL );
	}

	get [ PropertyNames.CALCULATED_HALL_2_Z ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_HALL_2_Z ];
	}

	set [ '#' + PropertyNames.CALCULATED_HALL_2_Z ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_HALL_2_Z ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_HALL_2_Z );
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_HALL );
	}

	get [ PropertyNames.CALCULATED_ARRIVAL_BELL ]()
	{
		return String.format`playsound minecraft:block.bell.use block @a ${ 0 } ${ 1 } ${ 2 } 1.3 2`(
			this[ '#_' + PropertyNames.CALCULATED_ARRIVAL_BELL_X ],
			this[ '#_' + PropertyNames.CALCULATED_ARRIVAL_BELL_Y ],
			this[ '#_' + PropertyNames.CALCULATED_ARRIVAL_BELL_Z ]
		);
	}

	get [ PropertyNames.CALCULATED_ARRIVAL_BELL_X ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_ARRIVAL_BELL_X ];
	}

	set [ '#' + PropertyNames.CALCULATED_ARRIVAL_BELL_X ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_ARRIVAL_BELL_X ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_ARRIVAL_BELL_X );
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_ARRIVAL_BELL );
	}

	get [ PropertyNames.CALCULATED_ARRIVAL_BELL_Y ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_ARRIVAL_BELL_Y ];
	}

	set [ '#' + PropertyNames.CALCULATED_ARRIVAL_BELL_Y ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_ARRIVAL_BELL_Y ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_ARRIVAL_BELL_Y );
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_ARRIVAL_BELL );
	}

	get [ PropertyNames.CALCULATED_ARRIVAL_BELL_Z ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_ARRIVAL_BELL_Z ];
	}

	set [ '#' + PropertyNames.CALCULATED_ARRIVAL_BELL_Z ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_ARRIVAL_BELL_Z ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_ARRIVAL_BELL_Z );
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_ARRIVAL_BELL );
	}

	get [ PropertyNames.CALCULATED_DEPARTURE_BELL ]()
	{
		return String.format`playsound minecraft:block.bell.use block @a ${ 0 } ${ 1 } ${ 2 } 1.3 2`(
			this[ '#_' + PropertyNames.CALCULATED_DEPARTURE_BELL_X ],
			this[ '#_' + PropertyNames.CALCULATED_DEPARTURE_BELL_Y ],
			this[ '#_' + PropertyNames.CALCULATED_DEPARTURE_BELL_Z ]
		);
	}

	get [ PropertyNames.CALCULATED_DEPARTURE_BELL_X ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_DEPARTURE_BELL_X ];
	}

	set [ '#' + PropertyNames.CALCULATED_DEPARTURE_BELL_X ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_DEPARTURE_BELL_X ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_DEPARTURE_BELL_X );
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_DEPARTURE_BELL );
	}

	get [ PropertyNames.CALCULATED_DEPARTURE_BELL_Y ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_DEPARTURE_BELL_Y ];
	}

	set [ '#' + PropertyNames.CALCULATED_DEPARTURE_BELL_Y ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_DEPARTURE_BELL_Y ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_DEPARTURE_BELL_Y );
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_DEPARTURE_BELL );
	}

	get [ PropertyNames.CALCULATED_DEPARTURE_BELL_Z ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_DEPARTURE_BELL_Z ];
	}

	set [ '#' + PropertyNames.CALCULATED_DEPARTURE_BELL_Z ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_DEPARTURE_BELL_Z ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_DEPARTURE_BELL_Z );
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_DEPARTURE_BELL );
	}

	get [ PropertyNames.CALCULATED_OFFSET_HEAD_1_X ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_1_X ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_HEAD_1_X ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_1_X ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_HEAD_1_X );
	}

	get [ PropertyNames.CALCULATED_OFFSET_HEAD_1_Y ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_1_Y ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_HEAD_1_Y ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_1_Y ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_HEAD_1_Y );
	}

	get [ PropertyNames.CALCULATED_OFFSET_HEAD_1_Z ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_1_Z ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_HEAD_1_Z ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_1_Z ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_HEAD_1_Z );
	}

	get [ PropertyNames.CALCULATED_OFFSET_HEAD_2_X ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_2_X ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_HEAD_2_X ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_2_X ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_HEAD_2_X );
	}

	get [ PropertyNames.CALCULATED_OFFSET_HEAD_2_Y ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_2_Y ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_HEAD_2_Y ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_2_Y ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_HEAD_2_Y );
	}

	get [ PropertyNames.CALCULATED_OFFSET_HEAD_2_Z ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_2_Z ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_HEAD_2_Z ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_HEAD_2_Z ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_HEAD_2_Z );
	}

	get [ PropertyNames.CALCULATED_OFFSET_CONCOURSE_X ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_CONCOURSE_X ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_CONCOURSE_X ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_CONCOURSE_X ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_CONCOURSE_X );
	}

	get [ PropertyNames.CALCULATED_OFFSET_CONCOURSE_Y ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_CONCOURSE_Y ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_CONCOURSE_Y ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_CONCOURSE_Y ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_CONCOURSE_Y );
	}

	get [ PropertyNames.CALCULATED_OFFSET_CONCOURSE_Z ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_CONCOURSE_Z ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_CONCOURSE_Z ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_CONCOURSE_Z ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_CONCOURSE_Z );
	}

	get [ PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X );
	}

	get [ PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y );
	}

	get [ PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z );
	}

	get [ PropertyNames.CALCULATED_OFFSET_STAIRS_X ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_X ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_X ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_X ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_STAIRS_X );
	}

	get [ PropertyNames.CALCULATED_OFFSET_STAIRS_Y ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_Y ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_Y ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_Y ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_STAIRS_Y );
	}

	get [ PropertyNames.CALCULATED_OFFSET_STAIRS_Z ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_Z ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_Z ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_Z ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_STAIRS_Z );
	}

	get [ PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X );
	}

	get [ PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y );
	}

	get [ PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z );
	}

	get [ PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X );
	}

	get [ PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y );
	}

	get [ PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z );
	}

	get [ PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X );
	}

	get [ PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y );
	}

	get [ PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z ]()
	{
		return this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z ];
	}

	set [ '#' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z ]( value )
	{
		this[ '#_' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z ] = value;
		this._raisePropertyChangedEvent( PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z );
	}

	#initialize()
	{
		this.calculate();
	}

	calculate()
	{
		const calculatedOffsets = ( new StationOffsetsCalculator() )
			.calculate( this );

		this[ '#' + PropertyNames.CALCULATED_ROTATION ]                 = calculatedOffsets.rotation;
		this[ '#' + PropertyNames.CALCULATED_HALL_1_X ]                 = calculatedOffsets.hall1.x;
		this[ '#' + PropertyNames.CALCULATED_HALL_1_Y ]                 = calculatedOffsets.hall1.y;
		this[ '#' + PropertyNames.CALCULATED_HALL_1_Z ]                 = calculatedOffsets.hall1.z;
		this[ '#' + PropertyNames.CALCULATED_HALL_2_X ]                 = calculatedOffsets.hall2.x;
		this[ '#' + PropertyNames.CALCULATED_HALL_2_Y ]                 = calculatedOffsets.hall2.y;
		this[ '#' + PropertyNames.CALCULATED_HALL_2_Z ]                 = calculatedOffsets.hall2.z;
		this[ '#' + PropertyNames.CALCULATED_ARRIVAL_BELL_X ]           = calculatedOffsets.arrivalBell.x;
		this[ '#' + PropertyNames.CALCULATED_ARRIVAL_BELL_Y ]           = calculatedOffsets.arrivalBell.y;
		this[ '#' + PropertyNames.CALCULATED_ARRIVAL_BELL_Z ]           = calculatedOffsets.arrivalBell.z;
		this[ '#' + PropertyNames.CALCULATED_DEPARTURE_BELL_X ]         = calculatedOffsets.departureBell.x;
		this[ '#' + PropertyNames.CALCULATED_DEPARTURE_BELL_Y ]         = calculatedOffsets.departureBell.y;
		this[ '#' + PropertyNames.CALCULATED_DEPARTURE_BELL_Z ]         = calculatedOffsets.departureBell.z;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_HEAD_1_X ]          = calculatedOffsets.head1.x;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_HEAD_1_Y ]          = calculatedOffsets.head1.y;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_HEAD_1_Z ]          = calculatedOffsets.head1.z;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_HEAD_2_X ]          = calculatedOffsets.head2.x;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_HEAD_2_Y ]          = calculatedOffsets.head2.y;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_HEAD_2_Z ]          = calculatedOffsets.head2.z;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_CONCOURSE_X ]       = calculatedOffsets.concourse.x;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_CONCOURSE_Y ]       = calculatedOffsets.concourse.y;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_CONCOURSE_Z ]       = calculatedOffsets.concourse.z;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X ]     = calculatedOffsets.stairsPort.x;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y ]     = calculatedOffsets.stairsPort.y;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z ]     = calculatedOffsets.stairsPort.z;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_X ]          = calculatedOffsets.stairs.x;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_Y ]          = calculatedOffsets.stairs.y;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_Z ]          = calculatedOffsets.stairs.z;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X ] = calculatedOffsets.stairsEntrance.x;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y ] = calculatedOffsets.stairsEntrance.y;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z ] = calculatedOffsets.stairsEntrance.z;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X ]   = calculatedOffsets.stairwayLeft.x;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y ]   = calculatedOffsets.stairwayLeft.y;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z ]   = calculatedOffsets.stairwayLeft.z;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X ]  = calculatedOffsets.stairwayRight.x;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y ]  = calculatedOffsets.stairwayRight.y;
		this[ '#' + PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z ]  = calculatedOffsets.stairwayRight.z;
	}
}

export default StationPositions;
