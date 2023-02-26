'use strict';

import { Abstract } from '../../../Types/Abstract.js';
import { HttpPostFile } from './HttpPostFile.js';
import { HttpPostFileCollection } from './HttpPostFileCollection.js';

/**
 * Represents a converter converting a file list into a collection of HTTP POST files.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FileListToHttpPostFileCollectionConverter extends Abstract
{
	/**
	 * Stores the name of the HTTP POST files.
	 * @type {String}
	 */
	#_httpPostFileName;

	/**
	 * Constructor method.
	 * @param {String} httpPostFileName The name of the HTTP POST files.
	 */
	constructor( httpPostFileName )
	{
		super();

		this.#_httpPostFileName = httpPostFileName;
	}

	/**
	 * Converts a file list into a collection of HTTP POST files.
	 * @param {FileList} fileList The file list to convert.
	 * @returns {HttpPostFileCollection} The collection of HTTP POST files.
	 */
	convert( fileList )
	{
		return new HttpPostFileCollection(
			...fileList.map(
				( fetchedFile, fetchedFileIndex ) =>
				{
					return new HttpPostFile( this.#_httpPostFileName, fetchedFile.name, fetchedFile );
				}
			)
		);
	}
}
