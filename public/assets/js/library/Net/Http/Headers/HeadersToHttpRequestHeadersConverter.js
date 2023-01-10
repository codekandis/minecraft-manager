'use strict';

import { Abstract } from '../../../Types/Abstract.js';
import { HttpRequestHeader } from './HttpRequestHeader.js';

/**
 * Represents a converter converting headers into a collection of HTTP request headers.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HeadersToHttpRequestHeadersConverter extends Abstract
{
	/**
	 * Converts headers into an array of HTTP request headers.
	 * @param {Headers} headers The headers to convert.
	 * @returns {HttpRequestHeader[]} The array of HTTP request headers.
	 */
	convert( headers )
	{
		return headers.map(
			( fetchedHeaderName, fetchedHeaderValue, fetchedHeaderIndex ) =>
			{
				return new HttpRequestHeader( fetchedHeaderName, fetchedHeaderValue );
			}
		);
	}
}
