'use strict';

import { InvalidStaticClassInstantiationException } from './InvalidStaticClassInstantiationException.js';

export class StaticAbstract
{
	constructor()
	{
		throw InvalidStaticClassInstantiationException.with_object( this );
	}
}
