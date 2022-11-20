'use strict';

import InvalidIndexException from './InvalidIndexException.js';

String.empty = '';

String.format = function ( template, ...placeholders )
{
	return (
		( ...insertions ) =>
		{
			const result = [ template[ 0 ] ];

			placeholders.forEach(
				( key, index ) =>
				{
					if ( false === Number.isSafeInteger( key ) )
					{
						throw InvalidIndexException.with_index( key );
					}

					result.push( insertions[ key ], template[ index + 1 ] );
				}
			);

			return result.join( String.empty );
		}
	);
};
