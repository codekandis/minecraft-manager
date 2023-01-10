'use strict';

import { Exception } from '../Types/Exception.js';

export class InvalidDebugModeException extends Exception
{
	static with_debugMode( debugMode )
	{
		return new InvalidDebugModeException(
			String.format`The debug mode \`${ 0 }\` is invalid.`( debugMode )
		);
	}
}
