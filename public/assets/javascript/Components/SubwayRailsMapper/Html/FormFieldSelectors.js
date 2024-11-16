'use strict';

import { AbstractStatic } from '../../../../libraries/jotunheim/Types/AbstractStatic.js';
import { LanternPositionsPropertyNames } from '../Enumerations/LanternPositionsPropertyNames.js';

/**
 * Represents an enumeration of HTML form field selectors of the subway rails mapper component.
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
		return '#subwayRailsMapper';
	}

	/**
	 * Represents the current position X.
	 * @returns {String} The current position X.
	 */
	static get CURRENT_POSITION_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, LanternPositionsPropertyNames.CURRENT_POSITION_X );
	}

	/**
	 * Represents the current position Y.
	 * @returns {String} The current position Y.
	 */
	static get CURRENT_POSITION_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, LanternPositionsPropertyNames.CURRENT_POSITION_Y );
	}

	/**
	 * Represents the current position Z.
	 * @returns {String} The current position Z.
	 */
	static get CURRENT_POSITION_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, LanternPositionsPropertyNames.CURRENT_POSITION_Z );
	}

	/**
	 * Represents the calculated positions of the module.
	 * @returns {String} The calculated positions of the module.
	 */
	static get CALCULATED_VALUES()
	{
		return String.format`${ 0 }-calculatedValues`( FormFieldSelectors.MODULE_ROOT );
	}

	/**
	 * Represents the calculated position X negative.
	 * @returns {String} The calculated position X negative.
	 */
	static get CALCULATED_POSITION_X_NEGATIVE()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, LanternPositionsPropertyNames.CALCULATED_POSITION_X_NEGATIVE );
	}

	/**
	 * Represents the calculated position X positive.
	 * @returns {String} The calculated position X positive.
	 */
	static get CALCULATED_POSITION_X_POSITIVE()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, LanternPositionsPropertyNames.CALCULATED_POSITION_X_POSITIVE );
	}

	/**
	 * Represents the calculated position Y negative.
	 * @returns {String} The calculated position Y negative.
	 */
	static get CALCULATED_POSITION_Y_NEGATIVE()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, LanternPositionsPropertyNames.CALCULATED_POSITION_Y_NEGATIVE );
	}

	/**
	 * Represents the calculated position X positive.
	 * @returns {String} The calculated position X positive.
	 */
	static get CALCULATED_POSITION_Y_POSITIVE()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, LanternPositionsPropertyNames.CALCULATED_POSITION_Y_POSITIVE );
	}

	/**
	 * Represents the calculated position Z negative.
	 * @returns {String} The calculated position Z negative.
	 */
	static get CALCULATED_POSITION_Z_NEGATIVE()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, LanternPositionsPropertyNames.CALCULATED_POSITION_Z_NEGATIVE );
	}

	/**
	 * Represents the calculated position Z positive.
	 * @returns {String} The calculated position X positive.
	 */
	static get CALCULATED_POSITION_Z_POSITIVE()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, LanternPositionsPropertyNames.CALCULATED_POSITION_Z_POSITIVE );
	}
}
