'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `NodeList`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Represents the handler of any node list node iteration.
 * @callback NodeList_NodeIterationHandler
 * @param {Node} nodeValue The value of the currently iterated node.
 * @param {Number} nodeIndex The index of the currently iterated node.
 */

/**
 * Invokes a specific iteration handler on every node list's node.
 * @method map
 * @memberOf NodeList.prototype
 * @param {NodeList_NodeIterationHandler} iterationHandler The iteration handler to invoke.
 */
Object.defineProperty(
	NodeList.prototype,
	'map',
	{
		value: function ( iterationHandler )
		       {
			       return [ ...this ]
				       .map( iterationHandler );
		       }
	}
);
