'use strict';

import { StaticAbstract } from '../Types/StaticAbstract.js';

/**
 * Represents a clipboard.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class Clipboard extends StaticAbstract
{
	/**
	 * Copies a specific text to the system's clipboard.
	 * @param {String} text The text to copy to the system's clipboard.
	 */
	static copyText( text )
	{
		navigator.clipboard.writeText( text );
	}
}
