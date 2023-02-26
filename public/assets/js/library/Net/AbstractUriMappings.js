'use strict';

import { Abstract } from '../Types/Abstract.js';

/**
 * Represents the base class of any URI Mappings.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractUriMappings extends Abstract
{
	/**
	 * Stores the schema of the URI.
	 * @type {String}
	 */
	__schema = String.empty;

	/**
	 * Stores the host name of the URI;
	 * @type {String}
	 */
	__host = String.empty;

	/**
	 * Stores the port of the URI;
	 * @type {Number}
	 */
	__port = 0;

	/**
	 * Stores the base URI of the URI;
	 * @type {String}
	 */
	__baseUri = String.empty;

	/**
	 * Stores the relative URIs of the URI;
	 * @type {Object}
	 */
	__relativeUris = {};

	/**
	 * Gets the schema of the URI.
	 * @returns {String} The schema of the URI.
	 */
	get schema()
	{
		return this.__schema;
	}

	/**
	 * Gets the host name of the URI.
	 * @returns {String} The host name of the URI.
	 */
	get host()
	{
		return this.__host;
	}

	/**
	 * Gets the port of the URI.
	 * @returns {Number} The port of the URI.
	 */
	get port()
	{
		return this.__port;
	}

	/**
	 * Gets the base URI of the URI.
	 * @returns {String} The base URI of the URI.
	 */
	get baseUri()
	{
		return this.__baseUri;
	}

	/**
	 * Gets the relative URIs of the URI.
	 * @returns {Object} The relative URIs of the URI.
	 */
	get relativeUris()
	{
		return this.__relativeUris;
	}

	/**
	 * Gets the absolute URI specified by the name of a relative URI.
	 * @param {String} uriName The name of the relative URI.
	 * @returns {String} The absolute URI.
	 */
	getRelativeUri( uriName )
	{
		return this.__relativeUris[ uriName ];
	}
}
