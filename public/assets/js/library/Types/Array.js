'use strict';

Array.prototype.remove = function ( element )
{
	const elementIndex = this.indexOf( element );

	if ( -1 === elementIndex )
	{
		return;
	}

	this.splice( elementIndex, 1 );
};

Array.prototype.findLastIndex = function ( predicate )
{
	return [ ...this ]
		.reverse()
		.findIndex( predicate );
};

Array.prototype.findFirstOrNull = function ( predicate )
{
	const foundElement = this.find( predicate );

	return undefined === foundElement
		? null
		: foundElement;
};

Array.prototype.findLastOrNull = function ( predicate )
{
	return [ ...this ]
		.reverse()
		.findFirstOrNull( predicate );
};
