'use strict';

import { ApplicationPageDispatcher } from '../library/ApplicationPages/ApplicationPageDispatcher.js';
import { DebugMode } from '../library/Debugging/DebugMode.js';
import { DomDocument } from '../library/Dom/DomDocument.js';
import { Library } from '../library/Library.js';
import { RoutesConfiguration } from './Configurations/RoutesConfiguration.js';

/**
 * Represents the bootstrap script of the application.
 * @author Christian Ramelow <info@codekandis.net>
 */

DomDocument.load(
	( event ) =>
	{
		DebugMode.enable();

		( new Library() )
			.load();

		( new ApplicationPageDispatcher(
			new RoutesConfiguration()
		) )
			.dispatch();
	}
);
