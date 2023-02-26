'use strict';

import { Collection } from '../../../Collections/Collection.js';
import { HttpPostFileNamePreparator } from './HttpPostFileNamePreparator.js';

/**
 * Represents the handler of any HTTP POST file collection HTTP POST file iteration.
 * @callback HttpPostFileCollection_HttpPostFileIterationHandler
 * @param {HttpPostFile} httpPostFile The currently iterated HTTP POST file.
 * @param {Number} httpPostFileIndex The index of the currently iterated HTTP POST file.
 */

/**
 * Represents the handler of any HTTP POST file collection HTTP POST file comparison.
 * @callback HttpPostFileCollection_HttpPostFileComparisonHandler
 * @param {HttpPostFile} httpPostFile_1 The first HTTP POST file to compare.
 * @param {HttpPostFile} httpPostFile_2 The second HTTP POST file to compare.
 * @returns {Number} -1 if the first HTTP POST file is lower than the second HTTP POST file, 0 if the first HTTP POST file is equal to the second HTTP POST file and 1 if the first HTTP POST file is greater than the second HTTP POST file.
 */

/**
 * Represents the handler of any HTTP POST file collection HTTP POST file transformation.
 * @callback HttpPostFileCollection_HttpPostFileTransformationHandler
 * @param {HttpPostFile} httpPostFile The currently iterated HTTP POST file.
 * @param {Number} httpPostFileIndex The index of the currently iterated HTTP POST file.
 * @returns {*} The transformed HTTP POST file.
 */

/**
 * Represents the handler of any HTTP POST file collection HTTP POST file determination.
 * @callback HttpPostFileCollection_HttpPostFilePredicateHandler
 * @param {HttpPostFile} httpPostFile The currently iterated HTTP POST file.
 * @param {Number} httpPostFileIndex The index of the currently iterated HTTP POST file.
 * @returns {Boolean} True if the iterated HTTP POST file matches the predicate, otherwise false.
 */

/**
 * Represents a collection of HTTP POST files.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpPostFileCollection extends Collection
{
	/**
	 * Constructor method.
	 * @param {...HttpPostFile} httpPostFiles The initital HTTP POST files of the collection.
	 */
	constructor( ...httpPostFiles )
	{
		super( ...httpPostFiles );
	}

	/**
	 * Gets the amount of HTTP POST files in the collection.
	 * @returns {Number} The amount of HTTP POST files in the collection.
	 */
	get length()
	{
		return super.length;
	}

	/**
	 * Creates the default predicate to compare specified HTTP POST files with a fetched HTTP POST file of the HTTP POST file collection for equality by their HTTP POST file names.
	 * @param {...HttpPostFile} httpPostFiles The HTTP POST file to compare the fetched HTTP POST file with.
	 * @returns {HttpPostFileCollection_HttpPostFilePredicateHandler} The HTTP POST file name equality predicates.
	 */
	_createPostFileNameEqualityPredicate( ...httpPostFiles )
	{
		return ( fetchedHttpPostFile ) =>
		{
			return httpPostFiles.every(
				( fetchedPassedHttpPostFile ) =>
				{
					return fetchedPassedHttpPostFile.name === fetchedHttpPostFile.name;
				}
			);
		};
	}

	/**
	 * Creates the default predicate to compare specified HTTP POST file names with a fetched HTTP POST file of the HTTP POST file collection for equality by their HTTP POST file names.
	 * @param {...String} httpPostFileNames The HTTP POST file names to compare the fetched HTTP POST files with.
	 * @returns {HttpPostFileCollection_HttpPostFilePredicateHandler} The HTTP POST file name equality predicates.
	 */
	_createPostFileNameEqualityPredicateFromPostFileNames( ...httpPostFileNames )
	{
		const httpPostFileNamePreparator = new HttpPostFileNamePreparator();

		return ( fetchedHttpPostFile ) =>
		{
			return httpPostFileNames.every(
				( fetchedHttpPostFileName ) =>
				{
					const preparedHttpPostFileName = httpPostFileNamePreparator.prepare( fetchedHttpPostFileName );

					return preparedHttpPostFileName === fetchedHttpPostFile.name;
				}
			);
		};
	}

	/**
	 * Invokes a specific iteration handler on every collection's HTTP POST file.
	 * @param {HttpPostFileCollection_HttpPostFileIterationHandler} iterationHandler The iteration handler to invoke.
	 */
	forEach( iterationHandler )
	{
		super.forEach( iterationHandler );
	}

	/**
	 * Determines if the HTTP POST file collection includes a specific HTTP POST file.
	 * @param {HttpPostFile} httpPostFile The HTTP POST file to search for.
	 * @returns {Boolean} True if the HTTP POST files is included in the HTTP POST file collection, otherwise false.
	 */
	includes( httpPostFile )
	{
		return undefined !== this.findFirstOrUndefinedBy(
			this._createPostFileNameEqualityPredicate( httpPostFile )
		);
	}

	/**
	 * Determines if the HTTP POST file collection includes an HTTP POST file specified by a variadic amount of predicates.
	 * @param {...HttpPostFileCollection_HttpPostFilePredicateHandler} predicates The predicates to determine the HTTP POST file.
	 * @returns {Boolean} True if the HTTP POST file is included in the HTTP POST file collection, otherwise false.
	 */
	includesBy( ...predicates )
	{
		return undefined !== this.findFirstOrUndefinedBy( ...predicates );
	}

	/**
	 * Adds a variadic amount of HTTP POST files to the HTTP POST file collection.
	 * @param {...HttpPostFile} httpPostFiles The HTTP POST files to add.
	 */
	add( ...httpPostFiles )
	{
		super.add( ...httpPostFiles );
	}

	/**
	 * Replaces all HTTP POST files in the HTTP POST file collection specified by their indices.
	 * @param {HttpPostFile} httpPostFileReplacement The new HTTP POST file to replace the HTTP POST files with.
	 * @param {...Number} indices The indices of the HTTP POST files to replace.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	replaceAt( httpPostFileReplacement, ...indices )
	{
		super.replaceAt( httpPostFileReplacement, ...indices );
	}

	/**
	 * Replaces the first occurences of a variadic amount of HTTP POST files in the HTTP POST file collection with a specified HTTP POST file.
	 * @param {HttpPostFile} httpPostFileReplacement The new HTTP POST file to replace the HTTP POST file with.
	 * @param {...HttpPostFile} httpPostFiles The HTTP POST files which has to be replaced.
	 */
	replace( httpPostFileReplacement, ...httpPostFiles )
	{
		super.replace( httpPostFileReplacement, ...httpPostFiles );
	}

	/**
	 * Replaces the first occurences of HTTP POST files in the HTTP POST file collection specified by a variadic amount of predicates with a specified HTTP POST file.
	 * @param {HttpPostFile} httpPostFileReplacement The new HTTP POST file to replace the HTTP POST file with.
	 * @param {...HttpPostFileCollection_HttpPostFilePredicateHandler} predicates The predicates to determine the HTTP POST file.
	 */
	replaceBy( httpPostFileReplacement, ...predicates )
	{
		super.replaceBy( httpPostFileReplacement, ...predicates );
	}

	/**
	 * Replaces a variadic amount of HTTP POST files in the HTTP POST file collection with a specified HTTP POST file.
	 * @param {HttpPostFile} httpPostFileReplacement The new HTTP POST file to replace the HTTP POST files with.
	 * @param {...HttpPostFile} httpPostFiles The HTTP POST files which has to be replaced.
	 */
	replaceAll( httpPostFileReplacement, ...httpPostFiles )
	{
		this.replaceAllBy(
			httpPostFileReplacement,
			this._createPostFileNameEqualityPredicate( ...httpPostFiles )
		);
	}

	/**
	 * Replaces all occurences of an HTTP POST file in the HTTP POST file collection specified by a variadic amount of predicates.
	 * @param {HttpPostFile} httpPostFileReplacement The new HTTP POST file to replace the HTTP POST files with.
	 * @param {...HttpPostFileCollection_HttpPostFilePredicateHandler} predicates The predicates to determine the HTTP POST files.
	 */
	replaceAllBy( httpPostFileReplacement, ...predicates )
	{
		super.replaceAllBy( httpPostFileReplacement, ...predicates );
	}

	/**
	 * Adds or replaces a variadic amount of HTTP POST files to / in the list. If an HTTP POST file will be added if it does not exist. Otherwise it will be replaced.
	 * @param {...HttpPostFile} httpPostFiles The HTTP POST files to add or replace.
	 */
	addOrReplace( ...httpPostFiles )
	{
		httpPostFiles.forEach(
			( fetchedHttpPostFile ) =>
			{
				const foundHttpPostFileIndex = this.findFirstIndexOfBy(
					this._createPostFileNameEqualityPredicate( fetchedHttpPostFile )
				);

				if ( undefined === foundHttpPostFileIndex )
				{
					this.add( fetchedHttpPostFile );

					return;
				}

				this.replaceAt( fetchedHttpPostFile, foundHttpPostFileIndex );
			}
		);
	}

	/**
	 * Removes HTTP POST files from the HTTP POST file collection specified by a variadic amount of their indices.
	 * @param {...Number} indices The index of the HTTP POST file to remove.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	removeAt( ...indices )
	{
		super.removeAt( ...indices );
	}

	/**
	 * Removes the first occurences of a varidadic amount of HTTP POST files from the HTTP POST file collection.
	 * @param {...HttpPostFile} httpPostFiles The HTTP POST files to remove.
	 */
	remove( ...httpPostFiles )
	{
		this.removeBy(
			this._createPostFileNameEqualityPredicate( ...httpPostFiles )
		);
	}

	/**
	 * Removes the first occurence of an HTTP POST file from the HTTP POST file collection specified by a variadic amount of predicates.
	 * @param {...HttpPostFileCollection_HttpPostFilePredicateHandler} predicates The predicates to determine the HTTP POST file.
	 */
	removeBy( ...predicates )
	{
		super.removeBy( ...predicates );
	}

	/**
	 * Removes the first occurence of an HTTP POST file specified by their HTTP POST file names.
	 * @param {...String} httpPostFileNames The names of the HTTP POST files to remove.
	 */
	removeByPostFileNames( ...httpPostFileNames )
	{
		this.removeBy(
			this._createPostFileNameEqualityPredicateFromPostFileNames( ...httpPostFileNames )
		);
	}

	/**
	 * Removes all occurences of a varidadic amount of HTTP POST files from the HTTP POST file collection.
	 * @param {...HttpPostFile} httpPostFiles The HTTP POST files to remove.
	 */
	removeAll( ...httpPostFiles )
	{
		this.removeAllBy(
			this._createPostFileNameEqualityPredicate( ...httpPostFiles )
		);
	}

	/**
	 * Removes all occurences of HTTP POST files from the HTTP POST file collection specified by a variadic amount of predicates.
	 * @param {...HttpPostFileCollection_HttpPostFilePredicateHandler} predicates The predicates to determine the HTTP POST files.
	 */
	removeAllBy( ...predicates )
	{
		super.removeAllBy( ...predicates );
	}

	/**
	 * Removes all occurences of HTTP POST files specified by their HTTP POST file names.
	 * @param {...String} httpPostFileNames The names of the HTTP POST files to remove.
	 */
	removeAllByPostFileName( ...httpPostFileNames )
	{
		this.removeAllBy(
			this._createPostFileNameEqualityPredicateFromPostFileNames( ...httpPostFileNames )
		);
	}

	/**
	 * Gets the first index of an HTTP POST file.
	 * @param {HttpPostFile} httpPostFile The HTTP POST file to determine its first index.
	 * @returns {undefined|Number} The first index of the HTTP POST file, if found, otherwise undefined.
	 */
	findFirstIndexOf( httpPostFile )
	{
		return this.findFirstIndexOfBy(
			this._createPostFileNameEqualityPredicate( httpPostFile )
		);
	}

	/**
	 * Gets the first index of an HTTP POST file specified by a variadic amount of predicates.
	 * @param {...HttpPostFileCollection_HttpPostFilePredicateHandler} predicates The predicates to determine the HTTP POST file.
	 * @returns {undefined|Number} The first index of the HTTP POST file, if found, otherwise undefined.
	 */
	findFirstIndexOfBy( ...predicates )
	{
		return super.findFirstIndexOfBy( ...predicates );
	}

	/**
	 * Gets the first index of an HTTP POST file specified by its HTTP POST file name.
	 * @param {String} httpPostFileName The HTTP POST file name of the HTTP POST file.
	 * @returns {undefined|Number} The first index of the HTTP POST file, if found, otherwise undefined.
	 */
	findFirstIndexOfByPostFileName( httpPostFileName )
	{
		return super.findFirstIndexOfBy(
			this._createPostFileNameEqualityPredicateFromPostFileNames( httpPostFileName )
		);
	}

	/**
	 * Gets the last index of an HTTP POST file.
	 * @param {HttpPostFile} httpPostFile The HTTP POST file to determine its last index.
	 * @returns {undefined|Number} The last index of the HTTP POST file, if found, otherwise undefined.
	 */
	findLastIndexOf( httpPostFile )
	{
		return this.findLastIndexOfBy(
			this._createPostFileNameEqualityPredicate( httpPostFile )
		);
	}

	/**
	 * Gets the last index of an HTTP POST file specified by a variadic amount of predicates.
	 * @param {...HttpPostFileCollection_HttpPostFilePredicateHandler} predicates The predicates to determine the HTTP POST file.
	 * @returns {undefined|Number} The last index of the HTTP POST file, if found, otherwise undefined.
	 */
	findLastIndexOfBy( ...predicates )
	{
		return super.findLastIndexOfBy( ...predicates );
	}

	/**
	 * Gets the last index of an HTTP POST file specified by its HTTP POST file names.
	 * @param {String} httpPostFileName The HTTP POST file name of the HTTP POST file.
	 * @returns {undefined|Number} The last index of the HTTP POST file, if found, otherwise undefined.
	 */
	findLastIndexOfByPostFileName( httpPostFileName )
	{
		return super.findLastIndexOfBy(
			this._createPostFileNameEqualityPredicateFromPostFileNames( httpPostFileName )
		);
	}

	/**
	 * Gets all indices of specific HTTP POST files.
	 * @param {...HttpPostFile} httpPostFiles The HTTP POST files to determine their indices.
	 * @returns {Collection<Number>} The indices of the HTTP POST files, if found, otherwise an empty collection.
	 */
	findAllIndicesOf( ...httpPostFiles )
	{
		return this.findAllIndicesOfBy(
			this._createPostFileNameEqualityPredicate( ...httpPostFiles )
		);
	}

	/**
	 * Gets the indices of all occurences of any HTTP POST file specified by a vadiadic amount of predicates.
	 * @param {...HttpPostFileCollection_HttpPostFilePredicateHandler} predicates The predicates to determine the HTTP POST files.
	 * @returns {Collection<Number>} The indices of the HTTP POST files, if found, otherwise an empty collection.
	 */
	findAllIndicesOfBy( ...predicates )
	{
		super.findAllIndicesOfBy( ...predicates );
	}

	/**
	 * Gets the indices of all occurences of any HTTP POST file specified by a vadiadic amount of HTTP POST file names.
	 * @param {...String} httpPostFileNames The HTTP POST file names to determine the HTTP POST files.
	 * @returns {Collection<Number>} The indices of the HTTP POST files, if found, otherwise an empty collection.
	 */
	findAllIndicesOfByPostFileNames( ...httpPostFileNames )
	{
		super.findAllIndicesOfBy(
			this._createPostFileNameEqualityPredicateFromPostFileNames( ...httpPostFileNames )
		);
	}

	/**
	 * Gets an HTTP POST file from the HTTP POST file collection specified by its index.
	 * @param {Number} index The index of the HTTP POST file.
	 * @returns {undefined|HttpPostFile} The HTTP POST file, if found.
	 */
	findAt( index )
	{
		return super.findAt( index );
	}

	/**
	 * Gets the first HTTP POST file from the HTTP POST file collection specified by a variadic amount of predicates.
	 * @param {...HttpPostFileCollection_HttpPostFilePredicateHandler} predicates The predicates to determine the HTTP POST file.
	 * @returns {undefined|HttpPostFile} The first HTTP POST file, if found, otherwise undefined.
	 */
	findFirstOrUndefinedBy( ...predicates )
	{
		return super.findFirstOrUndefinedBy( ...predicates );
	}

	/**
	 * Gets the first HTTP POST file from the HTTP POST file collection specified by its HTTP POST file name.
	 * @param {String} httpPostFileName The HTTP POST file name to determine the HTTP POST file.
	 * @returns {undefined|HttpPostFile} The first HTTP POST file, if found, otherwise undefined.
	 */
	findFirstOrUndefinedByPostFileName( httpPostFileName )
	{
		return super.findFirstOrUndefinedBy(
			this._createPostFileNameEqualityPredicateFromPostFileNames( httpPostFileName )
		);
	}

	/**
	 * Gets the last HTTP POST file from the HTTP POST file collection specified by a variadic amount of predicates.
	 * @param {...HttpPostFileCollection_HttpPostFilePredicateHandler} predicates The predicates to determine the HTTP POST file.
	 * @returns {undefined|HttpPostFile} The last HTTP POST file, if found, otherwise undefined.
	 */
	findLastOrUndefinedBy( ...predicates )
	{
		return super.findLastOrUndefinedBy( ...predicates );
	}

	/**
	 * Gets the last HTTP POST file from the HTTP POST file collection specified by its HTTP POST file name.
	 * @param {String} httpPostFileName The HTTP POST file name to determine the HTTP POST file.
	 * @returns {undefined|HttpPostFile} The last HTTP POST file, if found, otherwise undefined.
	 */
	findLastOrUndefinedByPostFileName( httpPostFileName )
	{
		return super.findLastOrUndefinedBy(
			this._createPostFileNameEqualityPredicateFromPostFileNames( httpPostFileName )
		);
	}

	/**
	 * Gets all HTTP POST files from the HTTP POST file collection specified by a variadic amount of predicates.
	 * @param {...HttpPostFileCollection_HttpPostFilePredicateHandler} predicates The predicates to determine the HTTP POST files.
	 * @returns {HttpPostFileCollection<HttpPostFile>} The HTTP POST files, if found, otherwise an empty HTTP POST file collection.
	 */
	findAllBy( ...predicates )
	{
		return new HttpPostFileCollection(
			...super.findAllBy( ...predicates )
		);
	}

	/**
	 * Gets all HTTP POST files from the HTTP POST file collection specified by their HTTP POST file names.
	 * @param {...String} httpPostFileNames The HTTP POST file names to determine the HTTP POST files.
	 * @returns {HttpPostFileCollection<HttpPostFile>} The HTTP POST files, if found, otherwise an empty HTTP POST file collection.
	 */
	findAllByPostFileNames( ...httpPostFileNames )
	{
		return this.findAllBy(
			this._createPostFileNameEqualityPredicateFromPostFileNames( ...httpPostFileNames )
		);
	}

	/**
	 * Sorts the HTTP POST file collection.
	 */
	sort()
	{
		super.sort();
	}

	/**
	 * Sorts the HTTP POST file collection specified by a comparison handler.
	 * @param {HttpPostFileCollection_HttpPostFileComparisonHandler} comparisonHandler The comparison handler used to compare the HTTP POST files.
	 */
	sortBy( comparisonHandler )
	{
		this.__items.sort( comparisonHandler );
	}

	/**
	 * Maps all elements of the HTTP POST file collection into a new collection.
	 * @param {HttpPostFileCollection_HttpPostFileTransformationHandler} transformationHandler The transformation handler used to map the HTTP POST file collection.
	 * @returns {Collection<*>} The collection containing the transformed HTTP POST files.
	 */
	map( transformationHandler )
	{
		return super.map( transformationHandler );
	}

	/**
	 * Gets the array representation of the HTTP POST file collection.
	 * @returns {HttpPostFile[]} The array representation of the HTTP POST file collection.
	 */
	toArray()
	{
		return [ ...this ];
	}
}
