'use strict';

import { Abstract } from '../../../Types/Abstract.js';

export class HttpArgumentNamePreparator extends Abstract
{
	prepare( httpArgumentName )
	{
		return httpArgumentName.trim();
	}
}
