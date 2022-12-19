'use strict';

import UnknownUrlPartialException from './UnknownUrlPartialException.js';
import UrlPartial from './UrlPartial.js';

URL.prototype.getLeftPart = function ( urlPartial )
{
	switch ( urlPartial )
	{
		case UrlPartial.PROTOCOL:
		{
			return String.format`${ 0 }`
			( this.protocol );
		}
		case UrlPartial.USERNAME:
		{
			return String.format`${ 0 }//${ 1 }`
			(
				this.getLeftPart( UrlPartial.PROTOCOL ),
				this.username
			);
		}
		case UrlPartial.PASSWORD:
		{
			if ( String.empty === this.password )
			{
				return this.getLeftPart( UrlPartial.USERNAME );
			}

			return String.format`${ 0 }:${ 1 }`
			(
				this.getLeftPart( UrlPartial.USERNAME ),
				this.password
			);
		}
		case UrlPartial.HOSTNAME:
		{
			if ( String.empty === this.username && String.empty === this.password )
			{
				return String.format`${ 0 }${ 1 }`
				(
					this.getLeftPart( UrlPartial.PASSWORD ),
					this.hostname
				);
			}

			return String.format`${ 0 }@${ 1 }`
			(
				this.getLeftPart( UrlPartial.PASSWORD ),
				this.hostname
			);
		}
		case UrlPartial.PORT:
		{
			if ( String.empty === this.port )
			{
				return this.getLeftPart( UrlPartial.HOSTNAME )
			}

			return String.format`${ 0 }:${ 1 }`
			(
				this.getLeftPart( UrlPartial.HOSTNAME ),
				this.port
			);
		}
		case UrlPartial.PATHNAME:
		{
			return String.format`${ 0 }${ 1 }`
			(
				this.getLeftPart( UrlPartial.PORT ),
				this.pathname
			);
		}
		case UrlPartial.SEARCH:
		{
			return String.format`${ 0 }${ 1 }`
			(
				this.getLeftPart( UrlPartial.PATHNAME ),
				this.search
			);
		}
		case UrlPartial.HASH:
		{
			return String.format`${ 0 }${ 1 }`
			(
				this.getLeftPart( UrlPartial.SEARCH ),
				this.hash
			);
		}
	}

	throw UnknownUrlPartialException.with_urlPartial( urlPartial );
};
