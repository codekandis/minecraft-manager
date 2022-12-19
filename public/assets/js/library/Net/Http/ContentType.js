'use strict';

import StaticAbstract from '../../Types/StaticAbstract.js';

class ContentType extends StaticAbstract
{
	static get APPLICATION_JSON()
	{
		return 'application/json';
	}

	static get APPLICATION_JSON_UTF8()
	{
		return 'application/json; charset=utf-8';
	}

	static get APPLICATION_X_WWW_FORM_URLENCODED()
	{
		return 'application/x-www-form-urlencoded';
	}

	static get APPLICATION_XML()
	{
		return 'application/xml';
	}

	static get APPLICATION_XML_UTF8()
	{
		return 'application/xml; charset=utf-8';
	}

	static get TEXT_HTML()
	{
		return 'text/html';
	}

	static get TEXT_HTML_UTF8()
	{
		return 'text/html; charset=utf-8';
	}

	static get TEXT_PLAIN()
	{
		return 'text/plain';
	}

	static get TEXT_PLAIN_UTF8()
	{
		return 'text/plain; charset=utf-8';
	}

	static get TEXT_XML()
	{
		return ContentType.APPLICATION_XML;
	}

	static get TEXT_XML_UTF8()
	{
		return ContentType.APPLICATION_XML_UTF8;
	}
}

export default ContentType;
