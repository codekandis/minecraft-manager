'use strict';

import { HttpHeaderCollection } from './HttpHeaderCollection.js';

/**
 * Represents the handler of any HTTP request header collection HTTP request header iteration.
 * @callback HttpRequestHeaderCollection_HttpRequestHeaderIterationHandler
 * @param {HttpRequestHeader} httpRequestHeader The currently iterated HTTP request header.
 * @param {Number} httpRequestHeaderIndex The index of the currently iterated HTTP request header.
 */

/**
 * Represents the handler of any HTTP request header collection HTTP request header comparison.
 * @callback HttpRequestHeaderCollection_HttpRequestHeaderComparisonHandler
 * @param {HttpRequestHeader} httpRequestHeader_1 The first HTTP request header to compare.
 * @param {HttpRequestHeader} httpRequestHeader_2 The second HTTP request header to compare.
 * @returns {Number} -1 if the first HTTP request header is lower than the second HTTP request header, 0 if the first HTTP request header is equal to the second HTTP request header and 1 if the first HTTP request header is greater than the second HTTP request header.
 */

/**
 * Represents the handler of any HTTP request header collection HTTP request header transformation.
 * @callback HttpRequestHeaderCollection_HttpRequestHeaderTransformationHandler
 * @param {HttpRequestHeader} httpRequestHeader The currently iterated HTTP request header.
 * @param {Number} httpRequestHeaderIndex The index of the currently iterated HTTP request header.
 * @returns {*} The transformed HTTP request header.
 */

/**
 * Represents the handler of any HTTP request header collection HTTP request header determination.
 * @callback HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler
 * @param {HttpRequestHeader} httpRequestHeader The currently iterated HTTP request header.
 * @param {Number} httpRequestHeaderIndex The index of the currently iterated HTTP request header.
 * @returns {Boolean} True if the iterated HTTP request header matches the predicate, otherwise false.
 */

/**
 * Represents a collection of HTTP request headers.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpRequestHeaderCollection extends HttpHeaderCollection
{
	/**
	 * Constructor method.
	 * @param {...HttpHeader} httpRequestHeaders The initital HTTP request headers of the collection.
	 */
	constructor( ...httpRequestHeaders )
	{
		super( ...httpRequestHeaders );
	}

	/**
	 * Gets the amount of HTTP request headers in the collection.
	 * @returns {Number} The amount of HTTP request headers in the collection.
	 */
	get length()
	{
		return super.length;
	}

	/**
	 * Creates the default predicate to compare specified HTTP request headers with a fetched HTTP request header of the HTTP request header collection for equality by their HTTP request header names.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request header to compare the fetched HTTP request header with.
	 * @returns {HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} The HTTP request header name equality predicates.
	 */
	_createHeaderNameEqualityPredicate( ...httpRequestHeaders )
	{
		return super._createHeaderNameEqualityPredicate( ...httpRequestHeaders );
	}

	/**
	 * Creates the default predicate to compare specified HTTP request header names with a fetched HTTP request header of the HTTP request header collection for equality by their HTTP request header names.
	 * @param {...String} httpRequestHeaderNames The HTTP request header names to compare the fetched HTTP request headers with.
	 * @returns {HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} The HTTP request header name equality predicates.
	 */
	_createHeaderNameEqualityPredicateFromHeaderNames( ...httpRequestHeaderNames )
	{
		return super._createHeaderNameEqualityPredicateFromHeaderNames( httpRequestHeaderNames );
	}

	/**
	 * Invokes a specific iteration handler on every collection's HTTP request header.
	 * @param {HttpHeaderCollection_HttpHeaderIterationHandler} iterationHandler The iteration handler to invoke.
	 */
	forEach( iterationHandler )
	{
		super.forEach( iterationHandler );
	}

	/**
	 * Determines if the HTTP request header collection includes a specific HTTP request header.
	 * @param {HttpRequestHeader} httpRequestHeader The HTTP request header to search for.
	 * @returns {Boolean} True if the HTTP request headers is included in the HTTP request header collection, otherwise false.
	 */
	includes( httpRequestHeader )
	{
		return super.includes( httpRequestHeader );
	}

	/**
	 * Determines if the HTTP request header collection includes an HTTP request header specified by a variadic amount of predicates.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicates The predicates to determine the HTTP request header.
	 * @returns {Boolean} True if the HTTP request header is included in the HTTP request header collection, otherwise false.
	 */
	includesBy( ...predicates )
	{
		return super.includesBy( ...predicates );
	}

	/**
	 * Adds a variadic amount of HTTP request headers to the HTTP request header collection.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request headers to add.
	 */
	add( ...httpRequestHeaders )
	{
		super.add( ...httpRequestHeaders );
	}

	/**
	 * Replaces all HTTP request headers in the HTTP request header collection specified by their indices.
	 * @param {HttpRequestHeader} httpRequestHeaderReplacement The new HTTP request header to replace the HTTP request headers with.
	 * @param {...Number} indices The indices of the HTTP request headers to replace.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	replaceAt( httpRequestHeaderReplacement, ...indices )
	{
		super.replaceAt( httpRequestHeaderReplacement, ...indices );
	}

	/**
	 * Replaces the first occurences of a variadic amount of HTTP request headers in the HTTP request header collection with a specified HTTP request header.
	 * @param {HttpRequestHeader} httpRequestHeaderReplacement The new HTTP request header to replace the HTTP request header with.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request headers which has to be replaced.
	 */
	replace( httpRequestHeaderReplacement, ...httpRequestHeaders )
	{
		super.replace( httpRequestHeaderReplacement, ...httpRequestHeaders );
	}

	/**
	 * Replaces the first occurences of HTTP request headers in the HTTP request header collection specified by a variadic amount of predicates with a specified HTTP request header.
	 * @param {HttpRequestHeader} httpRequestHeaderReplacement The new HTTP request header to replace the HTTP request header with.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicates The predicates to determine the HTTP request header.
	 */
	replaceBy( httpRequestHeaderReplacement, ...predicates )
	{
		super.replaceBy( httpRequestHeaderReplacement, ...predicates );
	}

	/**
	 * Replaces a variadic amount of HTTP request headers in the HTTP request header collection with a specified HTTP request header.
	 * @param {HttpRequestHeader} httpRequestHeaderReplacement The new HTTP request header to replace the HTTP request headers with.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request headers which has to be replaced.
	 */
	replaceAll( httpRequestHeaderReplacement, ...httpRequestHeaders )
	{
		super.replaceAll( httpRequestHeaderReplacement, ...httpRequestHeaders );
	}

	/**
	 * Replaces all occurences of an HTTP request header in the HTTP request header collection specified by a variadic amount of predicates.
	 * @param {HttpRequestHeader} httpRequestHeaderReplacement The new HTTP request header to replace the HTTP request headers with.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicates The predicates to determine the HTTP request headers.
	 */
	replaceAllBy( httpRequestHeaderReplacement, ...predicates )
	{
		super.replaceAllBy( httpRequestHeaderReplacement, ...predicates );
	}

	/**
	 * Adds or replaces a variadic amount of HTTP request headers to / in the list. If an HTTP request header will be added if it does not exist. Otherwise it will be replaced.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request headers to add or replace.
	 */
	addOrReplace( ...httpRequestHeaders )
	{
		super.addOrReplace( ...httpRequestHeaders );
	}

	/**
	 * Removes HTTP request headers from the HTTP request header collection specified by a variadic amount of their indices.
	 * @param {...Number} indices The index of the HTTP request header to remove.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	removeAt( ...indices )
	{
		super.removeAt( ...indices );
	}

	/**
	 * Removes the first occurences of a varidadic amount of HTTP request headers from the HTTP request header collection.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request headers to remove.
	 */
	remove( ...httpRequestHeaders )
	{
		super.remove( ...httpRequestHeaders );
	}

	/**
	 * Removes the first occurence of an HTTP request header from the HTTP request header collection specified by a variadic amount of predicates.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicates The predicates to determine the HTTP request header.
	 */
	removeBy( ...predicates )
	{
		super.removeBy( ...predicates );
	}

	/**
	 * Removes the first occurence of an HTTP request header specified by their HTTP request header names.
	 * @param {...String} httpRequestHeaderNames The names of the HTTP request headers to remove.
	 */
	removeByHeaderNames( ...httpRequestHeaderNames )
	{
		super.removeByHeaderNames( ...httpRequestHeaderNames );
	}

	/**
	 * Removes all occurences of a varidadic amount of HTTP request headers from the HTTP request header collection.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request headers to remove.
	 */
	removeAll( ...httpRequestHeaders )
	{
		super.removeAll( ...httpRequestHeaders );
	}

	/**
	 * Removes all occurences of HTTP request headers from the HTTP request header collection specified by a variadic amount of predicates.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicates The predicates to determine the HTTP request headers.
	 */
	removeAllBy( ...predicates )
	{
		super.removeAllBy( ...predicates );
	}

	/**
	 * Removes all occurences of HTTP request headers specified by their HTTP request header names.
	 * @param {...String} httpRequestHeaderNames The names of the HTTP request headers to remove.
	 */
	removeAllByHeaderName( ...httpRequestHeaderNames )
	{
		super.removeAllByHeaderName( ...httpRequestHeaderNames );
	}

	/**
	 * Gets the first index of an HTTP request header.
	 * @param {HttpRequestHeader} httpRequestHeader The HTTP request header to determine its first index.
	 * @returns {undefined|Number} The first index of the HTTP request header, if found, otherwise undefined.
	 */
	findFirstIndexOf( httpRequestHeader )
	{
		super.findFirstIndexOf( httpRequestHeader );
	}

	/**
	 * Gets the first index of an HTTP request header specified by a variadic amount of predicates.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicates The predicates to determine the HTTP request header.
	 * @returns {undefined|Number} The first index of the HTTP request header, if found, otherwise undefined.
	 */
	findFirstIndexOfBy( ...predicates )
	{
		return super.findFirstIndexOfBy( ...predicates );
	}

	/**
	 * Gets the first index of an HTTP request header specified by its HTTP request header name.
	 * @param {String} httpRequestHeaderName The HTTP request header name of the HTTP request header.
	 * @returns {undefined|Number} The first index of the HTTP request header, if found, otherwise undefined.
	 */
	findFirstIndexOfByHeaderName( httpRequestHeaderName )
	{
		return super.findFirstIndexOfByHeaderName( httpRequestHeaderName );
	}

	/**
	 * Gets the last index of an HTTP request header.
	 * @param {HttpRequestHeader} httpRequestHeader The HTTP request header to determine its last index.
	 * @returns {undefined|Number} The last index of the HTTP request header, if found, otherwise undefined.
	 */
	findLastIndexOf( httpRequestHeader )
	{
		return super.findLastIndexOf( httpRequestHeader );
	}

	/**
	 * Gets the last index of an HTTP request header specified by a variadic amount of predicates.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicates The predicates to determine the HTTP request header.
	 * @returns {undefined|Number} The last index of the HTTP request header, if found, otherwise undefined.
	 */
	findLastIndexOfBy( ...predicates )
	{
		return super.findLastIndexOfBy( ...predicates );
	}

	/**
	 * Gets the last index of an HTTP request header specified by its HTTP request header names.
	 * @param {String} httpRequestHeaderName The HTTP request header name of the HTTP request header.
	 * @returns {undefined|Number} The last index of the HTTP request header, if found, otherwise undefined.
	 */
	findLastIndexOfByHeaderName( httpRequestHeaderName )
	{
		return super.findLastIndexOfByHeaderName( httpRequestHeaderName );
	}

	/**
	 * Gets all indices of specific HTTP request headers.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request headers to determine their indices.
	 * @returns {Collection<Number>} The indices of the HTTP request headers, if found, otherwise an empty collection.
	 */
	findAllIndicesOf( ...httpRequestHeaders )
	{
		return super.findAllIndicesOf( ...httpRequestHeaders );
	}

	/**
	 * Gets the indices of all occurences of any HTTP request header specified by a vadiadic amount of predicates.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicates The predicates to determine the HTTP request headers.
	 * @returns {Collection<Number>} The indices of the HTTP request headers, if found, otherwise an empty collection.
	 */
	findAllIndicesOfBy( ...predicates )
	{
		super.findAllIndicesOfBy( ...predicates );
	}

	/**
	 * Gets the indices of all occurences of any HTTP request header specified by a vadiadic amount of HTTP request header names.
	 * @param {...String} httpRequestHeaderNames The HTTP request header names to determine the HTTP request headers.
	 * @returns {Collection<Number>} The indices of the HTTP request headers, if found, otherwise an empty collection.
	 */
	findAllIndicesOfByHeaderNames( ...httpRequestHeaderNames )
	{
		super.findAllIndicesOfByHeaderNames( ...httpRequestHeaderNames );
	}

	/**
	 * Gets an HTTP request header from the HTTP request header collection specified by its index.
	 * @param {Number} index The index of the HTTP request header.
	 * @returns {undefined|HttpRequestHeader} The HTTP request header, if found.
	 */
	findAt( index )
	{
		return super.findAt( index );
	}

	/**
	 * Gets the first HTTP request header from the HTTP request header collection specified by a variadic amount of predicates.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicates The predicates to determine the HTTP request header.
	 * @returns {undefined|HttpRequestHeader} The first HTTP request header, if found, otherwise undefined.
	 */
	findFirstOrUndefinedBy( ...predicates )
	{
		return super.findFirstOrUndefinedBy( ...predicates );
	}

	/**
	 * Gets the first HTTP request header from the HTTP request header collection specified by its HTTP request header name.
	 * @param {String} httpRequestHeaderName The HTTP request header name to determine the HTTP request header.
	 * @returns {undefined|HttpRequestHeader} The first HTTP request header, if found, otherwise undefined.
	 */
	findFirstOrUndefinedByHeaderName( httpRequestHeaderName )
	{
		return super.findFirstOrUndefinedByHeaderName( httpRequestHeaderName );
	}

	/**
	 * Gets the last HTTP request header from the HTTP request header collection specified by a variadic amount of predicates.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicates The predicates to determine the HTTP request header.
	 * @returns {undefined|HttpRequestHeader} The last HTTP request header, if found, otherwise undefined.
	 */
	findLastOrUndefinedBy( ...predicates )
	{
		return super.findLastOrUndefinedBy( ...predicates );
	}

	/**
	 * Gets the last HTTP request header from the HTTP request header collection specified by its HTTP request header name.
	 * @param {String} httpRequestHeaderName The HTTP request header name to determine the HTTP request header.
	 * @returns {undefined|HttpRequestHeader} The last HTTP request header, if found, otherwise undefined.
	 */
	findLastOrUndefinedByHeaderName( httpRequestHeaderName )
	{
		return super.findLastOrUndefinedByHeaderName( httpRequestHeaderName );
	}

	/**
	 * Gets all HTTP request headers from the HTTP request header collection specified by a variadic amount of predicates.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicates The predicates to determine the HTTP request headers.
	 * @returns {HttpRequestHeaderCollection<HttpRequestHeader>} The HTTP request headers, if found, otherwise an empty HTTP request header collection.
	 */
	findAllBy( ...predicates )
	{
		return super.findAllBy( ...predicates );
	}

	/**
	 * Gets all HTTP request headers from the HTTP request header collection specified by their HTTP request header names.
	 * @param {...String} httpRequestHeaderNames The HTTP request header names to determine the HTTP request headers.
	 * @returns {HttpRequestHeaderCollection<HttpRequestHeader>} The HTTP request headers, if found, otherwise an empty HTTP request header collection.
	 */
	findAllByHeaderNames( ...httpRequestHeaderNames )
	{
		return super.findAllByHeaderNames( ...httpRequestHeaderNames );
	}

	/**
	 * Sorts the HTTP request header collection.
	 */
	sort()
	{
		super.sort();
	}

	/**
	 * Sorts the HTTP header collection specified by a comparison handler.
	 * @param {HttpRequestHeaderCollection_HttpRequestHeaderComparisonHandler} comparisonHandler The comparison handler used to compare the HTTP headers.
	 */
	sortBy( comparisonHandler )
	{
		super.sortBy( comparisonHandler );
	}

	/**
	 * Maps all elements of the HTTP request header collection into a new collection.
	 * @param {HttpRequestHeaderCollection_HttpRequestHeaderTransformationHandler} transformationHandler The transformation handler used to map the HTTP request header collection.
	 * @returns {Collection<*>} The collection containing the transformed HTTP request headers.
	 */
	map( transformationHandler )
	{
		return super.map( transformationHandler );
	}

	/**
	 * Gets the array representation of the HTTP request header collection.
	 * @returns {HttpRequestHeader[]} The array representation of the HTTP request header collection.
	 */
	toArray()
	{
		return super.toArray();
	}
}
