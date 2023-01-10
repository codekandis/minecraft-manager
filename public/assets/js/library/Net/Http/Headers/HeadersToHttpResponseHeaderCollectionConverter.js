'use strict';

import { Abstract } from '../../../Types/Abstract.js';
import { HttpResponseHeader } from './HttpResponseHeader.js';
import { HttpResponseHeaderCollection } from './HttpResponseHeaderCollection.js';

/**
 * Represents a converter converting headers into a collection of HTTP response headers.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HeadersToHttpResponseHeaderCollectionConverter extends Abstract
{
	/**
	 * Converts headers into a collection of HTTP response headers.
	 * @param {Headers} headers The headers to convert.
	 * @returns {HttpResponseHeaderCollection} The collection of HTTP response headers.
	 */
	convert( headers )
	{
		return new HttpResponseHeaderCollection(
			...headers.map(
				( fetchedHeaderName, fetchedHeaderValue, fetchedHeaderIndex ) =>
				{
					return new HttpResponseHeader( fetchedHeaderName, fetchedHeaderValue );
				}
			)
		);
	}
}
