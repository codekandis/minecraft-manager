'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `Array`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { InvalidIndexException } from './InvalidIndexException.js';

/**
 * Represents the handler of any array element iteration.
 * @callback Array_ElementIterationHandler
 * @param {*} element The currently iterated element.
 * @param {Number} elementIndex The index of the currently iterated element.
 */

/**
 * Represents the handler of any array elements comparison.
 * @callback Array_ElementComparisonHandler
 * @param {*} element_1 The first element to compare.
 * @param {*} element_2 The second element to compare.
 * @returns {Number} -1 if the first element is lower than the second element, 0 if the first element is equal to the second element and 1 if the first element is greater than the second element.
 */

/**
 * Represents the handler of any array element transformation.
 * @callback Array_ElementTransformationHandler
 * @param {*} element The currently iterated element.
 * @param {Number} elementIndex The index of the currently iterated element.
 * @returns {*} The transformed element.
 */

/**
 * Represents the handler of any array element determination.
 * @callback Array_ElementPredicateHandler
 * @param {*} element The currently iterated element.
 * @param {Number} elementIndex The index of the currently iterated element.
 * @returns {Boolean} True if the currently iterated element matches the predicate, otherwise false.
 */

/**
 * Determines if the array includes an element specified by a variadic amount of predicates.
 * @method includesBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicates The predicates to determine the element.
 * @returns {Boolean} True if the element is included in the array, otherwise false.
 */
Object.defineProperty(
	Array.prototype,
	'includesBy',
	{
		value: function ( ...predicates )
		       {
			       let isValid;

			       this.every(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       isValid = predicates.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );

					       return !isValid;
				       }
			       );

			       return isValid;
		       }
	}
);

/**
 * Adds a variadic amount of elements to the array.
 * @method add
 * @memberOf Array.prototype
 * @param {...*} elements The elements to add.
 */
Object.defineProperty(
	Array.prototype,
	'add',
	{
		value: function ( ...elements )
		       {
			       elements.forEach(
				       ( fetchedElement ) =>
				       {
					       this[ this.length ] = fetchedElement;
				       }
			       );
		       }
	}
);

/**
 * Replaces all elements in the array specified by their indices.
 * @method replaceAt
 * @memberOf Array.prototype
 * @param {*} elementReplacement The new element to replace the elements with.
 * @param {...Number} indices The indices of the elements to replace.
 * @throws {InvalidIndexException} An index is invalid.
 */
Object.defineProperty(
	Array.prototype,
	'replaceAt',
	{
		value: function ( elementReplacement, ...indices )
		       {
			       indices.forEach(
				       ( fetchedIndex ) =>
				       {
					       if ( 0 > fetchedIndex || 0 === this.length )
					       {
						       throw InvalidIndexException.with_index( fetchedIndex );
					       }

					       this[ fetchedIndex ] = elementReplacement;
				       }
			       );
		       }
	}
);

/**
 * Replaces the first occurences of a variadic amount of elements in the array with a specified element.
 * @method replace
 * @memberOf Array.prototype
 * @param {*} elementReplacement The new element to replace the element with.
 * @param {...*} elements The elements which has to be replaced.
 */
Object.defineProperty(
	Array.prototype,
	'replace',
	{
		value: function ( elementReplacement, ...elements )
		       {
			       elements.forEach(
				       ( fetchedElement ) =>
				       {
					       const index = this.findFirstIndexOf( fetchedElement );

					       if ( undefined !== index )
					       {
						       this.replaceAt( elementReplacement, index );
					       }
				       }
			       );
		       }
	}
);

/**
 * Replaces the first occurences of elements in the array specified by a variadic amount of predicates with a specified element.
 * @method replaceBy
 * @memberOf Array.prototype
 * @param {*} elementReplacement The new element to replace the element with.
 * @param {...Array_ElementPredicateHandler} predicates The predicates to determine the element.
 */
Object.defineProperty(
	Array.prototype,
	'replaceBy',
	{
		value: function ( elementReplacement, ...predicates )
		       {
			       const index = this.findFirstIndexOfBy( ...predicates );

			       if ( undefined !== index )
			       {
				       this.replaceAt( elementReplacement, index );
			       }
		       }
	}
);

/**
 * Replaces a variadic amount of elements in the array with a specified element.
 * @method replaceAll
 * @memberOf Array.prototype
 * @param {*} elementReplacement The new element to replace the elements with.
 * @param {...*} elements The elements which has to be replaced.
 */
Object.defineProperty(
	Array.prototype,
	'replaceAll',
	{
		value: function ( elementReplacement, ...elements )
		       {
			       this.replaceAt(
				       elementReplacement,
				       ...this.findAllIndicesOf( ...elements )
			       );
		       }
	}
);

/**
 * Replaces all occurences of an element in the array specified by a variadic amount of predicates.
 * @method replaceAllBy
 * @memberOf Array.prototype
 * @param {*} elementReplacement The new element to replace the elements with.
 * @param {...Array_ElementPredicateHandler} predicates The predicates to determine the elements.
 */
Object.defineProperty(
	Array.prototype,
	'replaceAllBy',
	{
		value: function ( elementReplacement, ...predicates )
		       {
			       this.replaceAt(
				       elementReplacement,
				       ...this.findAllIndicesOfBy( ...predicates )
			       );
		       }
	}
);

/**
 * Removes elements from the array specified by a variadic amount of their indices.
 * @method removeAt
 * @memberOf Array.prototype
 * @param {...Number} indices The index of the element to remove.
 * @throws {InvalidIndexException} An index is invalid.
 */
Object.defineProperty(
	Array.prototype,
	'removeAt',
	{
		value: function ( ...indices )
		       {
			       let correctiveElementIndexOffset = 0;

			       indices
				       .numericSort()
				       .forEach(
					       ( fetchedIndex ) =>
					       {
						       if ( 0 > fetchedIndex || 0 === this.length )
						       {
							       throw InvalidIndexException.with_index( fetchedIndex );
						       }

						       this.splice( fetchedIndex - correctiveElementIndexOffset, 1 );
						       correctiveElementIndexOffset++;
					       }
				       );
		       }
	}
);

/**
 * Removes the first occurences of a varidadic amount of elements from the array.
 * @method remove
 * @memberOf Array.prototype
 * @param {...*} elements The elements to remove.
 */
Object.defineProperty(
	Array.prototype,
	'remove',
	{
		value: function ( ...elements )
		       {
			       elements.forEach(
				       ( fetchedElement ) =>
				       {
					       const elementIndex = this.indexOf( fetchedElement );

					       if ( -1 === elementIndex )
					       {
						       return;
					       }

					       this.removeAt( elementIndex );
				       }
			       );
		       }
	}
);

/**
 * Removes the first occurence of an element from the array specified by a variadic amount of predicates.
 * @method removeBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicates The predicates to determine the element.
 */
Object.defineProperty(
	Array.prototype,
	'removeBy',
	{
		value: function ( ...predicates )
		       {
			       this.every(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       const isValid = predicates.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );

					       if ( true === isValid )
					       {
						       this.remove( fetchedElement );
					       }

					       return !isValid;
				       }
			       );
		       }
	}
);

/**
 * Removes all occurences of a varidadic amount of elements from the array.
 * @method removeAll
 * @memberOf Array.prototype
 * @param {...*} elements The elements to remove.
 */
Object.defineProperty(
	Array.prototype,
	'removeAll',
	{
		value: function ( ...elements )
		       {
			       const indices = [];

			       this.forEach(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       const isValid = elements.includes( fetchedElement );

					       if ( true === isValid )
					       {
						       indices[ indices.length ] = fetchedElementIndex;
					       }
				       }
			       );

			       this.removeAt( ...indices );
		       }
	}
);

/**
 * Removes all occurences of elements from the array specified by a variadic amount of predicates.
 * @method removeAllBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicates The predicates to determine the elements.
 */
Object.defineProperty(
	Array.prototype,
	'removeAllBy',
	{
		value: function ( ...predicates )
		       {
			       const indices = [];

			       this.forEach(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       const isValid = predicates.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );

					       if ( true === isValid )
					       {
						       indices[ indices.length ] = fetchedElementIndex;
					       }
				       }
			       );

			       this.removeAt( ...indices );
		       }
	}
);

/**
 * Gets the first index of an element.
 * @method findFirstIndexOf
 * @memberOf Array.prototype
 * @param {*} element The element to determine its first index.
 * @returns {undefined|Number} The first index of the element, if found, otherwise undefined.
 */
Object.defineProperty(
	Array.prototype,
	'findFirstIndexOf',
	{
		value: function ( element )
		       {
			       const index = this.indexOf( element );

			       return -1 === index
				       ? undefined
				       : index;
		       }
	}
);

/**
 * Gets the first index of an element specified by a variadic amount of predicates.
 * @method findFirstIndexOfBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicates The predicates to determine the element.
 * @returns {undefined|Number} The first index of the element, if found, otherwise undefined.
 */
Object.defineProperty(
	Array.prototype,
	'findFirstIndexOfBy',
	{
		value: function ( ...predicates )
		       {
			       const index = this.findIndex(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       return predicates.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );
				       }
			       );

			       return -1 === index
				       ? undefined
				       : index;
		       }
	}
);

/**
 * Gets the last index of an element.
 * @method findLastIndexOf
 * @memberOf Array.prototype
 * @param {*} element The element to determine its last index.
 * @returns {undefined|Number} The last index of the element, if found, otherwise undefined.
 */
Object.defineProperty(
	Array.prototype,
	'findLastIndexOf',
	{
		value: function ( element )
		       {
			       const index = this.lastIndexOf( element );

			       return -1 === index
				       ? undefined
				       : index;
		       }
	}
);

/**
 * Gets the last index of an element specified by a variadic amount of predicates.
 * @method findLastIndexOfBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicates The predicates to determine the element.
 * @returns {undefined|Number} The last index of the element, if found, otherwise undefined.
 */
Object.defineProperty(
	Array.prototype,
	'findLastIndexOfBy',
	{
		value: function ( ...predicates )
		       {
			       const index = this.findLastIndex(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       return predicates.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );
				       }
			       );

			       return -1 === index
				       ? undefined
				       : index;
		       }
	}
);

/**
 * Gets all indices of specific elements.
 * @method findAllIndicesOf
 * @memberOf Array.prototype
 * @param {...*} elements The elements to determine their indices.
 * @returns {Number[]} The indices of the elements, if found, otherwise an empty array.
 */
Object.defineProperty(
	Array.prototype,
	'findAllIndicesOf',
	{
		value: function ( ...elements )
		       {
			       const indices = [];

			       this.forEach(
				       ( fetchedElement, fetchedIndex ) =>
				       {
					       if ( true === elements.includes( fetchedElement ) )
					       {
						       indices[ indices.length ] = fetchedIndex;
					       }
				       }
			       );

			       return indices;
		       }
	}
);

/**
 * Gets the indices of all occurences of any element specified by a vadiadic amount of predicates.
 * @method findAllIndicesOfBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicates The predicates to determine the elements.
 * @returns {Number[]} The indices of the elements, if found, otherwise an empty array.
 */
Object.defineProperty(
	Array.prototype,
	'findAllIndicesOfBy',
	{
		value: function ( ...predicates )
		       {
			       const indices = [];

			       this.forEach(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       const isValid = predicates.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );

					       if ( true === isValid )
					       {
						       indices[ indices.length ] = fetchedElementIndex;
					       }
				       }
			       );

			       return indices;
		       }
	}
);

/**
 * Gets an element from the array specified by its index.
 * @method findAt
 * @memberOf Array.prototype
 * @param {Number} index The index of the element.
 * @returns {undefined|*} The element, if found.
 */
Object.defineProperty(
	Array.prototype,
	'findAt',
	{
		value: function ( index )
		       {
			       if ( 0 > index )
			       {
				       throw  InvalidIndexException.with_index( index );
			       }

			       return 0 !== this.length
				       ? undefined
				       : this[ index ];
		       }
	}
);

/**
 * Gets the first element from the array specified by a variadic amount of predicates.
 * @method findFirstOrUndefinedBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicates The predicates to determine the element.
 * @returns {undefined|*} The first element, if found, otherwise undefined.
 */
Object.defineProperty(
	Array.prototype,
	'findFirstOrUndefinedBy',
	{
		value: function ( ...predicates )
		       {
			       const index = this.findIndex(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       return predicates.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );
				       }
			       );

			       return -1 === index
				       ? undefined
				       : this[ index ];
		       }
	}
);

/**
 * Gets the last element from the array specified by a variadic amount of predicates.
 * @method findLastOrUndefinedBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicates The predicates to determine the element.
 * @returns {undefined|*} The last element, if found, otherwise undefined.
 */
Object.defineProperty(
	Array.prototype,
	'findLastOrUndefinedBy',
	{
		value: function ( ...predicates )
		       {
			       const index = this.findLastIndex(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       return predicates.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );
				       }
			       );

			       return -1 === index
				       ? undefined
				       : this[ index ];
		       }
	}
);

/**
 * Gets all elements from the array specified by a variadic amount of predicates.
 * @method findAllBy
 * @memberOf Array.prototype
 * @param {...Array_ElementPredicateHandler} predicates The predicates to determine the elements.
 * @returns {*[]} The elements, if found, otherwise an empty array.
 */
Object.defineProperty(
	Array.prototype,
	'findAllBy',
	{
		value: function ( ...predicates )
		       {
			       const elements = [];

			       this.forEach(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       const isValid = predicates.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );

					       if ( true === isValid )
					       {
						       elements[ elements.length ] = fetchedElement;
					       }
				       }
			       );

			       return elements;
		       }
	}
);

/**
 * Sorts the numeric array by natural numeric order. The array will not be sorted in place.
 * @method sortNumeric
 * @memberOf Array.prototype
 * @returns {Number[]} The sorted array.
 */
Object.defineProperty(
	Array.prototype,
	'sortNumeric',
	{
		value: function ()
		       {
			       return [ ...this ].sort(
				       ( element_1, element_2 ) =>
				       {
					       return element_1 - element_2;
				       }
			       );
		       }
	}
);

/**
 * Sorts the array specified by a comparison handler.
 * @method sortBy
 * @memberOf Array.prototype
 * @param {Array_ElementComparisonHandler} comparisonHandler The comparison handler used to compare the elements.
 * @returns {*[]} The sorted array.
 */
Object.defineProperty(
	Array.prototype,
	'sortBy',
	{
		value: function ( comparisonHandler )
		       {
			       return [ ...this ].sort( comparisonHandler );
		       }
	}
);
