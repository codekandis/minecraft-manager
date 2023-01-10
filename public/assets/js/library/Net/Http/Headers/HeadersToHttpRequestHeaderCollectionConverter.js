'use strict';

import { Abstract } from '../../../Types/Abstract.js';
import { HttpRequestHeader } from './HttpRequestHeader.js';
import { HttpRequestHeaderCollection } from './HttpRequestHeaderCollection.js';

/**
 * Represents a converter converting headers into a collection of HTTP request headers.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HeadersToHttpRequestHeaderCollectionConverter extends Abstract
{
	/**
	 * Converts headers into a collection of HTTP request headers.
	 * @param {Headers} headers The headers to convert.
	 * @returns {HttpRequestHeaderCollection} The collection of HTTP request headers.
	 */
	convert( headers )
	{
		return new HttpRequestHeaderCollection(
			...headers.map(
				( fetchedHeaderName, fetchedHeaderValue, fetchedHeaderIndex ) =>
				{
					return new HttpRequestHeader( fetchedHeaderName, fetchedHeaderValue );
				}
			)
		);
	}
}
