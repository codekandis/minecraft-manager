'use strict';

import { PartialUrlType } from './PartialUrlType.js';
import { UnknownPartialUrlTypeException } from './UnknownPartialUrlTypeException.js';

/**
 * Represents JSDoc types and prototype extensions of the class `URL`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Gets a specified portion of the URL.
 * @memberOf URL.prototype
 * @param {String} partialUrlType The end of the URL portion to return.
 * @returns {String} The extraced partial URL.
 * @throws {UnknownPartialUrlTypeException} The partial URL is invalid.
 */
Object.defineProperty(
	URL.prototype,
	'getLeftPart',
	{
		value: function ( partialUrlType )
		       {
			       switch ( partialUrlType )
			       {
				       case PartialUrlType.PROTOCOL:
				       {
					       return String.format`${ 0 }`
					       ( this.protocol );
				       }
				       case PartialUrlType.USERNAME:
				       {
					       return String.format`${ 0 }//${ 1 }`
					       (
						       this.getLeftPart( PartialUrlType.PROTOCOL ),
						       this.username
					       );
				       }
				       case PartialUrlType.PASSWORD:
				       {
					       if ( String.empty === this.password )
					       {
						       return this.getLeftPart( PartialUrlType.USERNAME );
					       }

					       return String.format`${ 0 }:${ 1 }`
					       (
						       this.getLeftPart( PartialUrlType.USERNAME ),
						       this.password
					       );
				       }
				       case PartialUrlType.HOSTNAME:
				       {
					       if ( String.empty === this.username && String.empty === this.password )
					       {
						       return String.format`${ 0 }${ 1 }`
						       (
							       this.getLeftPart( PartialUrlType.PASSWORD ),
							       this.hostname
						       );
					       }

					       return String.format`${ 0 }@${ 1 }`
					       (
						       this.getLeftPart( PartialUrlType.PASSWORD ),
						       this.hostname
					       );
				       }
				       case PartialUrlType.PORT:
				       {
					       if ( String.empty === this.port )
					       {
						       return this.getLeftPart( PartialUrlType.HOSTNAME );
					       }

					       return String.format`${ 0 }:${ 1 }`
					       (
						       this.getLeftPart( PartialUrlType.HOSTNAME ),
						       this.port
					       );
				       }
				       case PartialUrlType.PATHNAME:
				       {
					       return String.format`${ 0 }${ 1 }`
					       (
						       this.getLeftPart( PartialUrlType.PORT ),
						       this.pathname
					       );
				       }
				       case PartialUrlType.SEARCH:
				       {
					       return String.format`${ 0 }${ 1 }`
					       (
						       this.getLeftPart( PartialUrlType.PATHNAME ),
						       this.search
					       );
				       }
				       case PartialUrlType.HASH:
				       {
					       return String.format`${ 0 }${ 1 }`
					       (
						       this.getLeftPart( PartialUrlType.SEARCH ),
						       this.hash
					       );
				       }
			       }

			       throw UnknownPartialUrlTypeException.with_partialUrlType( partialUrlType );
		       }
	}
);
