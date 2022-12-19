'use strict';

import Abstract from '../../../Types/Abstract.js';
import HttpPostFile from './HttpPostFile.js';

class FileListToHttpPostFilesConverter extends Abstract
{
	#_httpPostFileName = undefined;

	constructor( httpPostFileName )
	{
		super();

		this.#_httpPostFileName = httpPostFileName;
	}

	convert( fileList )
	{
		return fileList.map(
			( file ) =>
			{
				return new HttpPostFile( this.#_httpPostFileName, file.name, file );
			}
		);
	}
}

export default FileListToHttpPostFilesConverter;
