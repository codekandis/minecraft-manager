'use strict';

/**
 * Represents the callback of any array element iteration.
 * @callback Array_ElementIterationCallback
 * @param {*} elementValue The currently iterated element.
 * @param {Number} elementIndex The index of the currently iterated element.
 */

/**
 * Removes an element from the array.
 * @param {*} element The element to remove.
 */
Array.prototype.remove = function ( element )
{
	const elementIndex = this.indexOf( element );

	if ( -1 === elementIndex )
	{
		return;
	}

	this.splice( elementIndex, 1 );
};

/**
 * Gets the last index of an element by a specific predicate.
 * @param {Array_ElementIterationCallback} predicate The predicate to determine the element.
 * @returns {Number} The last index of the element, if found, otherwise -1.
 */
Array.prototype.findLastIndex = function ( predicate )
{
	return [ ...this ]
		.reverse()
		.findIndex( predicate );
};

/**
 * Gets the first element by a specific predicate.
 * @param {Array_ElementIterationCallback} predicate The predicate to determine the element.
 * @returns {?*} The first element, if found, otherwise null.
 */
Array.prototype.findFirstOrNull = function ( predicate )
{
	const foundElement = this.find( predicate );

	return undefined === foundElement
		? null
		: foundElement;
};

/**
 * Gets the last element by a specific predicate.
 * @param {Array_ElementIterationCallback} predicate The predicate to determine the element.
 * @returns {?*} The last element, if found, otherwise null.
 */
Array.prototype.findLastOrNull = function ( predicate )
{
	return [ ...this ]
		.reverse()
		.findFirstOrNull( predicate );
};
