'use strict';

import { Collection } from '../../../Collections/Collection.js';
import { Abstract } from '../../../Types/Abstract.js';
import { DomHelper } from '../../DomHelper.js';
import { FileDropZoneControl } from './FileDropZoneControl.js';
import { FileDropZoneControlSelector } from './FileDropZoneControlSelector.js';

/**
 * Represents a file drop zones manager which creates and manages all file drop zone controls in the document.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FileDropZonesManager extends Abstract
{
	/**
	 * Stores the file drop zones.
	 * @type {Collection<FileDropZoneControl>}
	 */
	#_dropZones = new Collection();

	/**
	 * Gets the file drop zones of the document.
	 * @returns {Collection<FileDropZoneControl>} The file drop zones of the document.
	 */
	get dropZones()
	{
		return this.#_dropZones;
	}

	/**
	 * Creates all file drop zones in the document.
	 */
	createDropZones()
	{
		this.#_dropZones.add(
			...DomHelper
				.querySelectorAll(
					FileDropZoneControlSelector.FILE_DROP_ZONE_CONTROL, null, false
				)
				.map(
					( node ) =>
					{
						return new FileDropZoneControl( node );
					}
				)
		);
	}
}
