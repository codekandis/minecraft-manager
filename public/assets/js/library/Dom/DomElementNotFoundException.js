'use strict';

import Exception from '../Types/Exception.js';

class DomElementNotFoundException extends Exception
{
	static with_unresolvableSelector( selector )
	{
		return new DomElementNotFoundException(
			String.format`The selector \`${ 0 }\` cannot be resolved.`( selector )
		);
	}
}

export default DomElementNotFoundException;
