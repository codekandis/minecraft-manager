'use strict';

import { Abstract } from '../../Types/Abstract.js';
import { PartialUrlType } from '../PartialUrlType.js';
import { ContentType } from './ContentType.js';
import { HeadersToHttpResponseHeaderCollectionConverter } from './Headers/HeadersToHttpResponseHeaderCollectionConverter.js';
import { HttpRequestHeaderCollection } from './Headers/HttpRequestHeaderCollection.js';
import { ContentTypeHttpRequestHeader } from './Headers/RequestHeaders/ContentTypeHttpRequestHeader.js';
import { HttpPostDataContentType } from './HttpPostDataContentType.js';
import { HttpRequestError } from './HttpRequestError.js';
import { HttpRequestMethod } from './HttpRequestMethod.js';
import { HttpRequestResult } from './HttpRequestResult.js';
import { HttpResponse } from './HttpResponse.js';
import { HttpGetArgument } from './RequestArguments/HttpGetArgument.js';
import { HttpGetArgumentCollection } from './RequestArguments/HttpGetArgumentCollection.js';
import { HttpPostArgumentCollection } from './RequestArguments/HttpPostArgumentCollection.js';
import { HttpPostFileCollection } from './RequestArguments/HttpPostFileCollection.js';

/**
 * Represents an HTTP request wrapping a Fetch API request.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpRequest extends Abstract
{
	/**
	 * Stores the abort controller of the request.
	 * @type {AbortController}
	 */
	#_abortController = new AbortController();

	/**
	 * Stores the URI of the request.
	 * @type {URL}
	 */
	#_uri;

	/**
	 * Stores the HTTP request method.
	 * @type {String}
	 */
	#_method = HttpRequestMethod.GET;

	/**
	 * Stores the collection of HTTP request headers.
	 * @type {HttpRequestHeaderCollection}
	 */
	#_headers = new HttpRequestHeaderCollection();

	/**
	 * Stores the collection of HTTP GET arguments.
	 * @type {HttpGetArgumentCollection}
	 */
	#_getArguments = new HttpGetArgumentCollection();

	/**
	 * Stores the collection of HTTP GET arguments.
	 * @type {String}
	 */
	#_postDataContentType = HttpPostDataContentType.PREFER_APPLICATION_X_WWW_FORM_URL_ENCODED;

	/**
	 * Stores the collection of HTTP POST arguments.
	 * @type {HttpPostArgumentCollection}
	 */
	#_postArguments = new HttpPostArgumentCollection();

	/**
	 * Stores the collection of HTTP POST files.
	 * @type {HttpPostFileCollection}
	 */
	#_postFiles = new HttpPostFileCollection();

	/**
	 * Stores the payload of the request.
	 * @type {?String}
	 */
	#_payload = null;

	/**
	 * Constructor method.
	 * @param {URL} uri The URL of the request.
	 */
	constructor( uri )
	{
		super();

		uri.searchParams.forEach(
			( argumentValue, argumentName ) =>
			{
				this.#_getArguments.add( new HttpGetArgument( argumentName, argumentValue ) );
			}
		);

		this.#_uri = new URL(
			String.format`${ 0 }${ 1 }`(
				uri.getLeftPart( PartialUrlType.PATHNAME ),
				uri.hash
			)
		);
	}

	/**
	 * Gets the URI with the whole HTTP GET arguments.
	 * @returns {URL} The URI with the whole HTTP GET arguments.
	 */
	get #uriWithGetArguments()
	{
		return new URL(
			null === this.#_getArguments || 0 === this.#_getArguments.length
				? this.#_uri.href
				: String.format`${ 0 }?${ 1 }${ 2 }`(
					this.#_uri.getLeftPart( PartialUrlType.PATHNAME ),
					this.#_getArguments.fullHttpArgumentsString,
					this.#_uri.hash
				)
		);
	}

	/**
	 * Gets the HTTP request method.
	 * @returns {String} The HTTP request method.
	 */
	get method()
	{
		return this.#_method;
	}

	/**
	 * Sets the HTTP request method.
	 * @param {String} value The HTTP request method.
	 */
	set method( value )
	{
		this.#_method = value;
	}

	/**
	 * Gets the HTTP request headers.
	 * @returns {HttpRequestHeaderCollection} The HTTP request headers.
	 */
	get headers()
	{
		return this.#_headers;
	}

	/**
	 * Sets the HTTP request headers.
	 * @param {HttpRequestHeaderCollection} value The HTTP request headers.
	 */
	set headers( value )
	{
		this.#_headers = value ?? new HttpRequestHeaderCollection();
	}

	/**
	 * Gets the HTTP request arguments.
	 * @returns {HttpGetArgumentCollection} The HTTP request arguments.
	 */
	get getArguments()
	{
		return this.#_getArguments;
	}

	/**
	 * Sets the HTTP GET arguments.
	 * @param {HttpGetArgumentCollection} value The HTTP request arguments.
	 */
	set getArguments( value )
	{
		this.#_getArguments = value ?? new HttpGetArgumentCollection();
	}

	/**
	 * Gets the HTTP POST data content type.
	 * @returns {String} The HTTP POST data content type
	 */
	get postDataContentType()
	{
		return this.#_postDataContentType;
	}

	/**
	 * Sets the HTTP POST data content type
	 * @param {String} value The HTTP POST data content type
	 */
	set postDataContentType( value )
	{
		this.#_postDataContentType = value;
	}

	/**
	 * Gets the HTTP POST arguments.
	 * @returns {HttpPostArgumentCollection} The HTTP POST arguments.
	 */
	get postArguments()
	{
		return this.#_postArguments;
	}

	/**
	 * Sets the HTTP POST arguments.
	 * @param {HttpPostArgumentCollection} value The HTTP POST arguments.
	 */
	set postArguments( value )
	{
		this.#_postArguments = value ?? new HttpPostArgumentCollection();
	}

	/**
	 * Gets the HTTP POST files.
	 * @returns {HttpPostFileCollection} The HTTP POST files.
	 */
	get postFiles()
	{
		return this.#_postFiles;
	}

	/**
	 * Sets the HTTP POST files.
	 * @param {HttpPostFileCollection} value The HTTP POST files.
	 */
	set postFiles( value )
	{
		this.#_postFiles = value ?? new HttpPostFileCollection();
	}

	/**
	 * Gets the payload of the request.
	 * @returns {?String} The payload of the request.
	 */
	get payload()
	{
		return this.#_payload;
	}

	/**
	 * Sets the payload of the request.
	 * @param {?String} value The payload of the request.
	 */
	set payload( value )
	{
		this.#_payload = value;
	}

	/**
	 * Adds the HTTP request method to the Fetch API request options.
	 * @param {Object} requestOptions The Fetch API request options.
	 */
	#addRequestMethod( requestOptions )
	{
		requestOptions.method = this.method;
	}

	/**
	 * Adds the URL-encoded HTTP POST arguments to the Fetch API options.
	 * @param {Object} requestOptions The Fetch API request options.
	 */
	#addApplicationXWwwFormUrlEncodedPostArguments( requestOptions )
	{
		this.headers.removeByHeaderNames( ContentTypeHttpRequestHeader.NAME );
		this.headers.add(
			new ContentTypeHttpRequestHeader( ContentType.APPLICATION_X_WWW_FORM_URLENCODED )
		);

		requestOptions.body = new URLSearchParams();
		this.postArguments
			.forEach(
				( postArgument ) =>
				{
					requestOptions.body.append( postArgument.name, postArgument.value );
				}
			);
	}

	/**
	 * Adds the multipart form data HTTP POST arguments to the Fetch API options.
	 * @param {Object} requestOptions The Fetch API request options.
	 */
	#addMultipartFormDataPostArguments( requestOptions )
	{
		this.headers.removeByHeaderNames( ContentTypeHttpRequestHeader.NAME );

		requestOptions.body = new FormData();
		this.postArguments
			.forEach(
				( postArgument ) =>
				{
					requestOptions.body.append( postArgument.name, postArgument.value );
				}
			);
		this.postFiles
			.forEach(
				( postFile ) =>
				{
					requestOptions.body.append( postFile.name, postFile.file );
				}
			);
	}

	/**
	 * Adds the preferred type of HTTP POST arguments to the Fetch API options.
	 * @param {Object} requestOptions The Fetch API request options.
	 */
	#addPreferredApplicationXWwwFormUrlEncodedPostArguments( requestOptions )
	{
		if ( 0 === this.postFiles.length )
		{
			this.#addApplicationXWwwFormUrlEncodedPostArguments( requestOptions );

			return;
		}

		this.#addMultipartFormDataPostArguments( requestOptions );
	}

	/**
	 * Adds the HTTP POST arguments to the Fetch API request options.
	 * @param {Object} requestOptions The Fetch API request options.
	 */
	#addPostArguments( requestOptions )
	{
		if ( 0 === this.postArguments.length && 0 === this.postFiles.length )
		{
			return;
		}

		switch ( this.postDataContentType )
		{
			case HttpPostDataContentType.APPLICATION_X_WWW_FORM_URL_ENCODED:
			{
				this.#addApplicationXWwwFormUrlEncodedPostArguments( requestOptions );

				break;
			}
			case HttpPostDataContentType.MULTIPART_FORM_DATA:
			{
				this.#addMultipartFormDataPostArguments( requestOptions );

				break;
			}
			case HttpPostDataContentType.PREFER_APPLICATION_X_WWW_FORM_URL_ENCODED:
			{
				this.#addPreferredApplicationXWwwFormUrlEncodedPostArguments( requestOptions );

				break;
			}
		}
	}

	/**
	 * Adds the payload to the Fetch API request options.
	 * @param {Object} requestOptions The Fetch API request options.
	 */
	#addPayload( requestOptions )
	{
		if ( null !== this.#_payload )
		{
			requestOptions.body = this.#_payload;
		}
	}

	/**
	 * Adds the HTTP request headers to the Fetch API request options.
	 * @param {Object} requestOptions The Fetch API request options.
	 */
	#addHeaders( requestOptions )
	{
		requestOptions.headers = new Headers();
		this.headers
			.forEach(
				( header ) =>
				{
					requestOptions.headers.append( header.name, header.value );
				}
			);
	}

	/**
	 * Adds the abort controller signal to the Fetch API request options.
	 * @param {Object} requestOptions The Fetch API request options.
	 */
	#addAbortControllerSignal( requestOptions )
	{
		requestOptions.signal = this.#_abortController.signal;
	}

	/**
	 * Creates the Fetch API request options.
	 * @returns {Object} The Fetch API request options.
	 */
	#createFetchApiRequestOptions()
	{
		const requestOptions = {
			credentials:    'same-origin',
			referrerPolicy: 'no-referrer'
		};

		this.#addRequestMethod( requestOptions );
		this.#addPostArguments( requestOptions );
		this.#addPayload( requestOptions );
		this.#addHeaders( requestOptions );
		this.#addAbortControllerSignal( requestOptions );

		return requestOptions;
	}

	/**
	 * Retrieves the collection of HTTP response headers from the response.
	 * @param response The response to retrieve the HTTP response headers from.
	 * @returns {HttpResponseHeaderCollection} The collection of HTTP response headers.
	 */
	#retrieveResponseHeaders( response )
	{
		return ( new HeadersToHttpResponseHeaderCollectionConverter() )
			.convert( response.headers );
	}

	/**
	 * Aborts the request.
	 */
	abort()
	{
		this.#_abortController.abort();
	}

	/**
	 * Sends the request.
	 * @returns {HttpRequestResult} The result of the request.
	 */
	async send()
	{
		const requestOptions = this.#createFetchApiRequestOptions();

		let request;

		try
		{
			request = new Request( this.#uriWithGetArguments.href, requestOptions );
		}
		catch ( exception )
		{
			return new HttpRequestResult(
				new HttpRequestError(
					exception.message
				),
				null
			);
		}

		return await fetch( request )
			.then(
				async ( response ) =>
				{
					/**
					 * @type {String}
					 */
					const responsePayload = await response.arrayBuffer()
						.then(
							( arrayBuffer ) =>
							{
								let binaryString = String.empty;

								const uint8buffer = new Uint8Array( arrayBuffer );
								for ( let n = 0; n < uint8buffer.length; n++ )
								{
									binaryString += String.fromCharCode( uint8buffer[ n ] );
								}

								return binaryString;
							}
						);

					const httpResponse = new HttpResponse(
						this.#uriWithGetArguments,
						response.status,
						this.#retrieveResponseHeaders( response ),
						responsePayload
					);

					return new HttpRequestResult( null, httpResponse );
				}
			)
			.catch(
				( exception ) =>
				{
					return new HttpRequestResult(
						new HttpRequestError(
							exception.message
						),
						null
					);
				}
			);
	}
}
