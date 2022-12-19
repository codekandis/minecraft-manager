'use strict';

import Abstract from '../../../Types/Abstract.js';
import HttpResponseHeader from './HttpResponseHeader.js';

class HeadersToHttpResponseHeadersConverter extends Abstract
{
	convert( headers )
	{
		return headers.map(
			( header ) =>
			{
				return new HttpResponseHeader( header[ 0 ], header[ 1 ] );
			}
		);
	}
}

export default HeadersToHttpResponseHeadersConverter;
