'use strict';

import { Abstract } from '../Types/Abstract.js';

/**
 * Represents the base class of any routes configuration.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractRoutesConfiguration extends Abstract
{
	/**
	 * Stores the base route of the application.
	 * @type {String}
	 */
	__baseRoute = '';

	/**
	 * Stores the routes of the application.
	 * @type {Object<String, Class>}
	 */
	__routes = {};

	/**
	 * Gets the base route of the application.
	 * @returns {String} The base route of the application.
	 */
	get baseRoute()
	{
		return this.__baseRoute;
	}

	/**
	 * Gets the routes of the application.
	 * @returns {Object<String, Class>} The routes of the application.
	 */
	get routes()
	{
		return this.__routes;
	}
}
