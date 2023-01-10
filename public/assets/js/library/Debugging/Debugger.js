'use strict';

import { AbstractStatic } from '../Types/AbstractStatic.js';
import { DebugMode } from './DebugMode.js';

/**
 * Represents a debugger.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class Debugger extends AbstractStatic
{
	/**
	 * Logs a variadic amount of values.
	 * @param {...*} values The values to log.
	 */
	static log( ...values )
	{
		if ( DebugMode.ENABLED === DebugMode.mode )
		{
			if ( 0 === values.length )
			{
				console.log();

				return;
			}

			values.forEach(
				( value ) =>
				{
					console.log( value );
				}
			);
		}
	}
}
