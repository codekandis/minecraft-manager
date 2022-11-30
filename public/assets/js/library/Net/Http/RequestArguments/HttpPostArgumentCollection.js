'use strict';

import HttpArgumentCollection from './HttpArgumentCollection.js';

class HttpPostArgumentCollection extends HttpArgumentCollection
{
	contains( httpPostArgument )
	{
		return super.contains( httpPostArgument );
	}

	add( ...httpPostArguments )
	{
		super.add( ...httpPostArguments );
	}

	replace( ...httpPostArguments )
	{
		super.replace( ...httpPostArguments );
	}

	addOrReplace( ...httpPostArguments )
	{
		super.addOrReplace( ...httpPostArguments );
	}

	remove( ...httpPostArguments )
	{
		super.remove( ...httpPostArguments );
	}

	removeByName( httpPostArgumentName )
	{
		super.removeByName( name );
	}

	findFirst( httpPostArgumentName )
	{
		return super.findFirst( ...httpPostArgumentName );
	}

	findLast( httpPostArgumentName )
	{
		return super.findLast( httpPostArgumentName );
	}

	findAll( httpPostArgumentName )
	{
		return super.findAll( httpPostArgumentName );
	}
}

export default HttpPostArgumentCollection;
