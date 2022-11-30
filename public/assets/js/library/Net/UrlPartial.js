'use strict';

import StaticAbstract from '../Types/StaticAbstract.js';

class UrlPartial extends StaticAbstract
{
	static get PROTOCOL()
	{
		return 'PROTOCOL';
	}

	static get USERNAME()
	{
		return 'USERNAME';
	}

	static get PASSWORD()
	{
		return 'PASSWORD';
	}

	static get HOSTNAME()
	{
		return 'HOSTNAME';
	}

	static get PORT()
	{
		return 'PORT';
	}

	static get PATHNAME()
	{
		return 'PATHNAME';
	}

	static get SEARCH()
	{
		return 'SEARCH';
	}

	static get HASH()
	{
		return 'HASH';
	}
}

export default UrlPartial;
