'use strict';

import Abstract from '../../Types/Abstract.js';
import LocationHttpResponseHeader from './Headers/ResponseHeaders/LocationHttpResponseHeader.js';
import HttpRequest from './HttpRequest.js';
import HttpRequestMethod from './HttpRequestMethod.js';
import HttpResponseRedirectPersecutionMode from './HttpResponseRedirectPersecutionMode.js';
import HttpResponseStatusCode from './HttpResponseStatusCode.js';

class HttpResponseRedirectPersecutor extends Abstract
{
	#_request                                          = undefined;
	#_requestResult                                    = undefined;
	#_requestCreator                                   = undefined;
	#_validStrictModeImmutableRedirectResponseStatuses = [
		HttpResponseStatusCode.MOVED_PERMANENTLY,
		HttpResponseStatusCode.FOUND,
		HttpResponseStatusCode.TEMPORARY_REDIRECT,
		HttpResponseStatusCode.PERMANENT_REDIRECT
	];
	#_validStrictModeMutableRedirectResponseStatuses   = [
		HttpResponseStatusCode.SEE_OTHER
	];
	#_validLaxModeImmutableRedirectResponseStatuses    = [
		HttpResponseStatusCode.TEMPORARY_REDIRECT,
		HttpResponseStatusCode.PERMANENT_REDIRECT
	];
	#_validLaxModeMutableRedirectResponseStatuses      = [
		HttpResponseStatusCode.MOVED_PERMANENTLY,
		HttpResponseStatusCode.FOUND,
		HttpResponseStatusCode.SEE_OTHER
	];

	constructor( request, requestResult, requestCreator )
	{
		super();

		this.#_request        = request;
		this.#_requestResult  = requestResult;
		this.#_requestCreator = requestCreator;
	}

	persecute()
	{
		if ( HttpResponseRedirectPersecutionMode.NONE === this.#_request.redirectPersecutionMode )
		{
			return this.#_requestResult;
		}

		const locationHeader = this.#_requestResult.response.headers.findFirst( LocationHttpResponseHeader.NAME );

		if ( null === locationHeader )
		{
			return this.#_requestResult;
		}

		const isImmutableRedirectResponseStatus = HttpResponseRedirectPersecutionMode.STRICT === this.#_request.redirectPersecutionMode
			? -1 !== this.#_validStrictModeImmutableRedirectResponseStatuses.includes( this.#_requestResult.response.statusCode )
			: -1 !== this.#_validLaxModeImmutableRedirectResponseStatuses.includes( this.#_requestResult.response.statusCode );
		const isMutableRedirectResponseStatus   = HttpResponseRedirectPersecutionMode.STRICT === this.#_request.redirectPersecutionMode
			? -1 !== this.#_validStrictModeMutableRedirectResponseStatuses.includes( this.#_requestResult.response.statusCode )
			: -1 !== this.#_validLaxModeMutableRedirectResponseStatuses.includes( this.#_requestResult.response.statusCode );

		if ( false === isImmutableRedirectResponseStatus && false === isMutableRedirectResponseStatus )
		{
			return this.#_requestResult;
		}

		const uri = new URL( locationHeader.value );

		const request = null === this.#_requestCreator
			? new HttpRequest( uri )
			: this.#_requestCreator.create( uri );

		if ( false === isImmutableRedirectResponseStatus )
		{
			request.method = HttpRequestMethod.GET;
		}
		else
		{
			request.method        = this.#_request.method;
			request.postArguments = this.#_request.postArguments;
			request.postFiles     = this.#_request.postFiles;
			request.payload       = this.#_request.payload;
		}

		request.requestCreator          = this.#_requestCreator;
		request.redirectPersecutionMode = this.#_request.redirectPersecutionMode;

		return request.send();
	}
}

export default HttpResponseRedirectPersecutor;
