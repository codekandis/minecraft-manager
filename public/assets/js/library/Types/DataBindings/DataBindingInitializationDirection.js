'use strict';

import { StaticAbstract } from '../StaticAbstract.js';

export class DataBindingInitializationDirection extends StaticAbstract
{
	static get BINDER()
	{
		return 'BINDER';
	}

	static get BINDABLE()
	{
		return 'BINDABLE';
	}
}
