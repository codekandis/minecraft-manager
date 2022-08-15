'use strict';

import DomHelper from '../../Dom/DomHelper.js';
import InitializingEvent from '../InitializingEvent.js';
import InitializingEventArguments from '../InitializingEventArguments.js';
import AbstractBindable from './AbstractBindable.js';

class BindableProxy extends AbstractBindable
{
	#_delegatedObject = undefined;
	#_proxy           = undefined;

	constructor( object, initializingEventHandler )
	{
		super();

		this.#_delegatedObject = object;
		this.#_proxy           = new Proxy(
			this,
			{
				get: this.bindTo( this.#getHandler ),
				set: this.bindTo( this.#setHandler ),
			}
		);

		DomHelper.addEventHandler(
			this,
			InitializingEvent.EVENT_NAME,
			this.bindTo( initializingEventHandler )
		);
		this.#initialize();

		return this.#_proxy;
	}

	get delegatedObject()
	{
		return this.#_delegatedObject;
	}

	get proxy()
	{
		return this.#_proxy;
	}

	#initialize()
	{
		this.dispatchEvent(
			new InitializingEvent(
				this,
				new InitializingEventArguments( this )
			)
		);
	}

	#getHandler( target, memberName, receiver )
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

	#setHandler( target, memberName, value, receiver )
	{
		this.#_delegatedObject[ memberName ] = value;
		this._raisePropertyChangedEvent( memberName, this.#_proxy );

		return true;
	}
}

export default BindableProxy;
