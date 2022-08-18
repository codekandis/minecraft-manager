'use strict';

import Abstract from '../../../library/Types/Abstract.js';

class Position extends Abstract
{
	#_x = undefined;
	#_y = undefined;
	#_z = undefined;

	constructor( x, y, z )
	{
		super();

		this.#_x = x;
		this.#_y = y;
		this.#_z = z;
	}

	get x()
	{
		return this.#_x;
	}

	get y()
	{
		return this.#_y;
	}

	get z()
	{
		return this.#_z;
	}
}

export default Position;
