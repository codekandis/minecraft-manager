'use strict';

import AbstractEvent from '../AbstractEvent.js';

class PropertyChangedEvent extends AbstractEvent
{
	constructor( sender, eventArguments )
	{
		super( PropertyChangedEvent.EVENT_NAME, sender, eventArguments );
	}

	static get EVENT_NAME()
	{
		return 'propertyChanged';
	}
}

export default PropertyChangedEvent;
