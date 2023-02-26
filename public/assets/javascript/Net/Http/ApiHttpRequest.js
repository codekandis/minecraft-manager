'use strict';

import { ContentType } from '../../../libraries/jotunheim/Net/Http/ContentType.js';
import { ContentTypeHttpRequestHeader } from '../../../libraries/jotunheim/Net/Http/Headers/RequestHeaders/ContentTypeHttpRequestHeader.js';
import { HttpRequest } from '../../../libraries/jotunheim/Net/Http/HttpRequest.js';
import { HttpRequestMethod } from '../../../libraries/jotunheim/Net/Http/HttpRequestMethod.js';

/**
 * Represents an API HTTP request.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ApiHttpRequest extends HttpRequest
{
	/**
	 * Constructor method.
	 * @param {URL} uri The URI of the request.
	 */
	constructor( uri )
	{
		super( uri );

		this.#initialize();
	}

	/**
	 * Initializes the request.
	 */
	#initialize()
	{
		this.#addCommonRequestHeaders();
	}

	/**
	 * Adds the common request headers.
	 */
	#addCommonRequestHeaders()
	{
		this.headers.add(
			new ContentTypeHttpRequestHeader( ContentType.APPLICATION_JSON_UTF8 )
		);
	}

	/**
	 * Creates an HTTP GET request.
	 * @param {URL} uri The URL of the request.
	 * @returns {ApiHttpRequest}
	 * @constructor
	 */
	static createGetRequest( uri )
	{
		return new ApiHttpRequest( uri );
	}

	/**
	 * Creates an HTTP POST request.
	 * @param {URL} uri The URL of the request.
	 * @returns {ApiHttpRequest}
	 * @constructor
	 */
	static createPostRequest( uri )
	{
		const request  = new ApiHttpRequest( uri );
		request.method = HttpRequestMethod.POST;

		return request;
	}
}
