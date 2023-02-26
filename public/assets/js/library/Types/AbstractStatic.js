'use strict';

import { InvalidStaticClassInstantiationException } from './InvalidStaticClassInstantiationException.js';

/**
 * Represents the base class of any static class.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractStatic
{
	/**
	 * Constructor method.
	 * @throws {InvalidStaticClassInstantiationException} The nonstatic class must not be instantiated.
	 */
	constructor()
	{
		throw InvalidStaticClassInstantiationException.with_object( this );
	}
}
