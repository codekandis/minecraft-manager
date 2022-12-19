'use strict';

import Abstract from '../../../Types/Abstract.js';
import HttpResponseHeader from './HttpResponseHeader.js';
import HttpResponseHeaderCollection from './HttpResponseHeaderCollection.js';

class HeadersToHttpResponseHeaderCollectionConverter extends Abstract
{
	convert( headers )
	{
		return new HttpResponseHeaderCollection(
			...headers.map(
				( header ) =>
				{
					return new HttpResponseHeader( header[ 0 ], header[ 1 ] );
				}
			)
		);
	}
}

export default HeadersToHttpResponseHeaderCollectionConverter;
