'use strict';

import Abstract from '../../../Types/Abstract.js';
import HttpPostFileNamePreparator from './HttpPostFileNamePreparator.js';

class HttpPostFile extends Abstract
{
	#_name     = undefined;
	#_filename = undefined;
	#_file     = undefined;

	constructor( name, filename, file )
	{
		super();

		this.#_name     = ( new HttpPostFileNamePreparator() )
			.prepare( name );
		this.#_filename = filename;
		this.#_file     = file;
	}

	static fromHttpPostFile( httpPostFile )
	{
		return new HttpPostFile( httpPostFile.name, httpPostFile.filename, httpPostFile.file )
	}

	get name()
	{
		return this.#_name;
	}

	get filename()
	{
		return this.#_filename;
	}

	get file()
	{
		return this.#_file;
	}
}

export default HttpPostFile;
