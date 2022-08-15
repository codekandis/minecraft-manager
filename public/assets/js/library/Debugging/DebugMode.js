'use strict';

import StaticAbstract from '../Types/StaticAbstract.js';
import InvalidDebugModeException from './InvalidDebugModeException.js';

class DebugMode extends StaticAbstract
{
	static get DISABLED()
	{
		return 'DISABLED';
	}

	static get ENABLED()
	{
		return 'ENABLED';
	}

	static #_mode            = DebugMode.DISABLED;
	static #_validDebugModes = [
		DebugMode.DISABLED,
		DebugMode.ENABLED
	];

	static get mode()
	{
		return DebugMode.#_mode;
	}

	static set mode( value )
	{
		if ( false === DebugMode.#_validDebugModes.includes( value ) )
		{
			throw InvalidDebugModeException.with_debugMode( value );
		}

		DebugMode.#_mode = value;
	}

	static enable()
	{
		DebugMode.mode = DebugMode.ENABLED;
	}

	static disable()
	{
		DebugMode.mode = DebugMode.DISABLED;
	}
}

export default DebugMode;
