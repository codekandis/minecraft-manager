'use strict';

import ChangeEvent from '../../Dom/ChangeEvent.js';
import DomHelper from '../../Dom/DomHelper.js';
import InputEvent from '../../Dom/InputEvent.js';
import BindableProxy from './BindableProxy.js';

class BindableFormFieldProxy extends BindableProxy
{
	constructor( formField )
	{
		super(
			formField,
			( initializingEvent ) =>
			{
				DomHelper.addEventHandler(
					initializingEvent.detail.eventArguments.object.delegatedObject,
					InputEvent.EVENT_NAME,
					( inputEvent ) =>
					{
						this._raisePropertyChangedEvent( 'value', initializingEvent.detail.eventArguments.object.proxy );
					}
				);
				DomHelper.addEventHandler(
					initializingEvent.detail.eventArguments.object.delegatedObject,
					ChangeEvent.EVENT_NAME,
					( changeEvent ) =>
					{
						this._raisePropertyChangedEvent( 'value', initializingEvent.detail.eventArguments.object.proxy );
					}
				);
			}
		);
	}

	static with_selector( selector )
	{
		return new BindableFormFieldProxy(
			DomHelper.querySelector( selector )
		);
	}
}

export default BindableFormFieldProxy;
