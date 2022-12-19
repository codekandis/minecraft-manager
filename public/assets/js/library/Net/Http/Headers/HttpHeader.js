'use strict';

import Abstract from '../../../Types/Abstract.js';
import HttpHeaderNamePreparator from './HttpHeaderNamePreparator.js';
import HttpHeaderValuePreparator from './HttpHeaderValuePreparator.js';

class HttpHeader extends Abstract
{
	#_name  = undefined;
	#_value = undefined;

	constructor( name, value )
	{
		super();

		this.#_name  = ( new HttpHeaderNamePreparator() )
			.prepare( name );
		this.#_value = ( new HttpHeaderValuePreparator() )
			.prepare( value );
	}

	static fromHttpHeaderString( httpHeaderString )
	{
		const preparedHttpHeader = httpHeaderString.split( ':' );

		return new HttpHeader( preparedHttpHeader[ 0 ], preparedHttpHeader[ 1 ] );
	}

	static fromHttpHeader( httpHeader )
	{
		return new HttpHeader( httpHeader.name, httpHeader.value );
	}

	get name()
	{
		return this.#_name;
	}

	get value()
	{
		return this.#_value;
	}

	get fullHttpHeaderString()
	{
		return String.format`${ 0 }: ${ 1 }`( this.name, this.value );
	}
}

export default HttpHeader;
