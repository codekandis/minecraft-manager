'use strict';

import { AbstractBindable } from './AbstractBindable.js';

/**
 * Represents the callback of any bindable proxy instantiation.
 * @callback BindableProxy_InstantiationCallack
 * @param {BindableProxy} bindableProxy The instantiated bindable proxy.
 */

/**
 * Represents a bindable proxy.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class BindableProxy extends AbstractBindable
{
	/**
	 * Stores the delegated object which is proxied.
	 * @type {Object}
	 */
	#_delegatedObject;

	/**
	 * Stores the proxy to the delegated object.
	 * @type {Proxy}
	 */
	#_proxy;

	/**
	 * Constructor method.
	 * @param {Object} object The object to proxy.
	 * @param {BindableProxy_InstantiationCallack} initializingCallback The callback to invoke after instantiation.
	 */
	constructor( object, initializingCallback )
	{
		super();

		this.#_delegatedObject = object;
		this.#_proxy           = new Proxy(
			this,
			{
				get: this.#proxy_getHandler,
				set: this.#proxy_setHandler
			}
		);

		initializingCallback( this );

		return this.#_proxy;
	}

	/**
	 * Gets the delegated object which is proxied.
	 * @returns {Object} The delegated object which is proxied.
	 */
	get delegatedObject()
	{
		return this.#_delegatedObject;
	}

	/**
	 * Gets the proxy to the delegated object.
	 * @returns {Object} The proxy to the delegated object.
	 */
	get proxy()
	{
		return this.#_proxy;
	}

	/**
	 * Gets the value of the bindable proxy's or the proxied delegate's member specified by their member name.
	 * @param {Object} bindableProxy The bindable proxy.
	 * @param {String} memberName The name of the member to get its value.
	 * @param {Proxy} proxy The proxy which triggered get handler.
	 * @returns {*} The value of the bindable proxy's member, if it exists, otherwise the proxied delegate's value will be returned.
	 */
	#proxy_getHandler = ( bindableProxy, memberName, proxy ) =>
	{
		const proxyValue = this[ memberName ];

		if ( 'function' === typeof proxyValue )
		{
			return proxyValue.bind( this );
		}

		if ( undefined !== proxyValue )
		{
			return proxyValue;
		}

		const targetValue = this.#_delegatedObject[ memberName ];

		if ( 'function' === typeof targetValue )
		{
			return targetValue.bind( this.#_delegatedObject );
		}

		return targetValue;
	}

	/**
	 * Sets the value of the bindable proxy's or the proxied delegate's member specified by their member name.
	 * @param {Object} bindableProxy The bindable proxy.
	 * @param {String} memberName The name of the member to get its value.
	 * @param {*} memberValue The value of the bindable proxy's member.
	 * @param {Proxy} proxy The proxy which triggered get handler.
	 * @returns {Boolean} True!
	 */
	#proxy_setHandler = ( bindableProxy, memberName, memberValue, proxy ) =>
	{
		this.#_delegatedObject[ memberName ] = memberValue;
		this._dispatchPropertyChangedEvent( memberName, this.#_proxy );

		return true;
	}
}
