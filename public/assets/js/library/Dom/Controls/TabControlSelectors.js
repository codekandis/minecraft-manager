'use strict';

import StaticAbstract from '../../Types/StaticAbstract.js';

class TabControlSelectors extends StaticAbstract
{
	static get TABCONTROL()
	{
		return '[data-control-type=\'TABCONTROL\']';
	}

	static get TABCONTROL_HEADERS_SECTION()
	{
		return String.format`${ 0 } > [data-control-type='TABCONTROL_HEADERS']`( TabControlSelectors.TABCONTROL );
	}

	static get TABCONTROL_PAGES_SECTION()
	{
		return String.format`${ 0 } > [data-control-type='TABCONTROL_PAGES']`( TabControlSelectors.TABCONTROL );
	}

	static get TABPAGE()
	{
		return String.format`${ 0 } > [data-control-type='TABPAGE']`( TabControlSelectors.TABCONTROL_PAGES_SECTION );
	}

	static get TABPAGE_UNINITIALIZED_HEADERS()
	{
		return String.format`${ 0 } > [data-control-type='TABPAGE_HEADER']`( TabControlSelectors.TABPAGE );
	}

	static get TABPAGE_INITIALIZED_HEADERS()
	{
		return String.format`${ 0 } > [data-control-type='TABPAGE_HEADER']`( TabControlSelectors.TABCONTROL_HEADERS_SECTION );
	}

	static get TABPAGE_INITIALIZED_ACTIVATED_HEADERS()
	{
		return String.format`${ 0 }[data-is-activated='TRUE']`( TabControlSelectors.TABPAGE_INITIALIZED_HEADERS );
	}

	static get TABPAGE_INITIALIZED_DEACTIVATED_HEADERS()
	{
		return String.format`${ 0 }[data-is-activated='FALSE']`( TabControlSelectors.TABPAGE_INITIALIZED_HEADERS );
	}

	static get TABPAGE_ACTIVATORS()
	{
		return String.format`${ 0 } > [data-control-type='TABPAGE_ACTIVATOR']`( TabControlSelectors.TABPAGE );
	}

	static get TABPAGE_UNCHECKED_ACTIVATORS()
	{
		return String.format`${ 0 }:not(:checked)`( TabControlSelectors.TABPAGE_ACTIVATORS );
	}

	static get TABPAGE_CHECKED_ACTIVATORS()
	{
		return String.format`${ 0 }:checked`( TabControlSelectors.TABPAGE_ACTIVATORS );
	}
}

export default TabControlSelectors;
