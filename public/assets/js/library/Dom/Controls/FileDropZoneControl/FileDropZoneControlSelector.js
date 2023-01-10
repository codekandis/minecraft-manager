'use strict';

import { AbstractStatic } from '../../../Types/AbstractStatic.js';

/**
 *
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FileDropZoneControlSelector extends AbstractStatic
{
	static get FILE_DROP_ZONE_CONTROL()
	{
		return '[data-control-type=\'FILE_DROP_ZONE_CONTROL\']';
	}

	static get FILE_DROP_ZONE_SELECTION_DIALOG()
	{
		return String.format`${ 0 } > [data-control-type='FILE_DROP_ZONE_SELECTION_DIALOG']`
		(
			FileDropZoneControlSelector.FILE_DROP_ZONE_CONTROL
		);
	}
}
