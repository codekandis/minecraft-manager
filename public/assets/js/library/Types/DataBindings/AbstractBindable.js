'use strict';

import Abstract from '../Abstract.js';
import DataBindings from './DataBindings.js';
import PropertyChangedEvent from './PropertyChangedEvent.js';
import PropertyChangedEventArguments from './PropertyChangedEventArguments.js';
import PropertyChangingEvent from './PropertyChangingEvent.js';
import PropertyChangingEventArguments from './PropertyChangingEventArguments.js';

class AbstractBindable extends Abstract
{
	#_dataBindings = undefined;

	constructor()
	{
		super();

		this.#_dataBindings = new DataBindings( this );
	}

	get dataBindings()
	{
		return this.#_dataBindings;
	}

	_raisePropertyChangingEvent( propertyName, proxy )
	{
		( new PropertyChangingEvent(
			this,
			new PropertyChangingEventArguments(
				proxy || this,
				propertyName
			)
		) )
			.raise();
	}

	_raisePropertyChangedEvent( propertyName, proxy )
	{
		( new PropertyChangedEvent(
			this,
			new PropertyChangedEventArguments(
				proxy || this,
				propertyName
			)
		) )
			.raise();
	}
}

export default AbstractBindable;
