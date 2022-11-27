'use strict';

import HttpResponseHeader from '../HttpResponseHeader.js';

class DateHttpResponseHeader extends HttpResponseHeader
{
	constructor( value )
	{
		super( DateHttpResponseHeader.NAME, value );
	}

	static get NAME()
	{
		return 'Date';
	}
}

export default DateHttpResponseHeader;
