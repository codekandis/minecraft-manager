'use strict';

import { Abstract } from '../../../Types/Abstract.js';

export class HttpHeaderValuePreparator extends Abstract
{
	prepare( httpHeaderValue )
	{
		return httpHeaderValue.trimStart();
	}
}
