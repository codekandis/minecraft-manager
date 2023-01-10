'use strict';

import { StaticAbstract } from '../../Types/StaticAbstract.js';

export class HttpPostDataContentType extends StaticAbstract
{
	static get APPLICATION_X_WWW_FORM_URL_ENCODED()
	{
		return 'APPLICATION_X_WWW_FORM_URL_ENCODED';
	}

	static get MULTIPART_FORM_DATA()
	{
		return 'MULTIPART_FORM_DATA';
	}

	static get PREFER_APPLICATION_X_WWW_FORM_URL_ENCODED()
	{
		return 'PREFER_APPLICATION_X_WWW_FORM_URL_ENCODED';
	}
}
