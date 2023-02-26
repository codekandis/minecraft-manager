'use strict';

import { AbstractStatic } from '../Types/AbstractStatic.js';

/**
 * Represents an enumeration of DOM insert positions.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DomInsertPosition extends AbstractStatic
{
	/**
	 * Specifies that new elements must be inserted before an element.
	 * @returns {String} The new elements must be inserted before an element.
	 */
	static get BEFORE()
	{
		return 'BEFORE';
	}

	/**
	 * Specifies that new elements must be inserted after an element.
	 * @returns {String} The new elements must be inserted after an element.
	 */
	static get AFTER()
	{
		return 'AFTER';
	}
}
