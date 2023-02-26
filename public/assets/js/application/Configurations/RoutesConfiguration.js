'use strict';

import { AbstractRoutesConfiguration } from '../../library/Configurations/AbstractRoutesConfiguration.js';
import { IndexApplicationPage } from '../ApplicationPages/IndexApplicationPage.js';

/**
 * Represents a routes configuration.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class RoutesConfiguration extends AbstractRoutesConfiguration
{
	/**
	 * @inheritDoc
	 */
	__routes = {
		'/': IndexApplicationPage
	};
}
