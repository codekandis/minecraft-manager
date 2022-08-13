'use strict';

import '../library/Bootstrap.js';
import DebugMode from '../library/Debugging/DebugMode.js';
import DomDocument from '../library/Dom/DomDocument.js';

DomDocument.load(
	( event ) =>
	{
		DebugMode.enable();
	}
);
