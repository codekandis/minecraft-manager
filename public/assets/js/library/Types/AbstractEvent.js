'use strict';

import EventDetail from './EventDetail.js';

class AbstractEvent extends CustomEvent
{
	constructor( eventName, sender, eventArguments )
	{
		super(
			eventName,
			{
				detail: new EventDetail( sender, eventArguments )
			}
		);
	}

	raise()
	{
		this.detail.sender.dispatchEvent( this );
	}
}

export default AbstractEvent;
