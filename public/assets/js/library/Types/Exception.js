'use strict';

export class Exception extends Error
{
	#_message = undefined;

	constructor( message )
	{
		super( message );

		this.#_message = message;
	}
}
