'use strict';

import Collection from '../../../Collections/Collection.js';
import HttpArgumentNamePreparator from './HttpArgumentNamePreparator.js';

class HttpArgumentCollection extends Collection
{
	get fullHttpArgumentsString()
	{
		return this.__items.map(
			( httpArgument ) =>
			{
				return httpArgument.fullHttpArgumentString;
			}
		)
			.join( '&' );
	}

	contains( httpArgument )
	{
		return null !== this.findFirst( httpArgument.name );
	}

	add( ...httpArguments )
	{
		super.add( ...httpArguments );
	}

	replace( ...httpArguments )
	{
		httpArguments.forEach(
			( httpArgument ) =>
			{
				const foundHttpArgumentIndex = this.__items.findIndex(
					( fetchedHttpArgument ) =>
					{
						return fetchedHttpArgument.name === httpArgument.name;
					}
				);

				if ( -1 === foundHttpArgumentIndex )
				{
					return;
				}

				this.__items[ foundHttpArgumentIndex ] = httpArgument;
			}
		);
	}

	addOrReplace( ...httpArguments )
	{
		httpArguments.forEach(
			( httpArgument ) =>
			{
				const foundHttpArgumentIndex = this.__items.findIndex(
					( fetchedHttpArgument ) =>
					{
						return fetchedHttpArgument.name === httpArgument.name;
					}
				);

				if ( -1 === foundHttpArgumentIndex )
				{
					this.add( httpArgument );

					return;
				}

				this.__items[ foundHttpArgumentIndex ] = httpArgument;
			}
		);
	}

	remove( ...httpArguments )
	{
		super.remove( ...httpArguments );
	}

	removeByName( httpArgumentName )
	{
		this.remove(
			...this.findAll( httpArgumentName )
		);
	}

	findFirst( httpHeaderName )
	{
		const preparedHttpArgumentName = ( new HttpArgumentNamePreparator() )
			.prepare( httpHeaderName );

		return this.__items.findFirstOrNull(
			( httpArgument ) =>
			{
				return httpArgument.name === preparedHttpArgumentName;
			}
		);
	}

	findLast( httpHeaderName )
	{
		const preparedHttpArgumentName = ( new HttpArgumentNamePreparator() )
			.prepare( httpHeaderName );

		return this.__items.findLastOrNull(
			( httpArgument ) =>
			{
				return httpArgument.name === preparedHttpArgumentName;
			}
		);
	}

	findAll( httpHeaderName )
	{
		const preparedHttpArgumentName = ( new HttpArgumentNamePreparator() )
			.prepare( httpHeaderName );

		return this.__items.filter(
			( httpArgument ) =>
			{
				return httpArgument.name === preparedHttpArgumentName;
			}
		);
	}
}

export default HttpArgumentCollection;
