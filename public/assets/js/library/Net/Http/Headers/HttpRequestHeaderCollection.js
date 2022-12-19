'use strict';

import HttpHeaderCollection from './HttpHeaderCollection.js';

class HttpRequestHeaderCollection extends HttpHeaderCollection
{
	contains( httpRequestHeader )
	{
		return super.contains( httpRequestHeader );
	}

	add( ...httpRequestHeaders )
	{
		super.add( ...httpRequestHeaders );
	}

	replace( ...httpRequestHeaders )
	{
		super.replace( ...httpRequestHeaders );
	}

	addOrReplace( ...httpRequestHeaders )
	{
		super.addOrReplace( ...httpRequestHeaders );
	}

	remove( ...httpRequestHeaders )
	{
		super.remove( ...httpRequestHeaders );
	}

	removeByName( httpRequestHeaderName )
	{
		super.removeByName( httpRequestHeaderName );
	}

	findFirst( httpRequestHeaderName )
	{
		return super.findFirst( httpRequestHeaderName );
	}

	findLast( httpRequestHeaderName )
	{
		return super.findLast( httpRequestHeaderName );
	}

	findAll( httpRequestHeaderName )
	{
		return super.findAll( httpRequestHeaderName );
	}
}

export default HttpRequestHeaderCollection;
