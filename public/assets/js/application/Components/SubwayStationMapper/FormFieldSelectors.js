'use strict';

import StaticAbstract from '../../../library/Types/StaticAbstract.js';
import PropertyNames from './PropertyNames.js';

class FormFieldSelectors extends StaticAbstract
{
	static get MODULE_ROOT()
	{
		return '#subwayStationMapper';
	}

	static get INITIAL_VALUES()
	{
		return String.format`${ 0 }-initialValues`( FormFieldSelectors.MODULE_ROOT );
	}

	static get DIRECTION()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.DIRECTION );
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

	static get CALCULATED_HEAD_HALL()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_HEAD_HALL );
	}

	static get CALCULATED_CONCOURSE_HALL()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_CONCOURSE_HALL );
	}

	static get CALCULATED_ARRIVAL_BELL()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_ARRIVAL_BELL );
	}

	static get CALCULATED_DEPARTURE_BELL()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_DEPARTURE_BELL );
	}

	static get CALCULATED_ROTATION()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_ROTATION );
	}

	static get HEAD_1_NAME()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.HEAD_1_NAME );
	}

	static get CALCULATED_OFFSET_HEAD_1_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_HEAD_1_X );
	}

	static get CALCULATED_OFFSET_HEAD_1_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_HEAD_1_Y );
	}

	static get CALCULATED_OFFSET_HEAD_1_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_HEAD_1_Z );
	}

	static get HEAD_2_NAME()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.HEAD_2_NAME );
	}

	static get CALCULATED_OFFSET_HEAD_2_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_HEAD_2_X );
	}

	static get CALCULATED_OFFSET_HEAD_2_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_HEAD_2_Y );
	}

	static get CALCULATED_OFFSET_HEAD_2_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_HEAD_2_Z );
	}

	static get CONCOURSE_NAME()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CONCOURSE_NAME );
	}

	static get CALCULATED_OFFSET_CONCOURSE_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_CONCOURSE_X );
	}

	static get CALCULATED_OFFSET_CONCOURSE_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_CONCOURSE_Y );
	}

	static get CALCULATED_OFFSET_CONCOURSE_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_CONCOURSE_Z );
	}

	static get STAIRS_PORT_NAME()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.STAIRS_PORT_NAME );
	}

	static get CALCULATED_OFFSET_STAIRS_PORT_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_X );
	}

	static get CALCULATED_OFFSET_STAIRS_PORT_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Y );
	}

	static get CALCULATED_OFFSET_STAIRS_PORT_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_STAIRS_PORT_Z );
	}

	static get STAIRS_NAME()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.STAIRS_NAME );
	}

	static get CALCULATED_OFFSET_STAIRS_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_STAIRS_X );
	}

	static get CALCULATED_OFFSET_STAIRS_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_STAIRS_Y );
	}

	static get CALCULATED_OFFSET_STAIRS_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_STAIRS_Z );
	}

	static get STAIRS_ENTRANCE_NAME()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.STAIRS_ENTRANCE_NAME );
	}

	static get CALCULATED_OFFSET_STAIRS_ENTRANCE_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_X );
	}

	static get CALCULATED_OFFSET_STAIRS_ENTRANCE_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Y );
	}

	static get CALCULATED_OFFSET_STAIRS_ENTRANCE_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_STAIRS_ENTRANCE_Z );
	}

	static get STAIRWAY_LEFT_NAME()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.STAIRWAY_LEFT_NAME );
	}

	static get CALCULATED_OFFSET_STAIRWAY_LEFT_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_X );
	}

	static get CALCULATED_OFFSET_STAIRWAY_LEFT_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Y );
	}

	static get CALCULATED_OFFSET_STAIRWAY_LEFT_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_STAIRWAY_LEFT_Z );
	}

	static get STAIRWAY_RIGHT_NAME()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.STAIRWAY_RIGHT_NAME );
	}

	static get CALCULATED_OFFSET_STAIRWAY_RIGHT_X()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_X );
	}

	static get CALCULATED_OFFSET_STAIRWAY_RIGHT_Y()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Y );
	}

	static get CALCULATED_OFFSET_STAIRWAY_RIGHT_Z()
	{
		return String.format`${ 0 }-${ 1 }`( FormFieldSelectors.MODULE_ROOT, PropertyNames.CALCULATED_OFFSET_STAIRWAY_RIGHT_Z );
	}
}

export default FormFieldSelectors;
