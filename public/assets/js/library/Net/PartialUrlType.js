'use strict';

import { AbstractStatic } from '../Types/AbstractStatic.js';

/**
 * Represents an enumeration of partial URL types.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class PartialUrlType extends AbstractStatic
{
	/**
	 * Specifies the protocol of the URL.
	 * @returns {String} The protocol of the URL.
	 */
	static get PROTOCOL()
	{
		return 'PROTOCOL';
	}

	/**
	 * Specifies the username of the URL.
	 * @returns {String} The username of the URL.
	 */
	static get USERNAME()
	{
		return 'USERNAME';
	}

	/**
	 * Specifies the password of the URL.
	 * @returns {String} The password of the URL.
	 */
	static get PASSWORD()
	{
		return 'PASSWORD';
	}

	/**
	 * Specifies the host name of the URL.
	 * @returns {String} The host name of the URL.
	 */
	static get HOSTNAME()
	{
		return 'HOSTNAME';
	}

	/**
	 * Specifies the port of the URL.
	 * @returns {String} The port of the URL.
	 */
	static get PORT()
	{
		return 'PORT';
	}

	/**
	 * Specifies the path name of the URL.
	 * @returns {String} The path name of the URL.
	 */
	static get PATHNAME()
	{
		return 'PATHNAME';
	}

	/**
	 * Specifies the query string of the URL.
	 * @returns {String} The query string of the URL.
	 */
	static get SEARCH()
	{
		return 'SEARCH';
	}

	/**
	 * Specifies the hash of the URL.
	 * @returns {String} The hash of the URL.
	 */
	static get HASH()
	{
		return 'HASH';
	}
}
