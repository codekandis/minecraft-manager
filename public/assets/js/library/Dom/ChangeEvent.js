'use strict';

import { AbstractEvent } from '../Types/AbstractEvent.js';

export class ChangeEvent extends AbstractEvent
{
	constructor( sender, eventArguments )
	{
		super( ChangeEvent.EVENT_NAME, sender, eventArguments );
	}

	static get EVENT_NAME()
	{
		return 'change';
	}
}
