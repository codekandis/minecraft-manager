'use strict';

import Abstract from '../../../Types/Abstract.js';
import HttpArgumentNamePreparator from './HttpArgumentNamePreparator.js';

class HttpArgument extends Abstract
{
	#_name  = undefined;
	#_value = undefined;

	constructor( name, value )
	{
		super();

		this.#_name  = ( new HttpArgumentNamePreparator() )
			.prepare( name );
		this.#_value = value;
	}

	static fromHttpArgument( httpArgument )
	{
		return new HttpArgument( httpArgument.Name, httpArgument.Value )
	}

	get name()
	{
		return this.#_name;
	}

	get value()
	{
		return this.#_value;
	}

	get fullHttpArgumentString()
	{
		return String.format`${ 0 }=${ 1 }`(
			encodeURIComponent( this.name ),
			encodeURIComponent( this.value )
		);
	}
}

export default HttpArgument;
