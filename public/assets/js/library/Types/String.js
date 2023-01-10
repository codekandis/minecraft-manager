'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `String`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { InvalidIndexException } from './InvalidIndexException.js';

/**
 * Represents the replacement handler of the format method.
 * @callback String_ReplacementHandler
 * @param {...String} replacements The replacements to replace the placeholders with.
 * @returns {String} A new string with the placeholders replaced.
 * @throws {InvalidIndexException} A specific placeholder is invalid.
 */

/**
 * Stores an empty string.
 * @property {String} empty Stores an empty string
 * @memberOf String
 * @static
 */
Object.defineProperty(
	String,
	'empty',
	{
		value: ''
	}
);

/**
 * Trims a variadic amount of strings from the start and end of the string.
 * @method trimStrings
 * @memberOf String.prototype
 * @param {...String} strings The strings to trim.
 * @returns {String} The trimmed string.
 */
Object.defineProperty(
	String.prototype,
	'trimStrings',
	{
		value: function ( ...strings )
		       {
			       const preparedStrings = strings
				       .map(
					       ( fetchedString ) =>
					       {
						       return fetchedString.replace( '|', '\\|' );
					       }
				       )
				       .join( '|' );

			       return this
				       .replace(
					       new RegExp(
						       String.format`^(${ 0 })+`( preparedStrings )
					       ),
					       String.empty
				       )
				       .replace(
					       new RegExp(
						       String.format`(${ 0 })+$`( preparedStrings )
					       ),
					       String.empty
				       );
		       }
	}
);

/**
 * Trims a variadic amount of strings from the start of the string.
 * @method trimStringsFromStart
 * @memberOf String.prototype
 * @param {...String} strings The strings to trim.
 * @returns {String} The trimmed string.
 */
Object.defineProperty(
	String.prototype,
	'trimStringsFromStart',
	{
		value: function ( ...strings )
		       {
			       const preparedStrings = strings
				       .map(
					       ( fetchedString ) =>
					       {
						       return fetchedString.replace( '|', '\\|' );
					       }
				       )
				       .join( '|' );

			       return this
				       .replace(
					       new RegExp(
						       String.format`^(${ 0 })+`( preparedStrings )
					       ),
					       String.empty
				       );
		       }
	}
);

/**
 * Trims a variadic amount of strings from the start of the string.
 * @method trimStringsFromEnd
 * @memberOf String.prototype
 * @param {...String} strings The strings to trim.
 * @returns {String} The trimmed string.
 */
Object.defineProperty(
	String.prototype,
	'trimStringsFromEnd',
	{
		value: function ( ...strings )
		       {
			       const preparedStrings = strings
				       .map(
					       ( fetchedString ) =>
					       {
						       return fetchedString.replace( '|', '\\|' );
					       }
				       )
				       .join( '|' );

			       return this
				       .replace(
					       new RegExp(
						       String.format`(${ 0 })+$`( preparedStrings )
					       ),
					       String.empty
				       );
		       }
	}
);

/**
 * Formats a string with a variadic amount of placeholders and their respective replacements.
 * @method format
 * @memberOf String
 * @static
 * @param {String} template The template with the placeholders to format.
 * @param {...String} placeholders The placeholders to replace.
 * @returns {String_ReplacementHandler} The replacement handler.
 */
Object.defineProperty(
	String,
	'format',
	{
		value: function ( template, ...placeholders )
		       {
			       return ( ...replacements ) =>
			       {
				       const result = [ template[ 0 ] ];

				       placeholders.forEach(
					       ( fetchedPlaceholderValue, fetchedPlaceholderIndex ) =>
					       {
						       if ( false === Number.isSafeInteger( fetchedPlaceholderValue ) )
						       {
							       throw InvalidIndexException.with_index( fetchedPlaceholderValue );
						       }

						       result.add( replacements[ fetchedPlaceholderValue ], template[ fetchedPlaceholderIndex + 1 ] );
					       }
				       );

				       return result.join( String.empty );
			       };
		       }
	}
);
