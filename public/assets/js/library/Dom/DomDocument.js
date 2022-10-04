'use strict';

import StaticAbstract from '../Types/StaticAbstract.js';
import DomContentLoadedEvent from './DomContentLoadedEvent.js';
import DomHelper from './DomHelper.js';

class DomDocument extends StaticAbstract
{
	static load( handler )
	{
		DomHelper.addEventHandler(
			document,
			DomContentLoadedEvent.EVENT_NAME,
			handler
		);
	}
}

export default DomDocument;
