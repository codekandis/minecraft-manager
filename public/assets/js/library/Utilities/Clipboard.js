'use strict';

import StaticAbstract from '../Types/StaticAbstract.js';

class Clipboard extends StaticAbstract
{
	static copyText( text )
	{
		navigator.clipboard.writeText( text );
	}
}

export default Clipboard;
