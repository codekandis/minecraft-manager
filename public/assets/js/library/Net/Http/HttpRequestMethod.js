'use strict';

import { AbstractStatic } from '../../Types/AbstractStatic.js';

/**
 * Represents an enumeration of HTTP request methods.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpRequestMethod extends AbstractStatic
{
	/**
	 * Represents the HTTP request method `CONNECT`.
	 * @returns {String} The http request method `CONNECT`.
	 */
	static get CONNECT()
	{
		return 'CONNECT';
	}

	/**
	 * Represents the HTTP request method `COPY`.
	 * @returns {String} The http request method `COPY`.
	 */
	static get COPY()
	{
		return 'COPY';
	}

	/**
	 * Represents the HTTP request method `DELETE`.
	 * @returns {String} The http request method `DELETE`.
	 */
	static get DELETE()
	{
		return 'DELETE';
	}

	/**
	 * Represents the HTTP request method `GET`.
	 * @returns {String} The http request method `GET`.
	 */
	static get GET()
	{
		return 'GET';
	}

	/**
	 * Represents the HTTP request method `HEAD`.
	 * @returns {String} The http request method `HEAD`.
	 */
	static get HEAD()
	{
		return 'HEAD';
	}

	/**
	 * Represents the HTTP request method `HTTP`.
	 * @returns {String} The http request method `HTTP`.
	 */
	static get HTTP()
	{
		return 'HTTP';
	}

	/**
	 * Represents the HTTP request method `LOCK`.
	 * @returns {String} The http request method `LOCK`.
	 */
	static get LOCK()
	{
		return 'LOCK';
	}

	/**
	 * Represents the HTTP request method `MKCOL`.
	 * @returns {String} The http request method `MKCOL`.
	 */
	static get MKCOL()
	{
		return 'MKCOL';
	}

	/**
	 * Represents the HTTP request method `MOVE`.
	 * @returns {String} The http request method `MOVE`.
	 */
	static get MOVE()
	{
		return 'MOVE';
	}

	/**
	 * Represents the HTTP request method `OPTIONS`.
	 * @returns {String} The http request method `OPTIONS`.
	 */
	static get OPTIONS()
	{
		return 'OPTIONS';
	}

	/**
	 * Represents the HTTP request method `PATCH`.
	 * @returns {String} The http request method `PATCH`.
	 */
	static get PATCH()
	{
		return 'PATCH';
	}

	/**
	 * Represents the HTTP request method `POST`.
	 * @returns {String} The http request method `POST`.
	 */
	static get POST()
	{
		return 'POST';
	}

	/**
	 * Represents the HTTP request method `PROPFIND`.
	 * @returns {String} The http request method `PROPFIND`.
	 */
	static get PROPFIND()
	{
		return 'PROPFIND';
	}

	/**
	 * Represents the HTTP request method `PROPPATCH`.
	 * @returns {String} The http request method `PROPPATCH`.
	 */
	static get PROPPATCH()
	{
		return 'PROPPATCH';
	}

	/**
	 * Represents the HTTP request method `PUT`.
	 * @returns {String} The http request method `PUT`.
	 */
	static get PUT()
	{
		return 'PUT';
	}

	/**
	 * Represents the HTTP request method `TRACE`.
	 * @returns {String} The http request method `TRACE`.
	 */
	static get TRACE()
	{
		return 'TRACE';
	}

	/**
	 * Represents the HTTP request method `UNLOCK`.
	 * @returns {String} The http request method `UNLOCK`.
	 */
	static get UNLOCK()
	{
		return 'UNLOCK';
	}
}
