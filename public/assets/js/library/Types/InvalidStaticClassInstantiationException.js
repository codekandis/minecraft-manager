'use strict';

import Exception from './Exception.js';

class InvalidStaticClassInstantiationException extends Exception
{
	static with_className( className )
	{
		return new InvalidStaticClassInstantiationException(
			String.format`The static class \`${ 0 }\` cannot be instantiated.`( className )
		);
	}

	static with_object( obj )
	{
		return InvalidStaticClassInstantiationException.with_className( obj.__proto__.constructor.name );
	}
}

export default InvalidStaticClassInstantiationException;
