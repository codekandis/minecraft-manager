'use strict';

const Generator = Object.getPrototypeOf(
	function* ()
	{
	}
);

Generator.prototype.forEach = function ( iteratorHandler )
{
	let elementIndex = 0;
	for ( const elementValue of this )
	{
		iteratorHandler( elementValue, elementIndex++ );
	}
};
