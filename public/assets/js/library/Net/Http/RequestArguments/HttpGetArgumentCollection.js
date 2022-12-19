'use strict';

import HttpArgumentCollection from './HttpArgumentCollection.js';

class HttpGetArgumentCollection extends HttpArgumentCollection
{
	contains( httpGetArgument )
	{
		return super.contains( httpGetArgument );
	}

	add( ...httpGetArguments )
	{
		super.add( ...httpGetArguments );
	}

	replace( ...httpGetArguments )
	{
		super.replace( ...httpGetArguments );
	}

	addOrReplace( ...httpGetArguments )
	{
		super.addOrReplace( ...httpGetArguments );
	}

	remove( ...httpGetArguments )
	{
		super.remove( ...httpGetArguments );
	}

	removeByName( httpGetArgumentName )
	{
		super.removeByName( name );
	}

	findFirst( httpGetArgumentName )
	{
		return super.findFirst( ...httpGetArgumentName );
	}

	findLast( httpGetArgumentName )
	{
		return super.findLast( httpGetArgumentName );
	}

	findAll( httpGetArgumentName )
	{
		return super.findAll( httpGetArgumentName );
	}
}

export default HttpGetArgumentCollection;
