'use strict';

import { Abstract } from '../Types/Abstract.js';

/**
 * Represents an application page dispatcher.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ApplicationPageDispatcher extends Abstract
{
	/**
	 * Stores the routes configuration.
	 * @type {AbstractRoutesConfiguration}
	 */
	#_routesConfiguration;

	/**
	 * Stores the requested URI.
	 * @type {String}
	 */
	#_requestedRoute;

	/**
	 * Constructor method.
	 * @param {AbstractRoutesConfiguration} routesConfiguration The routes configuration of the application page dispatcher.
	 */
	constructor( routesConfiguration )
	{
		super();

		this.#_routesConfiguration = routesConfiguration;
		this.#_requestedRoute      = ( new URL( document.location.href ) )
			.pathname;
	}

	/**
	 * Decodes the application page arguments from the requested URI.
	 * @param {Object<String, String>} encodedApplicationPageArguments The encoded application page arguments.
	 * @returns {Object<String, String>} matches The decoded application page arguments.
	 */
	#decodeApplicationPageArguments( encodedApplicationPageArguments )
	{
		const decodedApplicationPageArguments = {};

		for ( const [ encodedApplicationPageArgumentIndex, encodedApplicationPageArgumentValue ] of Object.entries( encodedApplicationPageArguments ) )
		{
			decodedApplicationPageArguments[ encodedApplicationPageArgumentIndex ] = decodeURIComponent( encodedApplicationPageArgumentValue );
		}

		return decodedApplicationPageArguments;
	}

	/**
	 * Dispatches a request to an application page.
	 */
	dispatch()
	{
		const baseRoute              = this.#_routesConfiguration.baseRoute;
		let applicationPageClass     = null;
		let applicationPageArguments = {};

		this.#_routesConfiguration.routes.every(
			( configuredActionClass, configuredRoute ) =>
			{
				const requestedRouteMatches = this.#_requestedRoute.match(
					new RegExp(
						String.format`^${ 0 }${ 1 }$`( baseRoute, configuredRoute )
					)
				);

				if ( null !== requestedRouteMatches )
				{
					applicationPageClass = configuredActionClass;

					if ( undefined !== requestedRouteMatches.groups )
					{
						applicationPageArguments = this.#decodeApplicationPageArguments( requestedRouteMatches.groups );
					}

					return false;
				}
			}
		);

		if ( null !== applicationPageClass )
		{
			( new applicationPageClass( applicationPageArguments ) )
				.execute();
		}
	}
}
