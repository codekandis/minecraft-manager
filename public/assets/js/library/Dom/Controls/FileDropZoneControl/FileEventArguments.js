'use strict';

import { EventArguments } from '../../../Types/EventArguments.js';

/**
 * Represents the event arguments of any file related event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FileEventArguments extends EventArguments
{
	/**
	 * Stores the file which is affected.
	 * @type {File}
	 */
	#_file;

	/**
	 * Constructor method.
	 * @param file The file which is affected.
	 */
	constructor( file )
	{
		super();

		this.#_file = file;
	}

	/**
	 * Gets the file which is affected.
	 * @returns {File} The file which is affected.
	 */
	get file()
	{
		return this.#_file;
	}
}
