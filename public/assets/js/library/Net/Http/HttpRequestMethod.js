'use strict';

import StaticAbstract from '../../Types/StaticAbstract.js';

class HttpRequestMethod extends StaticAbstract
{
	static get CONNECT()
	{
		return 'CONNECT';
	}

	static get COPY()
	{
		return 'COPY';
	}

	static get DELETE()
	{
		return 'DELETE';
	}

	static get GET()
	{
		return 'GET';
	}

	static get HEAD()
	{
		return 'HEAD';
	}

	static get HTTP()
	{
		return 'HTTP';
	}

	static get LOCK()
	{
		return 'LOCK';
	}

	static get MKCOL()
	{
		return 'MKCOL';
	}

	static get MOVE()
	{
		return 'MOVE';
	}

	static get OPTIONS()
	{
		return 'OPTIONS';
	}

	static get PATCH()
	{
		return 'PATCH';
	}

	static get POST()
	{
		return 'POST';
	}

	static get PROPFIND()
	{
		return 'PROPFIND';
	}

	static get PROPPATCH()
	{
		return 'PROPPATCH';
	}

	static get PUT()
	{
		return 'PUT';
	}

	static get TRACE()
	{
		return 'TRACE';
	}

	static get UNLOCK()
	{
		return 'UNLOCK';
	}
}

export default HttpRequestMethod;
