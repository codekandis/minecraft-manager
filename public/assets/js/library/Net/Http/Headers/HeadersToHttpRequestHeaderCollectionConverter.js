'use strict';

import Abstract from '../../../Types/Abstract.js';
import HttpRequestHeader from './HttpRequestHeader.js';
import HttpRequestHeaderCollection from './HttpRequestHeaderCollection.js';

class HeadersToHttpRequestHeaderCollectionConverter extends Abstract
{
	convert( headers )
	{
		return new HttpRequestHeaderCollection(
			...headers.map(
				( header ) =>
				{
					return new HttpRequestHeader( header[ 0 ], header[ 1 ] );
				}
			)
		);
	}
}

export default HeadersToHttpRequestHeaderCollectionConverter;
