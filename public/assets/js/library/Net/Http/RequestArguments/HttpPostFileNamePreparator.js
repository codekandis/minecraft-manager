'use strict';

import { Abstract } from '../../../Types/Abstract.js';

/**
 * Represents an HTTP POST file name preparator.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpPostFileNamePreparator extends Abstract
{
	/**
	 * Prepares an HTTP POST file name.
	 * @param {String} name The HTTP POST file name to prepare.
	 * @returns {String} The prepared HTTP POST file name.
	 */
	prepare( name )
	{
		return name.trim();
	}
}
