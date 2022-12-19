'use strict';

import Abstract from '../../../Types/Abstract.js';

class HttpPostFileNamePreparator extends Abstract
{
	prepare( name )
	{
		return name.trim();
	}
}

export default HttpPostFileNamePreparator;
