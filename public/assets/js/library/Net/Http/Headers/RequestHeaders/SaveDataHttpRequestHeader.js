'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class SaveDataHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( SaveDataHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Save-Data';
	}
}

export default SaveDataHttpRequestHeader;
