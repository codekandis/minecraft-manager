'use strict';

import HttpRequestHeader from '../HttpRequestHeader.js';

class DateHttpRequestHeader extends HttpRequestHeader
{
	constructor( value )
	{
		super( DateHttpRequestHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Date';
	}
}

export default DateHttpRequestHeader;
