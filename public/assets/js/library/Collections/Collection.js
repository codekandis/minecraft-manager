'use strict';

import { Abstract } from '../Types/Abstract.js';
import { InvalidIndexException } from '../Types/InvalidIndexException.js';

/**
 * Represents the handler of any collection item iteration.
 * @callback Collection_ItemIterationHandler
 * @param {*} item The currently iterated item.
 * @param {Number} itemIndex The index of the currently iterated item.
 */

/**
 * Represents the handler of any collection items comparison.
 * @callback Collection_ItemComparisonHandler
 * @param {*} item_1 The first item to compare.
 * @param {*} item_2 The second item to compare.
 * @returns {Number} -1 if the first item is lower than the second item, 0 if the first item is equal to the second item and 1 if the first item is greater than the second item.
 */

/**
 * Represents the handler of any collection item transformation.
 * @callback Collection_ItemTransformationHandler
 * @param {*} item The currently iterated item.
 * @param {Number} itemIndex The index of the currently iterated item.
 * @returns {*} The transformed item.
 */

/**
 * Represents the handler of any collection item determination.
 * @callback Collection_ItemPredicateHandler
 * @param {*} item The currently iterated item.
 * @param {Number} itemIndex The index of the currently iterated item.
 * @returns {Boolean} True if the iterated item matches the predicate, otherwise false.
 */

/**
 * Represents a collection of various items.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class Collection extends Abstract
{
	/**
	 * Stores the items of the collection.
	 * @type {*[]}
	 */
	__items = [];

	/**
	 * Constructor method.
	 * @param {...*} items The initital items of the collection.
	 */
	constructor( ...items )
	{
		super();

		this.add( ...items );
	}

	/**
	 * Gets the amount of items in the collection.
	 * @returns {Number} The amount of items in the collection.
	 */
	get length()
	{
		return this.__items.length;
	}

	/**
	 * Gets the iterator to iterate over any collection's item.
	 * @returns {IterableIterator<*>} The iterator to iterate over any collection's item.
	 */
	* #items()
	{
		const items = this.__items;
		for ( const item of items )
		{
			yield item;
		}
	}

	/**
	 * Gets the iterator to iterate over any collection's item.
	 * @returns {IterableIterator<*>} The iterator to iterate over any collection's item.
	 */
	[ Symbol.iterator ]()
	{
		return this.#items();
	}

	/**
	 * Invokes a specific iteration handler on every collection's item.
	 * @param {Collection_ItemIterationHandler} iterationHandler The iteration handler to invoke.
	 */
	forEach( iterationHandler )
	{
		this.#items()
			.forEach( iterationHandler );
	}

	/**
	 * Determines if the collection includes a specific item.
	 * @param {*} item The item to search for.
	 * @returns {Boolean} True if the items is included in the collection, otherwise false.
	 */
	includes( item )
	{
		return this.__items.includes( item );
	}

	/**
	 * Determines if the collection includes an item specified by a variadic amount of predicates.
	 * @param {...Collection_ItemPredicateHandler} predicates The predicates to determine the item.
	 * @returns {Boolean} True if the item is included in the collection, otherwise false.
	 */
	includesBy( ...predicates )
	{
		return this.__items.includesBy( ...predicates );
	}

	/**
	 * Adds a variadic amount of items to the collection.
	 * @param {...*} items The items to add.
	 */
	add( ...items )
	{
		this.__items.add( ...items );
	}

	/**
	 * Replaces all items in the collection specified by their indices.
	 * @param {*} itemReplacement The new item to replace the items with.
	 * @param {...Number} indices The indices of the items to replace.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	replaceAt( itemReplacement, ...indices )
	{
		this.__items.replaceAt( itemReplacement, ...indices );
	}

	/**
	 * Replaces the first occurences of a variadic amount of items in the array with a specified item.
	 * @param {*} itemReplacement The new item to replace the item with.
	 * @param {...*} items The items which has to be replaced.
	 */
	replace( itemReplacement, ...items )
	{
		this.__items.replace( itemReplacement, items );
	}

	/**
	 * Replaces the first occurences of items in the array specified by a variadic amount of predicates with a specified item.
	 * @param {*} itemReplacement The new item to replace the item with.
	 * @param {...Collection_ItemPredicateHandler} predicates The predicates to determine the item.
	 */
	replaceBy( itemReplacement, ...predicates )
	{
		this.__items.replaceBy( itemReplacement, ...predicates );
	}

	/**
	 * Replaces a variadic amount of items in the array with a specified item.
	 * @param {*} itemReplacement The new item to replace the items with.
	 * @param {...*} items The items which has to be replaced.
	 */
	replaceAll( itemReplacement, ...items )
	{
		this.__items.replaceAll( itemReplacement, ...items );
	}

	/**
	 * Replaces all occurences of an item in the array specified by a variadic amount of predicates.
	 * @param {*} itemReplacement The new item to replace the items with.
	 * @param {...Collection_ItemPredicateHandler} predicates The predicates to determine the items.
	 */
	replaceAllBy( itemReplacement, ...predicates )
	{
		this.__items.replaceAllBy( itemReplacement, ...predicates );
	}

	/**
	 * Removes items from the array specified by a variadic amount of their indices.
	 * @param {...Number} indices The index of the item to remove.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	removeAt( ...indices )
	{
		this.__items.removeAt( ...indices );
	}

	/**
	 * Removes the first occurences of a varidadic amount of items from the collection.
	 * @param {...*} items The items to remove.
	 */
	remove( ...items )
	{
		this.__items.remove( ...items );
	}

	/**
	 * Removes the first occurence of an item from the array specified by a variadic amount of predicates.
	 * @param {...Collection_ItemPredicateHandler} predicates The predicates to determine the item.
	 */
	removeBy( ...predicates )
	{
		this.__items.removeBy( ...predicates );
	}

	/**
	 * Removes all occurences of a varidadic amount of items from the array.
	 * @param {...*} items The items to remove.
	 */
	removeAll( ...items )
	{
		this.__items.removeAll( ...items );
	}

	/**
	 * Removes all occurences of items from the array specified by a variadic amount of predicates.
	 * @param {...Collection_ItemPredicateHandler} predicates The predicates to determine the items.
	 */
	removeAllBy( ...predicates )
	{
		this.__items.removeAllBy( ...predicates );
	}

	/**
	 * Gets the first index of an item.
	 * @param {*} item The item to determine its first index.
	 * @returns {undefined|Number} The first index of the item, if found, otherwise undefined.
	 */
	findFirstIndexOf( item )
	{
		return this.__items.findFirstIndexOf( item );
	}

	/**
	 * Gets the first index of an item specified by a variadic amount of predicates.
	 * @param {...Collection_ItemPredicateHandler} predicates The predicates to determine the item.
	 * @returns {undefined|Number} The first index of the item, if found, otherwise undefined.
	 */
	findFirstIndexOfBy( ...predicates )
	{
		return this.__items.findFirstIndexOfBy( ...predicates );
	}

	/**
	 * Gets the last index of an item.
	 * @param {*} item The item to determine its last index.
	 * @returns {undefined|Number} The last index of the item, if found, otherwise undefined.
	 */
	findLastIndexOf( item )
	{
		return this.__items.findLastIndexOf( item );
	}

	/**
	 * Gets the last index of an item specified by a variadic amount of predicates.
	 * @param {...Collection_ItemPredicateHandler} predicates The predicates to determine the item.
	 * @returns {undefined|Number} The last index of the item, if found, otherwise undefined.
	 */
	findLastIndexOfBy( ...predicates )
	{
		return this.__items.findLastIndexOfBy( ...predicates );
	}

	/**
	 * Gets all indices of specific items.
	 * @param {...*} items The items to determine their indices.
	 * @returns {Collection<Number>} The indices of the items, if found, otherwise an empty array.
	 */
	findAllIndicesOf( ...items )
	{
		return new Collection(
			...this.__items.findAllIndicesOf( ...items )
		);
	}

	/**
	 * Gets the indices of all occurences of any item specified by a vadiadic amount of predicates.
	 * @param {...Collection_ItemPredicateHandler} predicates The predicates to determine the items.
	 * @returns {Collection<Number>} The indices of the items, if found, otherwise an empty array.
	 */
	findAllIndicesOfBy( ...predicates )
	{
		return new Collection(
			...this.__items.findAllIndicesOfBy( ...predicates )
		);
	}

	/**
	 * Gets an item from the array specified by its index.
	 * @param {Number} index The index of the item.
	 * @returns {undefined|*} The item, if found.
	 */
	findAt( index )
	{
		return this.__items.findAt( index );
	}

	/**
	 * Gets the first item from the array specified by a variadic amount of predicates.
	 * @param {...Collection_ItemPredicateHandler} predicates The predicates to determine the item.
	 * @returns {undefined|*} The first item, if found, otherwise undefined.
	 */
	findFirstOrUndefinedBy( ...predicates )
	{
		return this.__items.findFirstOrUndefinedBy( ...predicates );
	}

	/**
	 * Gets the last item from the array specified by a variadic amount of predicates.
	 * @param {...Collection_ItemPredicateHandler} predicates The predicates to determine the item.
	 * @returns {undefined|*} The last item, if found, otherwise undefined.
	 */
	findLastOrUndefinedBy( ...predicates )
	{
		return this.__items.findLastOrUndefinedBy( ...predicates );
	}

	/**
	 * Gets all items from the array specified by a variadic amount of predicates.
	 * @param {...Collection_ItemPredicateHandler} predicates The predicates to determine the items.
	 * @returns {Collection<*>} The items, if found, otherwise an empty array.
	 */
	findAllBy( ...predicates )
	{
		return new Collection(
			...this.__items.findAllBy( ...predicates )
		);
	}

	/**
	 * Sorts the collection.
	 */
	sort()
	{
		this.__items.sort();
	}

	/**
	 * Sorts the collection specified by a comparison handler.
	 * @param {Collection_ItemComparisonHandler} comparisonHandler The comparison handler used to compare the items.
	 */
	sortBy( comparisonHandler )
	{
		this.__items.sort( comparisonHandler );
	}

	/**
	 * Maps all elements of the collection into a new collection.
	 * @param {Collection_ItemTransformationHandler} transformationHandler The transformation handler used to map the collection.
	 * @returns {Collection<*>} The collection containing the transformed elements.
	 */
	map( transformationHandler )
	{
		return new Collection(
			...this.__items.map( transformationHandler )
		);
	}

	/**
	 * Gets the array representation of the collection.
	 * @returns {*[]} The array representation of the collection.
	 */
	toArray()
	{
		return [ ...this ];
	}
}
