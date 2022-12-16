'use strict';

import StaticAbstract from '../../../../library/Types/StaticAbstract.js';
import PropertyNames from '../Enumerations/PropertyNames.js';

class FormFieldSelectors extends StaticAbstract
{
	static get MODULE_ROOT()
	{
		return '#subwayRailsMapper';
	}

	static get INITIAL_VALUES()
	{
		return String.format`${ 0 }-initialValues`( FormFieldSelectors.MODULE_ROOT );
	}

	static get START_POSITION_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.START_POSITION_X );
	}

	static get START_POSITION_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.START_POSITION_Y );
	}

	static get START_POSITION_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.START_POSITION_Z );
	}

	static get CURRENT_VALUES()
	{
		return String.format`${ 0 }-currentValues`( FormFieldSelectors.MODULE_ROOT );
	}

	static get CURRENT_POSITION_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CURRENT_POSITION_X );
	}

	static get CURRENT_POSITION_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CURRENT_POSITION_Y );
	}

	static get CURRENT_POSITION_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CURRENT_POSITION_Z );
	}

	static get CALCULATED_VALUES()
	{
		return String.format`${ 0 }-calculatedValues`( FormFieldSelectors.MODULE_ROOT );
	}

	static get CALCULATED_POSITION_XN()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_POSITION_XN );
	}

	static get CALCULATED_POSITION_XP()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_POSITION_XP );
	}

	static get CALCULATED_POSITION_YN()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_POSITION_YN );
	}

	static get CALCULATED_POSITION_YP()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_POSITION_YP );
	}

	static get CALCULATED_POSITION_ZN()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_POSITION_ZN );
	}

	static get CALCULATED_POSITION_ZP()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_POSITION_ZP );
	}
}

export default FormFieldSelectors;
