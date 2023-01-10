'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `Headers`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Represents the handler of any header iteration.
 * @callback Headers_HeaderIterationHandler
 * @param {String} headerName The name of the currently iterated header.
 * @param {String} headerValue The value of the currently iterated header.
 * @param {Number} headerIndex The index of the currently iterated header.
 */

/**
 * Represents the handler of any header comparison.
 * @callback Headers_HeaderComparisonHandler
 * @param {Array.<String, String>} header_1 The first header to compare.
 * @param {Array.<String, String>} header_2 The second header to compare.
 * @returns {Number} -1 if the first header is lower than the second header, 0 if the first header is equal to the second header and 1 if the first header is greater than the second header.
 */

/**
 * Represents the handler of any header transformation.
 * @callback Headers_HeaderTransformationHandler
 * @param {String} headerName The name of the currently iterated header.
 * @param {String} headerValue The value of the currently iterated header.
 * @param {Number} headerIndex The index of the currently iterated header.
 * @returns {*} The transformed header.
 */

/**
 * Invokes a specific iteration handler on every header.
 * @method forEach
 * @memberOf Headers.prototype
 * @param {Headers_HeaderIterationHandler} iterationHandler The iteration handler to invoke.
 */
Object.defineProperty(
	Headers.prototype,
	'forEach',
	{
		value: function ( iterationHandler )
		       {
			       let fetchedHeaderIndex = 0;

			       for ( const fetchedHeader of this )
			       {
				       iterationHandler( fetchedHeader[ 0 ], fetchedHeader[ 1 ], fetchedHeaderIndex );
			       }

			       fetchedHeaderIndex++;
		       }
	}
);

/**
 * Transforms all headers into an array.
 * @method map
 * @memberOf Headers.prototype
 * @param {Headers_HeaderTransformationHandler} transformationHandler The transformation handler used to map the headers.
 * @returns {*[]} The array containing the transformed headers.
 */
Object.defineProperty(
	Headers.prototype,
	'map',
	{
		value: function ( transformationHandler )
		       {
			       const mappedHeaders    = [];
			       let fetchedHeaderIndex = 0;

			       for ( const fetchedHeader of this )
			       {
				       mappedHeaders.push(
					       transformationHandler( fetchedHeader[ 0 ], fetchedHeader[ 1 ], fetchedHeaderIndex )
				       );

				       fetchedHeaderIndex++;
			       }

			       return mappedHeaders;
		       }
	}
);
