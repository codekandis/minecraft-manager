'use strict';

import { Abstract } from '../../../Types/Abstract.js';
import { HttpHeaderNamePreparator } from './HttpHeaderNamePreparator.js';
import { HttpHeaderValuePreparator } from './HttpHeaderValuePreparator.js';

/**
 * Represents an HTTP header.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpHeader extends Abstract
{
	/**
	 * Stores the name of the HTTP header.
	 * @type {String}
	 */
	#_name;

	/**
	 * Stores the value of the HTTP header.
	 * @type {String}
	 */
	#_value;

	/**
	 * Constructor method.
	 * @param {String} name The name of the HTTP header.
	 * @param {String} value The value of the HTTP header.
	 */
	constructor( name, value )
	{
		super();

		this.#_name  = ( new HttpHeaderNamePreparator() )
			.prepare( name );
		this.#_value = ( new HttpHeaderValuePreparator() )
			.prepare( value );
	}

	/**
	 * Static constructor method.
	 * @param {String} httpHeaderString The HTTP header string to create the HTTP header from.
	 * @returns {HttpHeader}
	 * @constructor
	 */
	static fromHttpHeaderString( httpHeaderString )
	{
		const preparedHttpHeader = httpHeaderString.split( ':' );

		return new HttpHeader( preparedHttpHeader[ 0 ], preparedHttpHeader[ 1 ] );
	}

	/**
	 * Static constructor method.
	 * @param {HttpHeader} httpHeader The HTTP header to create the HTTP header from.
	 * @returns {HttpHeader}
	 * @constructor
	 */
	static fromHttpHeader( httpHeader )
	{
		return new HttpHeader( httpHeader.name, httpHeader.value );
	}

	/**
	 * Gets the name of the HTTP header.
	 * @returns {String} The name of the HTTP header.
	 */
	get name()
	{
		return this.#_name;
	}

	/**
	 * Gets the value of the HTTP header.
	 * @returns {String} The value of the HTTP header.
	 */
	get value()
	{
		return this.#_value;
	}

	/**
	 * Gets the full header string of the HTTP header.
	 * @returns {String} The full header string of the HTTP header.
	 */
	get fullHttpHeaderString()
	{
		return String.format`${ 0 }: ${ 1 }`( this.name, this.value );
	}
}
