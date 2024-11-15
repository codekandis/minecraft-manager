'use strict';

import { AbstractStatic } from '../../../../libraries/jotunheim/Types/AbstractStatic.js';
import { SettingsPropertyNames } from '../Enumerations/SettingsPropertyNames.js';

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
	 * Represents the chunk size.
	 * @returns {String} The chunk size.
	 */
	static get CHUNKSIZE()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, SettingsPropertyNames.CHUNKSIZE );
	}

	/**
	 * Represents the initial position X.
	 * @returns {String} The initial position X.
	 */
	static get INITIAL_POSITION_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, SettingsPropertyNames.INITIAL_POSITION_X );
	}

	/**
	 * Represents the initial position Y.
	 * @returns {String} The initial position Y.
	 */
	static get INITIAL_POSITION_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, SettingsPropertyNames.INITIAL_POSITION_Y );
	}

	/**
	 * Represents the initial position Z.
	 * @returns {String} The initial position Z.
	 */
	static get INITIAL_POSITION_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, SettingsPropertyNames.INITIAL_POSITION_Z );
	}
}
