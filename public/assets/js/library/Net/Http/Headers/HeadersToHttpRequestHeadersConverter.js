'use strict';

import { Abstract } from '../../../Types/Abstract.js';
import { HttpRequestHeader } from './HttpRequestHeader.js';

export class HeadersToHttpRequestHeadersConverter extends Abstract
{
	convert( headers )
	{
		return headers.map(
			( header ) =>
			{
				return new HttpRequestHeader( header[ 0 ], header[ 1 ] );
			}
		);
	}
}
