'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `FileList`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Represents the handler of any file iteration.
 * @callback FileList_FileIterationHandler
 * @param {File} file The currently iterated file.
 * @param {Number} fileIndex The index of the currently iterated file.
 */

/**
 * Represents the handler of any file comparison.
 * @callback FileList_FileComparisonHandler
 * @param {File} file_1 The first file to compare.
 * @param {File} file_2 The second file to compare.
 * @returns {Number} -1 if the first file is lower than the second file, 0 if the first file is equal to the second file and 1 if the first file is greater than the second file.
 */

/**
 * Represents the handler of any file transformation.
 * @callback FileList_FileTransformationHandler
 * @param {File} file The currently iterated file.
 * @param {Number} fileIndex The index of the currently iterated file.
 * @returns {*} The transformed file.
 */

/**
 * Invokes a specific iteration handler on every file.
 * @method forEach
 * @memberOf FileList.prototype
 * @param {FileList_FileIterationHandler} iterationHandler The iteration handler to invoke.
 */
Object.defineProperty(
	FileList.prototype,
	'forEach',
	{
		value: function ( iterationHandler )
		       {
			       let fetchedFileIndex = 0;

			       for ( const fetchedFile of this )
			       {
				       iterationHandler( fetchedFile, fetchedFileIndex );
			       }

			       fetchedFileIndex++;
		       }
	}
);

/**
 * Invokes a specific transformation handler on every file of the file list.
 * @method map
 * @memberOf FileList.prototype
 * @param {FileList_FileTransformationHandler} transformationHandler The transformation handler used to map the files.
 * @returns {*[]} The array containing the transformed files.
 */
Object.defineProperty(
	FileList.prototype,
	'map',
	{
		value: function ( transformationHandler )
		       {
			       const mappedFileList = [];
			       let fetchedFileIndex = 0;

			       for ( const fetchedFile of this )
			       {
				       mappedFileList.push(
					       transformationHandler( fetchedFile, fetchedFileIndex )
				       );

				       fetchedFileIndex++;
			       }

			       return mappedFileList;
		       }
	}
);
