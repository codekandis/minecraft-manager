'use strict';

import { Abstract } from '../../../Types/Abstract.js';

export class HttpHeaderNamePreparator extends Abstract
{
	prepare( httpHeaderName )
	{
		return httpHeaderName
			.trim()
			.toLowerCase();
	}
}
