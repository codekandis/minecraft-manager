'use strict';

import Collection from '../../../Collections/Collection.js';
import HttpPostFileNamePreparator from './HttpPostFileNamePreparator.js';

class HttpPostFileCollection extends Collection
{
	constructor( ...httpPostFiles )
	{
		super();

		this.add( ...httpPostFiles );
	}

	get length()
	{
		return this.__items.length;
	}

	contains( httpPostFile )
	{
		return null !== this.findFirst( httpPostFile.name );
	}

	add( ...httpPostFiles )
	{
		super.add( ...httpPostFiles );
	}

	replace( ...httpPostFiles )
	{
		httpPostFiles.forEach(
			( httpPostFile ) =>
			{
				const existingHttpPostFile = this.findFirst( httpPostFile.name );

				if ( null === existingHttpPostFile )
				{
					return;
				}

				this.remove( existingHttpPostFile );
				this.add( httpPostFile );
			}
		);
	}

	addOrReplace( ...httpPostFiles )
	{
		httpPostFiles.forEach(
			( httpPostFile ) =>
			{
				const foundHttpPostFileIndex = this.__items.findIndex(
					( fetchedHttpPostFile ) =>
					{
						return fetchedHttpPostFile.name === httpPostFile.name;
					}
				);

				if ( -1 === foundHttpPostFileIndex )
				{
					this.add( httpPostFile );

					return;
				}

				this.__items[ foundHttpPostFileIndex ] = httpPostFile;
			}
		);
	}

	remove( ...httpPostFiles )
	{
		super.remove( ...httpPostFiles );
	}

	removeByName( httpPostFileName )
	{
		this.remove(
			...this.findAll( httpPostFileName )
		);
	}

	findFirst( httpPostFileName )
	{
		const preparedHttpPostFileName = ( new HttpPostFileNamePreparator() )
			.prepare( httpPostFileName );

		return this.__items.findFirstOrNull(
			( httpPostFile ) =>
			{
				return httpPostFile.name === preparedHttpPostFileName;
			}
		);
	}

	findLast( httpPostFileName )
	{
		const preparedHttpPostFileName = ( new HttpPostFileNamePreparator() )
			.prepare( httpPostFileName );

		return this.__items.findLastOrNull(
			( httpPostFile ) =>
			{
				return httpPostFile.name === preparedHttpPostFileName;
			}
		);
	}

	findAll( httpPostFileName )
	{
		const preparedHttpPostFileName = ( new HttpPostFileNamePreparator() )
			.prepare( httpPostFileName );

		return this.__items.filter(
			( httpPostFile ) =>
			{
				return httpPostFile.name === preparedHttpPostFileName;
			}
		);
	}
}

export default HttpPostFileCollection;
