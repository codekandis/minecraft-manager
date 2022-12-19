'use strict';

import Exception from '../Types/Exception.js';

class UnknownUrlPartialException extends Exception
{
	static with_urlPartial( urlPartial )
	{
		return new UnknownUrlPartialException(
			String.format`The partial URL \`${ 0 }\` is invalid.`( urlPartial )
		);
	}
}

export default UnknownUrlPartialException;
