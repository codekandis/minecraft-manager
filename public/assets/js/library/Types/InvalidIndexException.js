'use strict';

import Exception from './Exception.js';

class InvalidIndexException extends Exception
{
	static with_index( index )
	{
		return new InvalidIndexException( String.format`The index \`${ 0 }\` is invalid.`( index ) );
	}
}

export default InvalidIndexException;
