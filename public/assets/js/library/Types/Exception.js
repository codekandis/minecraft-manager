'use strict';

class Exception extends Error
{
	#_message = undefined;

	constructor( message )
	{
		super( message );

		this.#_message = message;
	}
}

export default Exception;
