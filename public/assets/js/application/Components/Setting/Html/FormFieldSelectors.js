'use strict';

import StaticAbstract from '../../../../library/Types/StaticAbstract.js';
import PropertyNames from '../Enumerations/PropertyNames.js';

class FormFieldSelectors extends StaticAbstract
{
	static get MODULE_ROOT()
	{
		return '#setting';
	}

	static get CHUNKSIZE()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CHUNKSIZE );
	}
}

export default FormFieldSelectors;
