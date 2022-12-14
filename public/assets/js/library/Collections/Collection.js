'use strict';

import Abstract from '../Types/Abstract.js';

class Collection extends Abstract
{
	__items = [];

	constructor( ...items )
	{
		super();

		this.add( ...items );
	}

	get length()
	{
		return this.__items.length;
	}

	contains( item )
	{
		return null !== this.findFirst( item );
	}

	add( ...items )
	{
		items.forEach(
			( item ) =>
			{
				this.__items.push( item );
			}
		);
	}

	replace( ...items )
	{
		items.forEach(
			( item ) =>
			{
				const foundItemIndex = this.__items.findIndex(
					( fetchedItem ) =>
					{
						return fetchedItem === item;
					}
				);

				if ( -1 === foundItemIndex )
				{
					return;
				}

				this.__items[ foundItemIndex ] = item;
			}
		);
	}

	addOrReplace( ...items )
	{
		items.forEach(
			( item ) =>
			{
				const foundItem = this.findFirst( item.name );

				if ( null !== foundItem )
				{
					this.replace( item );

					return;
				}

				this.add( item );
			}
		);
	}

	remove( ...items )
	{
		items.forEach(
			( item ) =>
			{
				this.__items.remove( item );
			}
		);
	}

	findFirst( item )
	{
		return this.__items.findFirstOrNull(
			( fetchedItem ) =>
			{
				return fetchedItem === item;
			}
		);
	}

	findLast( item )
	{
		return this.__items.findLastOrNull(
			( fetchedItem ) =>
			{
				return fetchedItem === item;
			}
		);
	}

	findAll( item )
	{
		return this.__items.filter(
			( fetchedItem ) =>
			{
				return fetchedItem.name === item;
			}
		);
	}

	toArray()
	{
		return this.__items.map(
			( item ) =>
			{
				return item;
			}
		)
	}

	* items()
	{
		for ( const item of this.__items )
		{
			yield item;
		}
	}
}

export default Collection;
