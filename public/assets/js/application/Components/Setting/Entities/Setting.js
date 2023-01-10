'use strict';

import { AbstractBindable } from '../../../../library/Types/DataBindings/AbstractBindable.js';
import { PropertyNames } from '../Enumerations/PropertyNames.js';

export class Setting extends AbstractBindable
{
	[ '#_' + PropertyNames.CHUNKSIZE ] = 0;

	constructor()
	{
		super();
	}

	get [ PropertyNames.CHUNKSIZE ]()
	{
		return this[ '#_' + PropertyNames.CHUNKSIZE ];
	}

	set [ PropertyNames.CHUNKSIZE ]( value )
	{
		this[ '#_' + PropertyNames.CHUNKSIZE ] = Number.parseInt( value );
		this._raisePropertyChangedEvent( PropertyNames.CHUNKSIZE );
	}
}
