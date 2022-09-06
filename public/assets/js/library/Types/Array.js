'use strict';

Array.prototype.one = function ( predicate )
{
	return this.every(
		( element ) =>
		{
			return predicate( element );
		}
	);
};

Array.prototype.remove = function ( element )
{
	const elementIndex = this.indexOf( element );

	if ( -1 === elementIndex )
	{
		return;
	}

	this.splice( elementIndex, 1 );
};
