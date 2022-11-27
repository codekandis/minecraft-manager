'use strict';

import HttpHeaderCollection from './HttpHeaderCollection.js';

class HttpResponseHeaderCollection extends HttpHeaderCollection
{
	contains( httpResponseHeader )
	{
		return super.contains( httpResponseHeader );
	}

	add( ...httpResponseHeader )
	{
		super.add( ...httpResponseHeader );
	}

	replace( ...httpResponseHeader )
	{
		super.replace( ...httpResponseHeader );
	}

	addOrReplace( ...httpResponseHeader )
	{
		super.addOrReplace( ...httpResponseHeader );
	}

	remove( ...httpResponseHeader )
	{
		super.remove( ...httpResponseHeader );
	}

	removeByName( httpResponseHeaderName )
	{
		super.removeByName( httpResponseHeaderName );
	}

	findFirst( httpResponseHeaderName )
	{
		return super.findFirst( httpResponseHeaderName );
	}

	findLast( httpResponseHeaderName )
	{
		return super.findLast( httpResponseHeaderName );
	}

	findAll( httpResponseHeaderName )
	{
		return super.findAll( httpResponseHeaderName );
	}
}

export default HttpResponseHeaderCollection;
