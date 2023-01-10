'use strict';

import { Abstract } from '../../../Types/Abstract.js';

/**
 * Represents an HTTP header name preparator.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpHeaderNamePreparator extends Abstract
{
	/**
	 * Prepares an HTTP header name.
	 * @param {String} httpHeaderName The HTTP header name to prepare.
	 * @returns {String} The prepared HTTP header name.
	 */
	prepare( httpHeaderName )
	{
		return httpHeaderName
			.trim()
			.toLowerCase();
	}
}
