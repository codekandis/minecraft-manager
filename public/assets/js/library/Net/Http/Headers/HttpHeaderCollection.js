'use strict';

import Collection from '../../../Collections/Collection.js';
import HttpHeaderNamePreparator from './HttpHeaderNamePreparator.js';

export class HttpHeaderCollection extends Collection
{
	contains( httpHeader )
	{
		return null !== this.findFirst( httpHeader.name );
	}

	add( ...httpHeaders )
	{
		super.add( ...httpHeaders );
	}

	replace( ...httpHeaders )
	{
		httpHeaders.forEach(
			( httpHeader ) =>
			{
				const foundHttpHeaderIndex = this.__items.findIndex(
					( fetchedHttpHeader ) =>
					{
						return fetchedHttpHeader.name === httpHeader.name;
					}
				);

				if ( -1 === foundHttpHeaderIndex )
				{
					return;
				}

				this.__items[ foundHttpHeaderIndex ] = httpHeader;
			}
		);
	}

	addOrReplace( ...httpHeaders )
	{
		httpHeaders.forEach(
			( httpHeader ) =>
			{
				const foundHttpHeaderIndex = this.__items.findIndex(
					( fetchedHttpHeader ) =>
					{
						return fetchedHttpHeader.name === httpHeader.name;
					}
				);

				if ( -1 === foundHttpHeaderIndex )
				{
					this.add( httpHeader );

					return;
				}

				this.__items[ foundHttpHeaderIndex ] = httpHeader;
			}
		);
	}

	remove( ...httpHeaders )
	{
		super.remove( ...httpHeaders );
	}

	removeByName( httpHeaderName )
	{
		this.remove(
			...this.findAll( httpHeaderName )
		);
	}

	findFirst( httpHeaderName )
	{
		const preparedHttpHeaderName = ( new HttpHeaderNamePreparator() )
			.prepare( httpHeaderName );

		return this.__items.findFirstOrNull(
			( httpHeader ) =>
			{
				return httpHeader.name === preparedHttpHeaderName;
			}
		);
	}

	findLast( httpHeaderName )
	{
		const preparedHttpHeaderName = ( new HttpHeaderNamePreparator() )
			.prepare( httpHeaderName );

		return this.__items.findLastOrNull(
			( httpHeader ) =>
			{
				return httpHeader.name === preparedHttpHeaderName;
			}
		);
	}

	findAll( httpHeaderName )
	{
		const preparedHttpHeaderName = ( new HttpHeaderNamePreparator() )
			.prepare( httpHeaderName );

		return this.__items.filter(
			( httpHeader ) =>
			{
				return httpHeader.name === preparedHttpHeaderName;
			}
		);
	}
}

export default HttpHeaderCollection;
