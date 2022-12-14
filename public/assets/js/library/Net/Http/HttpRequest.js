'use strict';

import Abstract from '../../Types/Abstract.js';
import UrlPartial from '../UrlPartial.js';
import ContentType from './ContentType.js';
import HeadersToHttpResponseHeaderCollectionConverter from './Headers/HeadersToHttpResponseHeaderCollectionConverter.js';
import HttpRequestHeaderCollection from './Headers/HttpRequestHeaderCollection.js';
import ContentTypeHttpRequestHeader from './Headers/RequestHeaders/ContentTypeHttpRequestHeader.js';
import HttpPostDataContentType from './HttpPostDataContentType.js';
import HttpRequestError from './HttpRequestError.js';
import HttpRequestMethod from './HttpRequestMethod.js';
import HttpRequestResult from './HttpRequestResult.js';
import HttpResponse from './HttpResponse.js';
import HttpResponseRedirectPersecutionMode from './HttpResponseRedirectPersecutionMode.js';
import HttpResponseRedirectPersecutor from './HttpResponseRedirectPersecutor.js';
import HttpGetArgument from './RequestArguments/HttpGetArgument.js';
import HttpGetArgumentCollection from './RequestArguments/HttpGetArgumentCollection.js';
import HttpPostArgumentCollection from './RequestArguments/HttpPostArgumentCollection.js';
import HttpPostFileCollection from './RequestArguments/HttpPostFileCollection.js';

class HttpRequest extends Abstract
{
	#_abortController         = new AbortController();
	#_uri                     = undefined;
	#_method                  = HttpRequestMethod.GET;
	#_headers                 = new HttpRequestHeaderCollection();
	#_getArguments            = new HttpGetArgumentCollection();
	#_postDataContentType     = HttpPostDataContentType.PREFER_APPLICATION_X_WWW_FORM_URL_ENCODED;
	#_postArguments           = new HttpPostArgumentCollection();
	#_postFiles               = new HttpPostFileCollection();
	#_payload                 = null;
	#_redirectPersecutionMode = HttpResponseRedirectPersecutionMode.NONE;
	#_requestCreator          = null;

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
				uri.getLeftPart( UrlPartial.PATHNAME ),
				uri.hash
			)
		);
	}

	get #uriWithGetArguments()
	{
		return new URL(
			null === this.#_getArguments || 0 === this.#_getArguments.length
				? this.#_uri.href
				: String.format`${ 0 }?${ 1 }${ 2 }`(
					this.#_uri.getLeftPart( UrlPartial.PATHNAME ),
					this.#_getArguments.fullHttpArgumentsString,
					this.#_uri.hash
				)
		);
	}

	get method()
	{
		return this.#_method;
	}

	set method( value )
	{
		this.#_method = value;
	}

	get headers()
	{
		return this.#_headers;
	}

	set headers( value )
	{
		this.#_headers = value ?? new HttpRequestHeaderCollection();
	}

	get getArguments()
	{
		return this.#_getArguments;
	}

	set getArguments( value )
	{
		this.#_getArguments = value ?? new HttpGetArgumentCollection();
	}

	get postDataContentType()
	{
		return this.#_postDataContentType;
	}

	set postDataCotentType( value )
	{
		this.#_postDataContentType = value;
	}

	get postArguments()
	{
		return this.#_postArguments;
	}

	set postArguments( value )
	{
		this.#_postArguments = value ?? new HttpPostArgumentCollection();
	}

	get postFiles()
	{
		return this.#_postFiles;
	}

	set postFiles( value )
	{
		this.#_postFiles = value ?? new HttpPostFileCollection();
	}

	get payload()
	{
		return this.#_payload;
	}

	set payload( value )
	{
		this.#_payload = value;
	}

	get redirectPersecutionMode()
	{
		return this.#_redirectPersecutionMode;
	}

	set redirectPersecutionMode( value )
	{
		this.#_redirectPersecutionMode = value;
	}

	get requestCreator()
	{
		return this.#_requestCreator;
	}

	set requestCreator( value )
	{
		this.#_requestCreator = value;
	}

	#applyRequestMethod( requestOptions )
	{
		requestOptions.method = this.method;
	}

	#applyApplicationXWwwFormUrlEncodedPostArguments( requestOptions )
	{
		this.headers.removeByName( ContentTypeHttpRequestHeader.NAME );
		this.headers.add(
			new ContentTypeHttpRequestHeader( ContentType.APPLICATION_X_WWW_FORM_URLENCODED )
		);

		requestOptions.body = new URLSearchParams();
		this.postArguments
			.items()
			.forEach(
				( postArgument ) =>
				{
					requestOptions.body.append( postArgument.name, postArgument.value );
				}
			);
	}

	#applyMultipartFormDataPostArguments( requestOptions )
	{
		this.headers.removeByName( ContentTypeHttpRequestHeader.NAME );

		requestOptions.body = new FormData();
		this.postArguments
			.items()
			.forEach(
				( postArgument ) =>
				{
					requestOptions.body.append( postArgument.name, postArgument.value );
				}
			);
		this.postFiles
			.items()
			.forEach(
				( postFile ) =>
				{
					requestOptions.body.append( postFile.name, postFile.file );
				}
			);
	}

	#applyPreferredApplicationXWwwFormUrlEncodedPostArguments( requestOptions )
	{
		if ( 0 === this.postFiles.length )
		{
			this.#applyApplicationXWwwFormUrlEncodedPostArguments( requestOptions );

			return;
		}

		this.#applyMultipartFormDataPostArguments( requestOptions );
	}

	#applyPostArguments( requestOptions )
	{
		if ( 0 === this.postArguments.length && 0 === this.postFiles.length )
		{
			return;
		}

		switch ( this.postDataContentType )
		{
			case HttpPostDataContentType.APPLICATION_X_WWW_FORM_URL_ENCODED:
			{
				this.#applyApplicationXWwwFormUrlEncodedPostArguments( requestOptions );

				break;
			}
			case HttpPostDataContentType.MULTIPART_FORM_DATA:
			{
				this.#applyMultipartFormDataPostArguments( requestOptions );

				break;
			}
			case HttpPostDataContentType.PREFER_APPLICATION_X_WWW_FORM_URL_ENCODED:
			{
				this.#applyPreferredApplicationXWwwFormUrlEncodedPostArguments( requestOptions );

				break;
			}
		}
	}

	#applyPayload( requestOptions )
	{
		if ( null !== this.#_payload )
		{
			requestOptions.body = this.#_payload;
		}
	}

	#applyHeaders( requestOptions )
	{
		requestOptions.headers = new Headers();
		this.headers
			.items()
			.forEach(
				( header ) =>
				{
					requestOptions.headers.append( header.name, header.value );
				}
			);
	}

	#applyAbortControllerSignal( requestOptions )
	{
		requestOptions.signal = this.#_abortController.signal;
	}

	#createRequestOptions()
	{
		const requestOptions = {
			credentials:    'same-origin',
			redirect:       'manual',
			referrerPolicy: 'no-referrer'
		};

		this.#applyAbortControllerSignal( requestOptions );
		this.#applyRequestMethod( requestOptions );
		this.#applyPostArguments( requestOptions );
		this.#applyPayload( requestOptions );
		this.#applyHeaders( requestOptions );

		return requestOptions;
	}

	#retrieveResponseHeaders( response )
	{
		return ( new HeadersToHttpResponseHeaderCollectionConverter() )
			.convert( response.headers );
	}

	abort()
	{
		this.#_abortController.abort();
	}

	async send()
	{
		const requestOptions = this.#createRequestOptions();

		let request;

		try
		{
			request = new Request( this.#uriWithGetArguments.href, requestOptions );
		}
		catch ( exception )
		{
			return new HttpRequestResult(
				new HttpRequestError(
					exception.message,
					null
				)
			);
		}

		return await fetch( request )
			.then(
				async ( response ) =>
				{
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

					return ( new HttpResponseRedirectPersecutor(
						this,
						new HttpRequestResult( null, httpResponse ),
						this.#_requestCreator
					) )
						.persecute();
				}
			)
			.catch(
				( exception ) =>
				{
					return new HttpRequestResult(
						new HttpRequestError(
							exception.message,
							null
						)
					);
				}
			);
	}
}

export default HttpRequest;
