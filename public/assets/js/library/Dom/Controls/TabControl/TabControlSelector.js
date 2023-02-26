'use strict';

import { AbstractStatic } from '../../../Types/AbstractStatic.js';

/**
 *
 * @author Christian Ramelow <info@codekandis.net>
 */
export class TabControlSelector extends AbstractStatic
{
	static get TAB_CONTROL()
	{
		return '[data-control-type=\'TAB_CONTROL\']';
	}

	static get TAB_CONTROL_HEADERS_SECTION()
	{
		return String.format`${ 0 } > [data-control-type='TAB_CONTROL_HEADERS']`( TabControlSelector.TAB_CONTROL );
	}

	static get TAB_CONTROL_PAGES_SECTION()
	{
		return String.format`${ 0 } > [data-control-type='TAB_CONTROL_PAGES']`( TabControlSelector.TAB_CONTROL );
	}

	static get TAB_PAGE()
	{
		return String.format`${ 0 } > [data-control-type='TAB_CONTROL_PAGE']`( TabControlSelector.TAB_CONTROL_PAGES_SECTION );
	}

	static get TAB_PAGE_UNINITIALIZED_HEADERS()
	{
		return String.format`${ 0 } > [data-control-type='TAB_CONTROL_PAGE_HEADER']`( TabControlSelector.TAB_PAGE );
	}

	static get TAB_PAGE_INITIALIZED_HEADERS()
	{
		return String.format`${ 0 } > [data-control-type='TAB_CONTROL_PAGE_HEADER']`( TabControlSelector.TAB_CONTROL_HEADERS_SECTION );
	}

	static get TAB_PAGE_INITIALIZED_ACTIVATED_HEADERS()
	{
		return String.format`${ 0 }[data-is-activated='TRUE']`( TabControlSelector.TAB_PAGE_INITIALIZED_HEADERS );
	}

	static get TAB_PAGE_INITIALIZED_DEACTIVATED_HEADERS()
	{
		return String.format`${ 0 }[data-is-activated='FALSE']`( TabControlSelector.TAB_PAGE_INITIALIZED_HEADERS );
	}

	static get TAB_PAGE_ACTIVATORS()
	{
		return String.format`${ 0 } > [data-control-type='TAB_CONTROL_PAGE_ACTIVATOR']`( TabControlSelector.TAB_PAGE );
	}

	static get TAB_PAGE_UNCHECKED_ACTIVATORS()
	{
		return String.format`${ 0 }:not(:checked)`( TabControlSelector.TAB_PAGE_ACTIVATORS );
	}

	static get TAB_PAGE_CHECKED_ACTIVATORS()
	{
		return String.format`${ 0 }:checked`( TabControlSelector.TAB_PAGE_ACTIVATORS );
	}

	static get TAB_PAGE_CONTENT()
	{
		return String.format`${ 0 } > [data-control-type='TAB_CONTROL_PAGE_CONTENT']`( TabControlSelector.TAB_PAGE );
	}
}
