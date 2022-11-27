'use strict';

import InvalidIndexException from './InvalidIndexException.js';

String.empty = '';

String.prototype.trimCharacters = function ( characters )
{
	const preparedCharacters = [
		...new Set(
			characters.split( String.empty )
		)
	]
		.join( '|' );

	return this
		.replace(
			new RegExp( String.format`^(${ 0 })+`( preparedCharacters ) ),
			String.empty
		)
		.replace(
			new RegExp( String.format`(${ 0 })+$`( preparedCharacters ) ),
			String.empty
		);
};

String.prototype.trimCharactersFromStart = function ( characters )
{
	const preparedCharacters = [
		...new Set(
			characters.split( String.empty )
		)
	]
		.join( '|' );

	return this
		.replace(
			new RegExp( String.format`^(${ 0 })+`( preparedCharacters ) ),
			String.empty
		);
};

String.prototype.trimCharactersFromEnd = function ( characters )
{
	const preparedCharacters = [
		...new Set(
			characters.split( String.empty )
		)
	]
		.join( '|' );

	return this
		.replace(
			new RegExp( String.format`(${ 0 })+$`( preparedCharacters ) ),
			String.empty
		);
};

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
