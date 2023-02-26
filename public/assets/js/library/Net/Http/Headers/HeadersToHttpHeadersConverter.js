'use strict';

import { Abstract } from '../../../Types/Abstract.js';
import { HttpHeader } from './HttpHeader.js';

/**
 * Represents a converter converting headers into a collection of HTTP headers.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HeadersToHttpRequestConverter extends Abstract
{
	/**
	 * Converts headers into an array of HTTP headers.
	 * @param {Headers} headers The headers to convert.
	 * @returns {HttpHeader[]} The array of HTTP headers.
	 */
	convert( headers )
	{
		return headers.map(
			( fetchedHeaderName, fetchedHeaderValue, fetchedHeaderIndex ) =>
			{
				return new HttpHeader( fetchedHeaderName, fetchedHeaderValue );
			}
		);
	}
}
