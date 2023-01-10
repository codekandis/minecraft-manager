'use strict';

import { Abstract } from '../../../Types/Abstract.js';

export class HttpPostFileNamePreparator extends Abstract
{
	prepare( name )
	{
		return name.trim();
	}
}
