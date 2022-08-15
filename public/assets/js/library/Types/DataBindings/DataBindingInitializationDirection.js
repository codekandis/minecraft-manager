'use strict';

import StaticAbstract from '../StaticAbstract.js';

class DataBindingInitializationDirection extends StaticAbstract
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

export default DataBindingInitializationDirection;
