'use strict';

import AbstractEvent from '../AbstractEvent.js';

class PropertyChangingEvent extends AbstractEvent
{
	constructor( sender, eventArguments )
	{
		super( PropertyChangingEvent.EVENT_NAME, sender, eventArguments );
	}

	static get EVENT_NAME()
	{
		return 'propertyChanging';
	}
}

export default PropertyChangingEvent;
