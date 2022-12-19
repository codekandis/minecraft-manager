'use strict';

FileList.prototype.map = function ( iteratorHandler )
{
	return [ ...this ].map( iteratorHandler );
};
