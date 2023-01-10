'use strict';

import { AbstractStatic } from '../Types/AbstractStatic.js';

/**
 * Represents a DOM document wrapper.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DomDocument extends AbstractStatic
{
	/**
	 * Adds an event handler to the DOM content loaded event of the document.
	 * @param {Event_EventHandler} eventHandler The event handler to add.
	 */
	static load( eventHandler )
	{
		document.domContentLoadedEvent( eventHandler );
	}
}
