'use strict';

import { Abstract } from '../../../Types/Abstract.js';

/**
 * Represnte an HTTP argument name preparator.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpArgumentNamePreparator extends Abstract
{
	/**
	 * Prepares an HTTP argument name.
	 * @param {String} httpArgumentName The HTTP argument name to prepare.
	 * @returns {String} The prepared HTTP argument name.
	 */
	prepare( httpArgumentName )
	{
		return httpArgumentName.trim();
	}
}
