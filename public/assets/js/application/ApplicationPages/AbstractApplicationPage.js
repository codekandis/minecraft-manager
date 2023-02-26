'use strict';

import { AbstractApplicationPage as AbstractApplicationPage_Library } from '../../library/ApplicationPages/AbstractApplicationPage.js';
import { Settings } from '../Components/Settings/Entities/Settings.js';

/**
 * Represents the base class of any application page..
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractApplicationPage extends AbstractApplicationPage_Library
{
	/**
	 * Stores the settings of the application.
	 * @type {Settings}
	 */
	__settings;

	/**
	 * @inheritDoc
	 */
	constructor( applicationPageArguments )
	{
		super( applicationPageArguments );

		this.__settings = new Settings();
	}
}