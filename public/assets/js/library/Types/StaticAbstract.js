'use strict';

import InvalidStaticClassInstantiationException from './InvalidStaticClassInstantiationException.js';

class StaticAbstract
{
	constructor()
	{
		throw InvalidStaticClassInstantiationException.with_object( this );
	}
}

export default StaticAbstract;
