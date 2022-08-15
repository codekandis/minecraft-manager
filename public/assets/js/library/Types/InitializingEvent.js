'use strict';

import AbstractEvent from './AbstractEvent.js';

class InitializingEvent extends AbstractEvent
{
	constructor( sender, eventArguments )
	{
		super( InitializingEvent.EVENT_NAME, sender, eventArguments );
	}

	static get EVENT_NAME()
	{
		return 'initializing';
	}
}

export default InitializingEvent;
