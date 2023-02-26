'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `Generator`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Represents the handler of any generator element iteration.
 * @callback Generator_ElementIterationHandler
 * @param {*} element The currently iterated element.
 * @param {Number} elementIndex The index of the currently iterated element.
 */

/**
 * Stores the prototype of any generator.
 * @type {Object}
 */
export const Generator = Object.getPrototypeOf(
	function* ()
	{
	}
);

/**
 * Invokes a specific iteration handler on every object's property.
 * @method forEach
 * @memberOf Generator.prototype
 * @param {Generator_ElementIterationHandler} iterationHandler
 */
Object.defineProperty(
	Generator.prototype,
	'forEach',
	{
		value: function ( iterationHandler )
		       {
			       let elementIndex = 0;
			       for ( const elementValue of this )
			       {
				       iterationHandler( elementValue, elementIndex++ );
			       }
		       }
	}
);
