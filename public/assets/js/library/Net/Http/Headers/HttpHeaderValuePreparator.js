'use strict';

import { Abstract } from '../../../Types/Abstract.js';

/**
 * Represents an HTTP header value preparator.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpHeaderValuePreparator extends Abstract
{
	/**
	 * Prepares an HTTP header value.
	 * @param {String} httpHeaderValue The HTTP header value to prepare.
	 * @returns {String} The prepared HTTP header value.
	 */
	prepare( httpHeaderValue )
	{
		return httpHeaderValue.trimStart();
	}
}
