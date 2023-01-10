'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `Object`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Represents the handler of any object property iteration.
 * @callback Object_PropertyIterationHandler
 * @param {*} propertyValue The value of the currently iterated property.
 * @param {String} propertyName The name of the currently iterated property.
 */

/**
 * Represents the predicate of any object property determination.
 * @callback Object_PropertyPredicate
 * @param {*} propertyValue The value of the currently iterated property.
 * @param {String} propertyName The name of the currently iterated property.
 * @returns {Boolean} True if the currently iterated property matches the predicate, otherwise false.
 */

/**
 * Gets the keys of the object.
 * @method keys
 * @memberOf {Object.prototype}
 * @returns {String[]} The keys of the object.
 */
Object.defineProperty(
	Object.prototype,
	'keys',
	{
		value: function ()
		       {
			       return Object.keys( this );
		       }
	}
);

/**
 * Gets the values of the object's properties.
 * @method values
 * @memberOf Object.prototype
 * @returns {*[]} The values of the object's properties.
 */
Object.defineProperty(
	Object.prototype,
	'values',
	{
		value: function ()
		       {
			       return Object.values( this );
		       }
	}
);

/**
 * Invokes a specific iteration handler on every object's property.
 * @method forEach
 * @memberOf Object.prototype
 * @param {Object_PropertyIterationHandler} iterationHandler The iteration handler to invoke.
 */
Object.defineProperty(
	Object.prototype,
	'forEach',
	{
		value: function ( iterationHandler )
		       {
			       for ( const [ fetchedPropertyName, fetchedPropertyValue ] of Object.entries( this ) )
			       {
				       iterationHandler( fetchedPropertyValue, fetchedPropertyName );
			       }
		       }
	}
);

/**
 * Determines if a specific predicate returns true on every object's property.
 * @method every
 * @memberOf Object.prototype
 * @param {Object_PropertyPredicate} predicate The predicate to invoke.
 * @returns {Boolean} True if the predicate returns true on every object's property, otherwise false.
 */
Object.defineProperty(
	Object.prototype,
	'every',
	{
		value: function ( predicate )
		       {
			       for ( const [ fetchedPropertyName, fetchedPropertyValue ] of Object.entries( this ) )
			       {
				       if ( false === predicate( fetchedPropertyValue, fetchedPropertyName ) )
				       {
					       return false;
				       }
			       }

			       return true;
		       }
	}
);

/**
 * Binds the object to a specific function / method.
 * @method bindTo
 * @memberOf Object.prototype
 * @param {Function} method The function / method to bind the object to.
 * @returns {Function} The bound function / method.
 */
Object.defineProperty(
	Object.prototype,
	'bindTo',
	{
		value: function ( method )
		       {
			       return method.bind( this );
		       }
	}
);

/**
 * Binds the object to a variadic amount of functions / methods.
 * @method bindToAll
 * @memberOf Object.prototype
 * @param {Function[]} methods The functions / methods to bind the object to.
 * @returns {Function[]}} The bound functions / methods.
 */
Object.defineProperty(
	Object.prototype,
	'bindToAll',
	{
		value: function ( methods )
		       {
			       return methods.map(
				       ( fetchedMethod ) =>
				       {
					       return fetchedMethod.bind( this );
				       }
			       );
		       }
	}
);

/**
 * Merges another object into the object.
 * @method merge
 * @memberOf Object.prototype
 * @param {Object} object The object to merge.
 */
Object.defineProperty(
	Object.prototype,
	'merge',
	{
		value: function ( object )
		       {
			       for ( const [ fetchedPropertyName, fetchedPropertyValue ] of Object.entries( object ) )
			       {
				       this[ fetchedPropertyName ] = fetchedPropertyValue;
			       }
		       }
	}
);
