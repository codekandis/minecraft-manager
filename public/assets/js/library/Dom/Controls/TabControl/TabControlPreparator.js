'use strict';

import { Abstract } from '../../../Types/Abstract.js';
import { BooleanString } from '../../../Types/BooleanString.js';
import { DomHelper } from '../../DomHelper.js';
import { TabControlSelector } from './TabControlSelector.js';

/**
 *
 * @author Christian Ramelow <info@codekandis.net>
 */
export class TabControlPreparator extends Abstract
{
	#_tabControls;

	constructor()
	{
		super();

		this.#initialize();
	}

	#initialize()
	{
		this.#_tabControls = DomHelper.querySelectorAll( TabControlSelector.TAB_CONTROL, null, false );
	}

	#initializeHeader( header )
	{
		const isHeaderActivated = header.getAttribute( 'data-is-activated' );
		if ( BooleanString.FALSE !== isHeaderActivated && BooleanString.TRUE !== isHeaderActivated )
		{
			header.setAttribute( 'data-is-activated', BooleanString.FALSE );
		}

		header.clickEvent(
			( event ) =>
			{
				DomHelper
					.querySelectorAll( TabControlSelector.TAB_PAGE_INITIALIZED_HEADERS, event.target.parentElement, false )
					.forEach(
						( header ) =>
						{
							header.setAttribute(
								'data-is-activated',
								header !== event.target
									? BooleanString.FALSE
									: BooleanString.TRUE
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
				const headersSection = DomHelper.querySelector( TabControlSelector.TAB_CONTROL_HEADERS_SECTION, tabControl, false );

				if ( null === headersSection )
				{
					return null;
				}

				const uninitializedHeaders = DomHelper.querySelectorAll( TabControlSelector.TAB_PAGE_UNINITIALIZED_HEADERS, tabControl, false );

				uninitializedHeaders.forEach(
					( uninitializedHeader ) =>
					{
						this.#initializeHeader( uninitializedHeader );

						DomHelper.appendChildren( headersSection, uninitializedHeader );
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
				const activatedHeader = DomHelper.querySelector( TabControlSelector.TAB_PAGE_INITIALIZED_ACTIVATED_HEADERS, tabControl, false );

				if ( null !== activatedHeader )
				{
					activatedHeader.click();

					return;
				}

				const deactivatedHeader = DomHelper.querySelector( TabControlSelector.TAB_PAGE_INITIALIZED_DEACTIVATED_HEADERS, tabControl, false );

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
