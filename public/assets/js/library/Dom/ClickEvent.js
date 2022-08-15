'use strict';

import AbstractEvent from '../Types/AbstractEvent.js';

class ClickEvent extends AbstractEvent
{
	constructor( sender, eventArguments )
	{
		super( ClickEvent.EVENT_NAME, sender, eventArguments );
	}

	static get EVENT_NAME()
	{
		return 'click';
	}
}

export default ClickEvent;
