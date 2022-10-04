'use strict';

import AbstractEvent from '../Types/AbstractEvent.js';

class InputEvent extends AbstractEvent
{
	constructor( sender, eventArguments )
	{
		super( InputEvent.EVENT_NAME, sender, eventArguments );
	}

	static get EVENT_NAME()
	{
		return 'input';
	}
}

export default InputEvent;
