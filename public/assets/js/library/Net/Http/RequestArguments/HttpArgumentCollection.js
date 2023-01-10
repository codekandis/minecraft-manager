'use strict';

import { Collection } from '../../../Collections/Collection.js';
import { HttpArgumentNamePreparator } from './HttpArgumentNamePreparator.js';

/**
 * Represents the handler of any HTTP argument collection HTTP argument iteration.
 * @callback HttpArgumentCollection_HttpArgumentIterationHandler
 * @param {HttpArgument} httpArgument The currently iterated HTTP argument.
 * @param {Number} httpArgumentIndex The index of the currently iterated HTTP argument.
 */

/**
 * Represents the handler of any HTTP argument collection HTTP argument comparison.
 * @callback HttpArgumentCollection_HttpArgumentComparisonHandler
 * @param {HttpArgument} httpArgument_1 The first HTTP argument to compare.
 * @param {HttpArgument} httpArgument_2 The second HTTP argument to compare.
 * @returns {Number} -1 if the first HTTP argument is lower than the second HTTP argument, 0 if the first HTTP argument is equal to the second HTTP argument and 1 if the first HTTP argument is greater than the second HTTP argument.
 */

/**
 * Represents the handler of any HTTP argument collection HTTP argument transformation.
 * @callback HttpArgumentCollection_HttpArgumentTransformationHandler
 * @param {HttpArgument} httpArgument The currently iterated HTTP argument.
 * @param {Number} httpArgumentIndex The index of the currently iterated HTTP argument.
 * @returns {*} The transformed HTTP argument.
 */

/**
 * Represents the handler of any HTTP argument collection HTTP argument determination.
 * @callback HttpArgumentCollection_HttpArgumentPredicateHandler
 * @param {HttpArgument} httpArgument The currently iterated HTTP argument.
 * @param {Number} httpArgumentIndex The index of the currently iterated HTTP argument.
 * @returns {Boolean} True if the iterated HTTP argument matches the predicate, otherwise false.
 */

/**
 * Represents a collection of HTTP arguments.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpArgumentCollection extends Collection
{
	/**
	 * Constructor method.
	 * @param {...HttpArgument} httpArguments The initital HTTP arguments of the collection.
	 */
	constructor( ...httpArguments )
	{
		super( ...httpArguments );
	}

	/**
	 * Gets the amount of HTTP arguments in the collection.
	 * @returns {Number} The amount of HTTP arguments in the collection.
	 */
	get length()
	{
		return super.length;
	}

	/**
	 * Creates the default predicate to compare specified HTTP arguments with a fetched HTTP argument of the HTTP argument collection for equality by their HTTP argument names.
	 * @param {...HttpArgument} httpArguments The HTTP argument to compare the fetched HTTP argument with.
	 * @returns {HttpArgumentCollection_HttpArgumentPredicateHandler} The HTTP argument name equality predicates.
	 */
	_createArgumentNameEqualityPredicate( ...httpArguments )
	{
		return ( fetchedHttpArgument ) =>
		{
			return httpArguments.every(
				( fetchedPassedHttpArgument ) =>
				{
					return fetchedPassedHttpArgument.name === fetchedHttpArgument.name;
				}
			);
		};
	}

	/**
	 * Creates the default predicate to compare specified HTTP argument names with a fetched HTTP argument of the HTTP argument collection for equality by their HTTP argument names.
	 * @param {...String} httpArgumentNames The HTTP argument names to compare the fetched HTTP arguments with.
	 * @returns {HttpArgumentCollection_HttpArgumentPredicateHandler} The HTTP argument name equality predicates.
	 */
	_createArgumentNameEqualityPredicateFromArgumentNames( ...httpArgumentNames )
	{
		const httpArgumentNamePreparator = new HttpArgumentNamePreparator();

		return ( fetchedHttpArgument ) =>
		{
			return httpArgumentNames.every(
				( fetchedHttpArgumentName ) =>
				{
					const preparedHttpArgumentName = httpArgumentNamePreparator.prepare( fetchedHttpArgumentName );

					return preparedHttpArgumentName === fetchedHttpArgument.name;
				}
			);
		};
	}

	/**
	 * Invokes a specific iteration handler on every collection's HTTP argument.
	 * @param {HttpArgumentCollection_HttpArgumentIterationHandler} iterationHandler The iteration handler to invoke.
	 */
	forEach( iterationHandler )
	{
		super.forEach( iterationHandler );
	}

	/**
	 * Determines if the HTTP argument collection includes a specific HTTP argument.
	 * @param {HttpArgument} httpArgument The HTTP argument to search for.
	 * @returns {Boolean} True if the HTTP arguments is included in the HTTP argument collection, otherwise false.
	 */
	includes( httpArgument )
	{
		return undefined !== this.findFirstOrUndefinedBy(
			this._createArgumentNameEqualityPredicate( httpArgument )
		);
	}

	/**
	 * Determines if the HTTP argument collection includes an HTTP argument specified by a variadic amount of predicates.
	 * @param {...HttpArgumentCollection_HttpArgumentPredicateHandler} predicates The predicates to determine the HTTP argument.
	 * @returns {Boolean} True if the HTTP argument is included in the HTTP argument collection, otherwise false.
	 */
	includesBy( ...predicates )
	{
		return undefined !== this.findFirstOrUndefinedBy( ...predicates );
	}

	/**
	 * Adds a variadic amount of HTTP arguments to the HTTP argument collection.
	 * @param {...HttpArgument} httpArguments The HTTP arguments to add.
	 */
	add( ...httpArguments )
	{
		super.add( ...httpArguments );
	}

	/**
	 * Replaces all HTTP arguments in the HTTP argument collection specified by their indices.
	 * @param {HttpArgument} httpArgumentReplacement The new HTTP argument to replace the HTTP arguments with.
	 * @param {...Number} indices The indices of the HTTP arguments to replace.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	replaceAt( httpArgumentReplacement, ...indices )
	{
		super.replaceAt( httpArgumentReplacement, ...indices );
	}

	/**
	 * Replaces the first occurences of a variadic amount of HTTP arguments in the HTTP argument collection with a specified HTTP argument.
	 * @param {HttpArgument} httpArgumentReplacement The new HTTP argument to replace the HTTP argument with.
	 * @param {...HttpArgument} httpArguments The HTTP arguments which has to be replaced.
	 */
	replace( httpArgumentReplacement, ...httpArguments )
	{
		super.replace( httpArgumentReplacement, ...httpArguments );
	}

	/**
	 * Replaces the first occurences of HTTP arguments in the HTTP argument collection specified by a variadic amount of predicates with a specified HTTP argument.
	 * @param {HttpArgument} httpArgumentReplacement The new HTTP argument to replace the HTTP argument with.
	 * @param {...HttpArgumentCollection_HttpArgumentPredicateHandler} predicates The predicates to determine the HTTP argument.
	 */
	replaceBy( httpArgumentReplacement, ...predicates )
	{
		super.replaceBy( httpArgumentReplacement, ...predicates );
	}

	/**
	 * Replaces a variadic amount of HTTP arguments in the HTTP argument collection with a specified HTTP argument.
	 * @param {HttpArgument} httpArgumentReplacement The new HTTP argument to replace the HTTP arguments with.
	 * @param {...HttpArgument} httpArguments The HTTP arguments which has to be replaced.
	 */
	replaceAll( httpArgumentReplacement, ...httpArguments )
	{
		this.replaceAllBy(
			httpArgumentReplacement,
			this._createArgumentNameEqualityPredicate( ...httpArguments )
		);
	}

	/**
	 * Replaces all occurences of an HTTP argument in the HTTP argument collection specified by a variadic amount of predicates.
	 * @param {HttpArgument} httpArgumentReplacement The new HTTP argument to replace the HTTP arguments with.
	 * @param {...HttpArgumentCollection_HttpArgumentPredicateHandler} predicates The predicates to determine the HTTP arguments.
	 */
	replaceAllBy( httpArgumentReplacement, ...predicates )
	{
		super.replaceAllBy( httpArgumentReplacement, ...predicates );
	}

	/**
	 * Adds or replaces a variadic amount of HTTP arguments to / in the list. If an HTTP argument will be added if it does not exist. Otherwise it will be replaced.
	 * @param {...HttpArgument} httpArguments The HTTP arguments to add or replace.
	 */
	addOrReplace( ...httpArguments )
	{
		httpArguments.forEach(
			( fetchedHttpArgument ) =>
			{
				const foundHttpArgumentIndex = this.findFirstIndexOfBy(
					this._createArgumentNameEqualityPredicate( fetchedHttpArgument )
				);

				if ( undefined === foundHttpArgumentIndex )
				{
					this.add( fetchedHttpArgument );

					return;
				}

				this.replaceAt( fetchedHttpArgument, foundHttpArgumentIndex );
			}
		);
	}

	/**
	 * Removes HTTP arguments from the HTTP argument collection specified by a variadic amount of their indices.
	 * @param {...Number} indices The index of the HTTP argument to remove.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	removeAt( ...indices )
	{
		super.removeAt( ...indices );
	}

	/**
	 * Removes the first occurences of a varidadic amount of HTTP arguments from the HTTP argument collection.
	 * @param {...HttpArgument} httpArguments The HTTP arguments to remove.
	 */
	remove( ...httpArguments )
	{
		this.removeBy(
			this._createArgumentNameEqualityPredicate( ...httpArguments )
		);
	}

	/**
	 * Removes the first occurence of an HTTP argument from the HTTP argument collection specified by a variadic amount of predicates.
	 * @param {...HttpArgumentCollection_HttpArgumentPredicateHandler} predicates The predicates to determine the HTTP argument.
	 */
	removeBy( ...predicates )
	{
		super.removeBy( ...predicates );
	}

	/**
	 * Removes the first occurence of an HTTP argument specified by their HTTP argument names.
	 * @param {...String} httpArgumentNames The names of the HTTP arguments to remove.
	 */
	removeByArgumentNames( ...httpArgumentNames )
	{
		this.removeBy(
			this._createArgumentNameEqualityPredicateFromArgumentNames( ...httpArgumentNames )
		);
	}

	/**
	 * Removes all occurences of a varidadic amount of HTTP arguments from the HTTP argument collection.
	 * @param {...HttpArgument} httpArguments The HTTP arguments to remove.
	 */
	removeAll( ...httpArguments )
	{
		this.removeAllBy(
			this._createArgumentNameEqualityPredicate( ...httpArguments )
		);
	}

	/**
	 * Removes all occurences of HTTP arguments from the HTTP argument collection specified by a variadic amount of predicates.
	 * @param {...HttpArgumentCollection_HttpArgumentPredicateHandler} predicates The predicates to determine the HTTP arguments.
	 */
	removeAllBy( ...predicates )
	{
		super.removeAllBy( ...predicates );
	}

	/**
	 * Removes all occurences of HTTP arguments specified by their HTTP argument names.
	 * @param {...String} httpArgumentNames The names of the HTTP arguments to remove.
	 */
	removeAllByArgumentName( ...httpArgumentNames )
	{
		this.removeAllBy(
			this._createArgumentNameEqualityPredicateFromArgumentNames( ...httpArgumentNames )
		);
	}

	/**
	 * Gets the first index of an HTTP argument.
	 * @param {HttpArgument} httpArgument The HTTP argument to determine its first index.
	 * @returns {undefined|Number} The first index of the HTTP argument, if found, otherwise undefined.
	 */
	findFirstIndexOf( httpArgument )
	{
		return this.findFirstIndexOfBy(
			this._createArgumentNameEqualityPredicate( httpArgument )
		);
	}

	/**
	 * Gets the first index of an HTTP argument specified by a variadic amount of predicates.
	 * @param {...HttpArgumentCollection_HttpArgumentPredicateHandler} predicates The predicates to determine the HTTP argument.
	 * @returns {undefined|Number} The first index of the HTTP argument, if found, otherwise undefined.
	 */
	findFirstIndexOfBy( ...predicates )
	{
		return super.findFirstIndexOfBy( ...predicates );
	}

	/**
	 * Gets the first index of an HTTP argument specified by its HTTP argument name.
	 * @param {String} httpArgumentName The HTTP argument name of the HTTP argument.
	 * @returns {undefined|Number} The first index of the HTTP argument, if found, otherwise undefined.
	 */
	findFirstIndexOfByArgumentName( httpArgumentName )
	{
		return super.findFirstIndexOfBy(
			this._createArgumentNameEqualityPredicateFromArgumentNames( httpArgumentName )
		);
	}

	/**
	 * Gets the last index of an HTTP argument.
	 * @param {HttpArgument} httpArgument The HTTP argument to determine its last index.
	 * @returns {undefined|Number} The last index of the HTTP argument, if found, otherwise undefined.
	 */
	findLastIndexOf( httpArgument )
	{
		return this.findLastIndexOfBy(
			this._createArgumentNameEqualityPredicate( httpArgument )
		);
	}

	/**
	 * Gets the last index of an HTTP argument specified by a variadic amount of predicates.
	 * @param {...HttpArgumentCollection_HttpArgumentPredicateHandler} predicates The predicates to determine the HTTP argument.
	 * @returns {undefined|Number} The last index of the HTTP argument, if found, otherwise undefined.
	 */
	findLastIndexOfBy( ...predicates )
	{
		return super.findLastIndexOfBy( ...predicates );
	}

	/**
	 * Gets the last index of an HTTP argument specified by its HTTP argument names.
	 * @param {String} httpArgumentName The HTTP argument name of the HTTP argument.
	 * @returns {undefined|Number} The last index of the HTTP argument, if found, otherwise undefined.
	 */
	findLastIndexOfByArgumentName( httpArgumentName )
	{
		return super.findLastIndexOfBy(
			this._createArgumentNameEqualityPredicateFromArgumentNames( httpArgumentName )
		);
	}

	/**
	 * Gets all indices of specific HTTP arguments.
	 * @param {...HttpArgument} httpArguments The HTTP arguments to determine their indices.
	 * @returns {Collection<Number>} The indices of the HTTP arguments, if found, otherwise an empty collection.
	 */
	findAllIndicesOf( ...httpArguments )
	{
		return this.findAllIndicesOfBy(
			this._createArgumentNameEqualityPredicate( ...httpArguments )
		);
	}

	/**
	 * Gets the indices of all occurences of any HTTP argument specified by a vadiadic amount of predicates.
	 * @param {...HttpArgumentCollection_HttpArgumentPredicateHandler} predicates The predicates to determine the HTTP arguments.
	 * @returns {Collection<Number>} The indices of the HTTP arguments, if found, otherwise an empty collection.
	 */
	findAllIndicesOfBy( ...predicates )
	{
		super.findAllIndicesOfBy( ...predicates );
	}

	/**
	 * Gets the indices of all occurences of any HTTP argument specified by a vadiadic amount of HTTP argument names.
	 * @param {...String} httpArgumentNames The HTTP argument names to determine the HTTP arguments.
	 * @returns {Collection<Number>} The indices of the HTTP arguments, if found, otherwise an empty collection.
	 */
	findAllIndicesOfByArgumentNames( ...httpArgumentNames )
	{
		super.findAllIndicesOfBy(
			this._createArgumentNameEqualityPredicateFromArgumentNames( ...httpArgumentNames )
		);
	}

	/**
	 * Gets an HTTP argument from the HTTP argument collection specified by its index.
	 * @param {Number} index The index of the HTTP argument.
	 * @returns {undefined|HttpArgument} The HTTP argument, if found.
	 */
	findAt( index )
	{
		return super.findAt( index );
	}

	/**
	 * Gets the first HTTP argument from the HTTP argument collection specified by a variadic amount of predicates.
	 * @param {...HttpArgumentCollection_HttpArgumentPredicateHandler} predicates The predicates to determine the HTTP argument.
	 * @returns {undefined|HttpArgument} The first HTTP argument, if found, otherwise undefined.
	 */
	findFirstOrUndefinedBy( ...predicates )
	{
		return super.findFirstOrUndefinedBy( ...predicates );
	}

	/**
	 * Gets the first HTTP argument from the HTTP argument collection specified by its HTTP argument name.
	 * @param {String} httpArgumentName The HTTP argument name to determine the HTTP argument.
	 * @returns {undefined|HttpArgument} The first HTTP argument, if found, otherwise undefined.
	 */
	findFirstOrUndefinedByArgumentName( httpArgumentName )
	{
		return super.findFirstOrUndefinedBy(
			this._createArgumentNameEqualityPredicateFromArgumentNames( httpArgumentName )
		);
	}

	/**
	 * Gets the last HTTP argument from the HTTP argument collection specified by a variadic amount of predicates.
	 * @param {...HttpArgumentCollection_HttpArgumentPredicateHandler} predicates The predicates to determine the HTTP argument.
	 * @returns {undefined|HttpArgument} The last HTTP argument, if found, otherwise undefined.
	 */
	findLastOrUndefinedBy( ...predicates )
	{
		return super.findLastOrUndefinedBy( ...predicates );
	}

	/**
	 * Gets the last HTTP argument from the HTTP argument collection specified by its HTTP argument name.
	 * @param {String} httpArgumentName The HTTP argument name to determine the HTTP argument.
	 * @returns {undefined|HttpArgument} The last HTTP argument, if found, otherwise undefined.
	 */
	findLastOrUndefinedByArgumentName( httpArgumentName )
	{
		return super.findLastOrUndefinedBy(
			this._createArgumentNameEqualityPredicateFromArgumentNames( httpArgumentName )
		);
	}

	/**
	 * Gets all HTTP arguments from the HTTP argument collection specified by a variadic amount of predicates.
	 * @param {...HttpArgumentCollection_HttpArgumentPredicateHandler} predicates The predicates to determine the HTTP arguments.
	 * @returns {HttpArgumentCollection<HttpArgument>} The HTTP arguments, if found, otherwise an empty HTTP argument collection.
	 */
	findAllBy( ...predicates )
	{
		return new HttpArgumentCollection(
			...super.findAllBy( ...predicates )
		);
	}

	/**
	 * Gets all HTTP arguments from the HTTP argument collection specified by their HTTP argument names.
	 * @param {...String} httpArgumentNames The HTTP argument names to determine the HTTP arguments.
	 * @returns {HttpArgumentCollection<HttpArgument>} The HTTP arguments, if found, otherwise an empty HTTP argument collection.
	 */
	findAllByArgumentNames( ...httpArgumentNames )
	{
		return this.findAllBy(
			this._createArgumentNameEqualityPredicateFromArgumentNames( ...httpArgumentNames )
		);
	}

	/**
	 * Sorts the HTTP argument collection.
	 */
	sort()
	{
		super.sort();
	}

	/**
	 * Sorts the HTTP argument collection specified by a comparison handler.
	 * @param {HttpArgumentCollection_HttpArgumentComparisonHandler} comparisonHandler The comparison handler used to compare the HTTP arguments.
	 */
	sortBy( comparisonHandler )
	{
		this.__items.sort( comparisonHandler );
	}

	/**
	 * Maps all elements of the HTTP argument collection into a new collection.
	 * @param {HttpArgumentCollection_HttpArgumentTransformationHandler} transformationHandler The transformation handler used to map the HTTP argument collection.
	 * @returns {Collection<*>} The collection containing the transformed HTTP arguments.
	 */
	map( transformationHandler )
	{
		return super.map( transformationHandler );
	}

	/**
	 * Gets the array representation of the HTTP argument collection.
	 * @returns {HttpArgument[]} The array representation of the HTTP argument collection.
	 */
	toArray()
	{
		return [ ...this ];
	}
}
