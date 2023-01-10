'use strict';

import { StaticAbstract } from '../Types/StaticAbstract.js';

export class Clipboard extends StaticAbstract
{
	static copyText( text )
	{
		navigator.clipboard.writeText( text );
	}
}
