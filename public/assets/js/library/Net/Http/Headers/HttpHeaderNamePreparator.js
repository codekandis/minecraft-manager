'use strict';

import Abstract from '../../../Types/Abstract.js';

class HttpHeaderNamePreparator extends Abstract
{
	prepare( httpHeaderName )
	{
		return httpHeaderName
			.trim()
			.toLowerCase();
	}
}

export default HttpHeaderNamePreparator;
