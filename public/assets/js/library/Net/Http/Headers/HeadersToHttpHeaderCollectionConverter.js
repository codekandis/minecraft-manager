'use strict';

import { Abstract } from '../../../Types/Abstract.js';
import { HttpHeader } from './HttpHeader.js';
import { HttpHeaderCollection } from './HttpHeaderCollection.js';

/**
 * Represents a converter converting headers into a collection of HTTP headers.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HeadersToHttpHeaderCollectionConverter extends Abstract
{
	/**
	 * Converts headers into a collection of HTTP headers.
	 * @param {Headers} headers The headers to convert.
	 * @returns {HttpHeaderCollection} The collection of HTTP headers.
	 */
	convert( headers )
	{
		return new HttpHeaderCollection(
			...headers.map(
				( fetchedHeaderName, fetchedHeaderValue, fetchedHeaderIndex ) =>
				{
					return new HttpHeader( fetchedHeaderName, fetchedHeaderValue );
				}
			)
		);
	}
}
