'use strict';

import Abstract from '../../Types/Abstract.js';
import BoolStrings from '../../Types/BoolStrings.js';
import ClickEvent from '../ClickEvent.js';
import DomHelper from '../DomHelper.js';
import TabControlSelectors from './TabControlSelectors.js';

class TabControlPreparator extends Abstract
{
	#_tabControls = undefined;

	constructor()
	{
		super();

		this.#initialize();
	}

	#initialize()
	{
		this.#_tabControls = DomHelper.querySelectorAll( TabControlSelectors.TABCONTROL, null, false );
	}

	#initializeHeader( header )
	{
		const isHeaderActivated = header.getAttribute( 'data-is-activated' );
		if ( BoolStrings.FALSE !== isHeaderActivated && BoolStrings.TRUE !== isHeaderActivated )
		{
			header.setAttribute( 'data-is-activated', BoolStrings.FALSE );
		}

		DomHelper.addEventHandler(
			header,
			ClickEvent.EVENT_NAME,
			( event ) =>
			{
				DomHelper
					.querySelectorAll( TabControlSelectors.TABPAGE_INITIALIZED_HEADERS, event.target.parentElement, false )
					.forEach(
						( header ) =>
						{
							header.setAttribute(
								'data-is-activated',
								header !== event.target
									? BoolStrings.FALSE
									: BoolStrings.TRUE
							);
						}
					)
			}
		);
	}

	#initializeHeaders()
	{
		this.#_tabControls.forEach(
			( tabControl ) =>
			{
				const headersSection = DomHelper.querySelector( TabControlSelectors.TABCONTROL_HEADERS_SECTION, tabControl, false );

				if ( null === headersSection )
				{
					return null;
				}

				const headers = DomHelper.querySelectorAll( TabControlSelectors.TABPAGE_UNINITIALIZED_HEADERS, tabControl, false );

				headers.forEach(
					( header ) =>
					{
						this.#initializeHeader( header );

						DomHelper.appendChild( headersSection, header );
					}
				);
			}
		);
	}

	#selectFirstTabPages()
	{
		this.#_tabControls.forEach(
			( tabControl ) =>
			{
				const activatedHeader = DomHelper.querySelector( TabControlSelectors.TABPAGE_INITIALIZED_ACTIVATED_HEADERS, tabControl, false );

				if ( null !== activatedHeader )
				{
					activatedHeader.click();

					return;
				}

				const deactivatedHeader = DomHelper.querySelector( TabControlSelectors.TABPAGE_INITIALIZED_DEACTIVATED_HEADERS, tabControl, false );

				if ( null !== deactivatedHeader )
				{
					deactivatedHeader.click();
				}
			}
		)
	}

	prepare()
	{
		this.#initializeHeaders();
		this.#selectFirstTabPages();
	}
}

export default TabControlPreparator;
