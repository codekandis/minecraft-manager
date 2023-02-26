'use strict';

import { LogicException } from '../Types/LogicException.js';

/**
 * Represents an exception if an element does not exist in the DOM.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DomElementNotFoundException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param {String} selector The selector which cannot be resolved.
	 * @returns {DomElementNotFoundException}
	 * @constructor
	 */
	static with_unresolvableSelector( selector )
	{
		return new DomElementNotFoundException(
			String.format`The selector \`${ 0 }\` cannot be resolved.`( selector )
		);
	}

	/**
	 * Static constructor method.
	 * @param {HTMLElement} element The element which does not exist.
	 * @returns {DomElementNotFoundException}
	 * @constructor
	 */
	static with_element( element )
	{
		return new DomElementNotFoundException(
			String.format`The element \`${ 0 }\` does not exist.`( element )
		);
	}
}
