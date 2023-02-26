'use strict';

import { HttpArgumentCollection } from './HttpArgumentCollection.js';

/**
 * Represents the handler of any HTTP POST argument collection HTTP POST argument iteration.
 * @callback HttpPostArgumentCollection_HttpPostArgumentIterationHandler
 * @param {HttpPostArgument} httpPostArgument The currently iterated HTTP POST argument.
 * @param {Number} httpPostArgumentIndex The index of the currently iterated HTTP POST argument.
 */

/**
 * Represents the handler of any HTTP POST argument collection HTTP POST argument comparison.
 * @callback HttpPostArgumentCollection_HttpPostArgumentComparisonHandler
 * @param {HttpPostArgument} httpPostArgument_1 The first HTTP POST argument to compare.
 * @param {HttpPostArgument} httpPostArgument_2 The second HTTP POST argument to compare.
 * @returns {Number} -1 if the first HTTP POST argument is lower than the second HTTP POST argument, 0 if the first HTTP POST argument is equal to the second HTTP POST argument and 1 if the first HTTP POST argument is greater than the second HTTP POST argument.
 */

/**
 * Represents the handler of any HTTP POST argument collection HTTP POST argument transformation.
 * @callback HttpPostArgumentCollection_HttpPostArgumentTransformationHandler
 * @param {HttpPostArgument} httpPostArgument The currently iterated HTTP POST argument.
 * @param {Number} httpPostArgumentIndex The index of the currently iterated HTTP POST argument.
 * @returns {*} The transformed HTTP POST argument.
 */

/**
 * Represents the handler of any HTTP POST argument collection HTTP POST argument determination.
 * @callback HttpPostArgumentCollection_HttpPostArgumentPredicateHandler
 * @param {HttpPostArgument} httpPostArgument The currently iterated HTTP POST argument.
 * @param {Number} httpPostArgumentIndex The index of the currently iterated HTTP POST argument.
 * @returns {Boolean} True if the iterated HTTP POST argument matches the predicate, otherwise false.
 */

/**
 * Represents a collection of HTTP POST arguments.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpPostArgumentCollection extends HttpArgumentCollection
{
	/**
	 * Constructor method.
	 * @param {...HttpArgument} httpPostArguments The initital HTTP POST arguments of the collection.
	 */
	constructor( ...httpPostArguments )
	{
		super( ...httpPostArguments );
	}

	/**
	 * Posts the amount of HTTP POST arguments in the collection.
	 * @returns {Number} The amount of HTTP POST arguments in the collection.
	 */
	get length()
	{
		return super.length;
	}

	/**
	 * Posts all HTTP POST arguments of the collection as a full URL encoded query string.
	 * @returns {String} The HTTP POST arguments of the collection as a full URL encoded query string.
	 */
	get fullHttpPostArgumentsString()
	{
		return super.fullHttpPostArgumentsString;
	}

	/**
	 * Creates the default predicate to compare specified HTTP POST arguments with a fetched HTTP POST argument of the HTTP POST argument collection for equality by their HTTP POST argument names.
	 * @param {...HttpPostArgument} httpPostArguments The HTTP POST argument to compare the fetched HTTP POST argument with.
	 * @returns {HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} The HTTP POST argument name equality predicates.
	 */
	_createArgumentNameEqualityPredicate( ...httpPostArguments )
	{
		return super._createArgumentNameEqualityPredicate( ...httpPostArguments );
	}

	/**
	 * Creates the default predicate to compare specified HTTP POST argument names with a fetched HTTP POST argument of the HTTP POST argument collection for equality by their HTTP POST argument names.
	 * @param {...String} httpPostArgumentNames The HTTP POST argument names to compare the fetched HTTP POST arguments with.
	 * @returns {HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} The HTTP POST argument name equality predicates.
	 */
	_createArgumentNameEqualityPredicateFromArgumentNames( ...httpPostArgumentNames )
	{
		return super._createArgumentNameEqualityPredicateFromArgumentNames( httpPostArgumentNames );
	}

	/**
	 * Invokes a specific iteration handler on every collection's HTTP POST argument.
	 * @param {HttpArgumentCollection_HttpArgumentIterationHandler} iterationHandler The iteration handler to invoke.
	 */
	forEach( iterationHandler )
	{
		super.forEach( iterationHandler );
	}

	/**
	 * Determines if the HTTP POST argument collection includes a specific HTTP POST argument.
	 * @param {HttpPostArgument} httpPostArgument The HTTP POST argument to search for.
	 * @returns {Boolean} True if the HTTP POST arguments is included in the HTTP POST argument collection, otherwise false.
	 */
	includes( httpPostArgument )
	{
		return super.includes( httpPostArgument );
	}

	/**
	 * Determines if the HTTP POST argument collection includes an HTTP POST argument specified by a variadic amount of predicates.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicates The predicates to determine the HTTP POST argument.
	 * @returns {Boolean} True if the HTTP POST argument is included in the HTTP POST argument collection, otherwise false.
	 */
	includesBy( ...predicates )
	{
		return super.includesBy( ...predicates );
	}

	/**
	 * Adds a variadic amount of HTTP POST arguments to the HTTP POST argument collection.
	 * @param {...HttpPostArgument} httpPostArguments The HTTP POST arguments to add.
	 */
	add( ...httpPostArguments )
	{
		super.add( ...httpPostArguments );
	}

	/**
	 * Replaces all HTTP POST arguments in the HTTP POST argument collection specified by their indices.
	 * @param {HttpPostArgument} httpPostArgumentReplacement The new HTTP POST argument to replace the HTTP POST arguments with.
	 * @param {...Number} indices The indices of the HTTP POST arguments to replace.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	replaceAt( httpPostArgumentReplacement, ...indices )
	{
		super.replaceAt( httpPostArgumentReplacement, ...indices );
	}

	/**
	 * Replaces the first occurences of a variadic amount of HTTP POST arguments in the HTTP POST argument collection with a specified HTTP POST argument.
	 * @param {HttpPostArgument} httpPostArgumentReplacement The new HTTP POST argument to replace the HTTP POST argument with.
	 * @param {...HttpPostArgument} httpPostArguments The HTTP POST arguments which has to be replaced.
	 */
	replace( httpPostArgumentReplacement, ...httpPostArguments )
	{
		super.replace( httpPostArgumentReplacement, ...httpPostArguments );
	}

	/**
	 * Replaces the first occurences of HTTP POST arguments in the HTTP POST argument collection specified by a variadic amount of predicates with a specified HTTP POST argument.
	 * @param {HttpPostArgument} httpPostArgumentReplacement The new HTTP POST argument to replace the HTTP POST argument with.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicates The predicates to determine the HTTP POST argument.
	 */
	replaceBy( httpPostArgumentReplacement, ...predicates )
	{
		super.replaceBy( httpPostArgumentReplacement, ...predicates );
	}

	/**
	 * Replaces a variadic amount of HTTP POST arguments in the HTTP POST argument collection with a specified HTTP POST argument.
	 * @param {HttpPostArgument} httpPostArgumentReplacement The new HTTP POST argument to replace the HTTP POST arguments with.
	 * @param {...HttpPostArgument} httpPostArguments The HTTP POST arguments which has to be replaced.
	 */
	replaceAll( httpPostArgumentReplacement, ...httpPostArguments )
	{
		super.replaceAll( httpPostArgumentReplacement, ...httpPostArguments );
	}

	/**
	 * Replaces all occurences of an HTTP POST argument in the HTTP POST argument collection specified by a variadic amount of predicates.
	 * @param {HttpPostArgument} httpPostArgumentReplacement The new HTTP POST argument to replace the HTTP POST arguments with.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicates The predicates to determine the HTTP POST arguments.
	 */
	replaceAllBy( httpPostArgumentReplacement, ...predicates )
	{
		super.replaceAllBy( httpPostArgumentReplacement, ...predicates );
	}

	/**
	 * Adds or replaces a variadic amount of HTTP POST arguments to / in the list. If an HTTP POST argument will be added if it does not exist. Otherwise it will be replaced.
	 * @param {...HttpPostArgument} httpPostArguments The HTTP POST arguments to add or replace.
	 */
	addOrReplace( ...httpPostArguments )
	{
		super.addOrReplace( ...httpPostArguments );
	}

	/**
	 * Removes HTTP POST arguments from the HTTP POST argument collection specified by a variadic amount of their indices.
	 * @param {...Number} indices The index of the HTTP POST argument to remove.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	removeAt( ...indices )
	{
		super.removeAt( ...indices );
	}

	/**
	 * Removes the first occurences of a varidadic amount of HTTP POST arguments from the HTTP POST argument collection.
	 * @param {...HttpPostArgument} httpPostArguments The HTTP POST arguments to remove.
	 */
	remove( ...httpPostArguments )
	{
		super.remove( ...httpPostArguments );
	}

	/**
	 * Removes the first occurence of an HTTP POST argument from the HTTP POST argument collection specified by a variadic amount of predicates.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicates The predicates to determine the HTTP POST argument.
	 */
	removeBy( ...predicates )
	{
		super.removeBy( ...predicates );
	}

	/**
	 * Removes the first occurence of an HTTP POST argument specified by their HTTP POST argument names.
	 * @param {...String} httpPostArgumentNames The names of the HTTP POST arguments to remove.
	 */
	removeByArgumentNames( ...httpPostArgumentNames )
	{
		super.removeByArgumentNames( ...httpPostArgumentNames );
	}

	/**
	 * Removes all occurences of a varidadic amount of HTTP POST arguments from the HTTP POST argument collection.
	 * @param {...HttpPostArgument} httpPostArguments The HTTP POST arguments to remove.
	 */
	removeAll( ...httpPostArguments )
	{
		super.removeAll( ...httpPostArguments );
	}

	/**
	 * Removes all occurences of HTTP POST arguments from the HTTP POST argument collection specified by a variadic amount of predicates.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicates The predicates to determine the HTTP POST arguments.
	 */
	removeAllBy( ...predicates )
	{
		super.removeAllBy( ...predicates );
	}

	/**
	 * Removes all occurences of HTTP POST arguments specified by their HTTP POST argument names.
	 * @param {...String} httpPostArgumentNames The names of the HTTP POST arguments to remove.
	 */
	removeAllByArgumentName( ...httpPostArgumentNames )
	{
		super.removeAllByArgumentName( ...httpPostArgumentNames );
	}

	/**
	 * Posts the first index of an HTTP POST argument.
	 * @param {HttpPostArgument} httpPostArgument The HTTP POST argument to determine its first index.
	 * @returns {undefined|Number} The first index of the HTTP POST argument, if found, otherwise undefined.
	 */
	findFirstIndexOf( httpPostArgument )
	{
		super.findFirstIndexOf( httpPostArgument );
	}

	/**
	 * Posts the first index of an HTTP POST argument specified by a variadic amount of predicates.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicates The predicates to determine the HTTP POST argument.
	 * @returns {undefined|Number} The first index of the HTTP POST argument, if found, otherwise undefined.
	 */
	findFirstIndexOfBy( ...predicates )
	{
		return super.findFirstIndexOfBy( ...predicates );
	}

	/**
	 * Posts the first index of an HTTP POST argument specified by its HTTP POST argument name.
	 * @param {String} httpPostArgumentName The HTTP POST argument name of the HTTP POST argument.
	 * @returns {undefined|Number} The first index of the HTTP POST argument, if found, otherwise undefined.
	 */
	findFirstIndexOfByArgumentName( httpPostArgumentName )
	{
		return super.findFirstIndexOfByArgumentName( httpPostArgumentName );
	}

	/**
	 * Posts the last index of an HTTP POST argument.
	 * @param {HttpPostArgument} httpPostArgument The HTTP POST argument to determine its last index.
	 * @returns {undefined|Number} The last index of the HTTP POST argument, if found, otherwise undefined.
	 */
	findLastIndexOf( httpPostArgument )
	{
		return super.findLastIndexOf( httpPostArgument );
	}

	/**
	 * Posts the last index of an HTTP POST argument specified by a variadic amount of predicates.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicates The predicates to determine the HTTP POST argument.
	 * @returns {undefined|Number} The last index of the HTTP POST argument, if found, otherwise undefined.
	 */
	findLastIndexOfBy( ...predicates )
	{
		return super.findLastIndexOfBy( ...predicates );
	}

	/**
	 * Posts the last index of an HTTP POST argument specified by its HTTP POST argument names.
	 * @param {String} httpPostArgumentName The HTTP POST argument name of the HTTP POST argument.
	 * @returns {undefined|Number} The last index of the HTTP POST argument, if found, otherwise undefined.
	 */
	findLastIndexOfByArgumentName( httpPostArgumentName )
	{
		return super.findLastIndexOfByArgumentName( httpPostArgumentName );
	}

	/**
	 * Posts all indices of specific HTTP POST arguments.
	 * @param {...HttpPostArgument} httpPostArguments The HTTP POST arguments to determine their indices.
	 * @returns {Collection<Number>} The indices of the HTTP POST arguments, if found, otherwise an empty collection.
	 */
	findAllIndicesOf( ...httpPostArguments )
	{
		return super.findAllIndicesOf( ...httpPostArguments );
	}

	/**
	 * Posts the indices of all occurences of any HTTP POST argument specified by a vadiadic amount of predicates.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicates The predicates to determine the HTTP POST arguments.
	 * @returns {Collection<Number>} The indices of the HTTP POST arguments, if found, otherwise an empty collection.
	 */
	findAllIndicesOfBy( ...predicates )
	{
		super.findAllIndicesOfBy( ...predicates );
	}

	/**
	 * Posts the indices of all occurences of any HTTP POST argument specified by a vadiadic amount of HTTP POST argument names.
	 * @param {...String} httpPostArgumentNames The HTTP POST argument names to determine the HTTP POST arguments.
	 * @returns {Collection<Number>} The indices of the HTTP POST arguments, if found, otherwise an empty collection.
	 */
	findAllIndicesOfByArgumentNames( ...httpPostArgumentNames )
	{
		super.findAllIndicesOfByArgumentNames( ...httpPostArgumentNames );
	}

	/**
	 * Posts an HTTP POST argument from the HTTP POST argument collection specified by its index.
	 * @param {Number} index The index of the HTTP POST argument.
	 * @returns {undefined|HttpPostArgument} The HTTP POST argument, if found.
	 */
	findAt( index )
	{
		return super.findAt( index );
	}

	/**
	 * Posts the first HTTP POST argument from the HTTP POST argument collection specified by a variadic amount of predicates.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicates The predicates to determine the HTTP POST argument.
	 * @returns {undefined|HttpPostArgument} The first HTTP POST argument, if found, otherwise undefined.
	 */
	findFirstOrUndefinedBy( ...predicates )
	{
		return super.findFirstOrUndefinedBy( ...predicates );
	}

	/**
	 * Posts the first HTTP POST argument from the HTTP POST argument collection specified by its HTTP POST argument name.
	 * @param {String} httpPostArgumentName The HTTP POST argument name to determine the HTTP POST argument.
	 * @returns {undefined|HttpPostArgument} The first HTTP POST argument, if found, otherwise undefined.
	 */
	findFirstOrUndefinedByArgumentName( httpPostArgumentName )
	{
		return super.findFirstOrUndefinedByArgumentName( httpPostArgumentName );
	}

	/**
	 * Posts the last HTTP POST argument from the HTTP POST argument collection specified by a variadic amount of predicates.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicates The predicates to determine the HTTP POST argument.
	 * @returns {undefined|HttpPostArgument} The last HTTP POST argument, if found, otherwise undefined.
	 */
	findLastOrUndefinedBy( ...predicates )
	{
		return super.findLastOrUndefinedBy( ...predicates );
	}

	/**
	 * Posts the last HTTP POST argument from the HTTP POST argument collection specified by its HTTP POST argument name.
	 * @param {String} httpPostArgumentName The HTTP POST argument name to determine the HTTP POST argument.
	 * @returns {undefined|HttpPostArgument} The last HTTP POST argument, if found, otherwise undefined.
	 */
	findLastOrUndefinedByArgumentName( httpPostArgumentName )
	{
		return super.findLastOrUndefinedByArgumentName( httpPostArgumentName );
	}

	/**
	 * Posts all HTTP POST arguments from the HTTP POST argument collection specified by a variadic amount of predicates.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicates The predicates to determine the HTTP POST arguments.
	 * @returns {HttpPostArgumentCollection<HttpPostArgument>} The HTTP POST arguments, if found, otherwise an empty HTTP POST argument collection.
	 */
	findAllBy( ...predicates )
	{
		return super.findAllBy( ...predicates );
	}

	/**
	 * Posts all HTTP POST arguments from the HTTP POST argument collection specified by their HTTP POST argument names.
	 * @param {...String} httpPostArgumentNames The HTTP POST argument names to determine the HTTP POST arguments.
	 * @returns {HttpPostArgumentCollection<HttpPostArgument>} The HTTP POST arguments, if found, otherwise an empty HTTP POST argument collection.
	 */
	findAllByArgumentNames( ...httpPostArgumentNames )
	{
		return super.findAllByArgumentNames( ...httpPostArgumentNames );
	}

	/**
	 * Sorts the HTTP POST argument collection.
	 */
	sort()
	{
		super.sort();
	}

	/**
	 * Sorts the HTTP header collection specified by a comparison handler.
	 * @param {HttpPostArgumentCollection_HttpPostArgumentComparisonHandler} comparisonHandler The comparison handler used to compare the HTTP headers.
	 */
	sortBy( comparisonHandler )
	{
		super.sortBy( comparisonHandler );
	}

	/**
	 * Maps all elements of the HTTP POST argument collection into a new collection.
	 * @param {HttpPostArgumentCollection_HttpPostArgumentTransformationHandler} transformationHandler The transformation handler used to map the HTTP POST argument collection.
	 * @returns {Collection<*>} The collection containing the transformed HTTP POST arguments.
	 */
	map( transformationHandler )
	{
		return super.map( transformationHandler );
	}

	/**
	 * Posts the array representation of the HTTP POST argument collection.
	 * @returns {HttpPostArgument[]} The array representation of the HTTP POST argument collection.
	 */
	toArray()
	{
		return super.toArray();
	}
}
