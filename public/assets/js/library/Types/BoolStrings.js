'use strict';

import { StaticAbstract } from './StaticAbstract.js';

/**
 * Represents an enumeration of boolean string representations.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class BoolStrings extends StaticAbstract
{
	/**
	 * Gets the boolean string representation of the value `false`.
	 * @returns {String} The boolean string representation of the value `false`.
	 */
	static get FALSE()
	{
		return 'FALSE';
	}

	/**
	 * Gets the boolean string representation of the value `true`.
	 * @returns {String} The boolean string representation of the value `true`.
	 */
	static get TRUE()
	{
		return 'TRUE';
	}
}
