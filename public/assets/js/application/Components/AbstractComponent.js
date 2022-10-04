'use strict';

import ChangeEvent from '../../library/Dom/ChangeEvent.js';
import DomHelper from '../../library/Dom/DomHelper.js';
import AbstractBindable from '../../library/Types/DataBindings/AbstractBindable.js';

class AbstractComponent extends AbstractBindable
{
	static _EVENT_DEFAULT_VALUE_MAPPINGS = [
		{
			eventName:    InputEvent.EVENT_NAME,
			defaultValue: String.empty
		},
		{
			eventName:    ChangeEvent.EVENT_NAME,
			defaultValue: 0
		}
	];

	_setPropertyAndInputValue( propertyName, value, formFieldSelector )
	{
		this[ '__' + propertyName ] = value;
		this._raisePropertyChangedEvent( propertyName );

		DomHelper.querySelector( formFieldSelector )
			.value = value;
	}

	_attachEventHandlers( formFieldSelector, propertyName )
	{
		const formField = DomHelper.querySelector( formFieldSelector );
		AbstractComponent
			._EVENT_DEFAULT_VALUE_MAPPINGS
			.forEach(
				( eventDefaultValueMapping ) =>
				{
					DomHelper.addEventHandler(
						formField,
						eventDefaultValueMapping.eventName,
						( event ) =>
						{
							const value          = Number.parseInt( event.target.value );
							this[ propertyName ] = true === Number.isNaN( value )
								? eventDefaultValueMapping.defaultValue
								: value
						}
					);
				}
			);
	};

	_addDataBindings()
	{
	}

	_addFormFieldsEventHandlers()
	{
	}

	execute()
	{
		this._addDataBindings();
		this._addFormFieldsEventHandlers();
	}
}

export default AbstractComponent;
