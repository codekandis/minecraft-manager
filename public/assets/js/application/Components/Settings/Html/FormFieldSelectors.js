'use strict';

import { AbstractStatic } from '../../../../library/Types/AbstractStatic.js';
import { PropertyNames } from '../Enumerations/PropertyNames.js';

/**
 * Represents an enumeration of HTML form field selectors of the settings component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FormFieldSelectors extends AbstractStatic
{
	/**
	 * Represents the module root.
	 * @returns {String} The module root.
	 */
	static get MODULE_ROOT()
	{
		return '#settings';
	}

	/**
	 * Represents the chunksize.
	 * @returns {String} The chunksize.
	 */
	static get CHUNKSIZE()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CHUNKSIZE );
	}
}
