'use strict';

import AbstractEvent from '../Types/AbstractEvent.js';

class DomContentLoadedEvent extends AbstractEvent
{
	constructor( sender, eventArguments )
	{
		super( DomContentLoadedEvent.EVENT_NAME, sender, eventArguments );
	}

	static get EVENT_NAME()
	{
		return 'DOMContentLoaded';
	}
}

export default DomContentLoadedEvent;
