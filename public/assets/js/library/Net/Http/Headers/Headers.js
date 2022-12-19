'use strict';

Headers.prototype.map = function ( iteratorHandler )
{
	return [ ...this ].map( iteratorHandler );
};
