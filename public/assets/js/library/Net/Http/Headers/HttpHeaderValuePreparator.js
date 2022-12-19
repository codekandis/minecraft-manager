'use strict';

import Abstract from '../../../Types/Abstract.js';

class HttpHeaderValuePreparator extends Abstract
{
	prepare( httpHeaderValue )
	{
		return httpHeaderValue.trimStart();
	}

}

export default HttpHeaderValuePreparator;
