'use strict';

import StaticAbstract from '../Types/StaticAbstract.js';
import DebugMode from './DebugMode.js';

class Debugger extends StaticAbstract
{
	static log( ...values )
	{
		if ( DebugMode.ENABLED === DebugMode.mode )
		{
			if ( 0 === values.length )
			{
				console.log();

				return;
			}

			values.forEach(
				( value ) =>
				{
					console.log( value );
				}
			);
		}
	}
}

export default Debugger;
