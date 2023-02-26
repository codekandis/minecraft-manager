'use strict';

import { Abstract } from '../../../Types/Abstract.js';
import { HttpPostFile } from './HttpPostFile.js';

/**
 * Represents a converter converting a file list into an array of HTTP POST files.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FileListToHttpPostFilesConverter extends Abstract
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
	 * Converts a file list into an array of HTTP POST files.
	 * @param {FileList} fileList The file list to convert.
	 * @returns {HttpPostFile[]} The array of HTTP POST files.
	 */
	convert( fileList )
	{
		return fileList.map(
			( fetchedFile, fetchedFileIndex ) =>
			{
				return new HttpPostFile( this.#_httpPostFileName, fetchedFile.name, fetchedFile );
			}
		);
	}
}
