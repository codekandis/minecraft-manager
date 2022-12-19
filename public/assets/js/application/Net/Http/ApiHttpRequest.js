'use strict';

import ContentType from '../../../library/Net/Http/ContentType.js';
import ContentTypeHttpRequestHeader from '../../../library/Net/Http/Headers/RequestHeaders/ContentTypeHttpRequestHeader.js';
import HttpRequest from '../../../library/Net/Http/HttpRequest.js';
import HttpRequestMethod from '../../../library/Net/Http/HttpRequestMethod.js';

class ApiHttpRequest extends HttpRequest
{
	constructor( uri )
	{
		super( uri );

		this.#initialize();
	}

	#initialize()
	{
		this.#applyRequestHeaders();
	}

	#applyRequestHeaders()
	{
		this.headers.add(
			new ContentTypeHttpRequestHeader( ContentType.APPLICATION_JSON_UTF8 )
		);
	}

	static createGetRequest( uri )
	{
		return new ApiHttpRequest( uri );
	}

	static createPostRequest( uri )
	{
		const request  = new ApiHttpRequest( uri );
		request.method = HttpRequestMethod.POST;

		return request;
	}
}

export default ApiHttpRequest;
