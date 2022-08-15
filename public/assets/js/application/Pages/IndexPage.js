'use strict';

import TabControlPreparator from '../../library/Dom/Controls/TabControlPreparator.js';
import DomDocument from '../../library/Dom/DomDocument.js';
import ComponentsExecutor from '../Components/ComponentsExecutor.js';

DomDocument.load(
	( event ) =>
	{
		( new TabControlPreparator() )
			.prepare();

		( new ComponentsExecutor() )
			.execute();
	}
);
