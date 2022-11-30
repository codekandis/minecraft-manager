'use strict';

import Abstract from '../../../Types/Abstract.js';

class HttpArgumentNamePreparator extends Abstract
{
	prepare( httpArgumentName )
	{
		return httpArgumentName.trim();
	}
}

export default HttpArgumentNamePreparator;
