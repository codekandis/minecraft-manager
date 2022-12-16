'use strict';

import TabControlPreparator from '../../library/Dom/Controls/TabControlPreparator.js';
import DomDocument from '../../library/Dom/DomDocument.js';
import ComponentsExecutor from '../Components/ComponentsExecutor.js';
import SubwayRailsMapperComponent from '../Components/SubwayRailsMapper/SubwayRailsMapperComponent.js';
import SubwayStationMapperComponent from '../Components/SubwayStationMapper/SubwayStationMapperComponent.js';

DomDocument.load(
	( event ) =>
	{
		( new TabControlPreparator() )
			.prepare();

		( new ComponentsExecutor(
			new SubwayRailsMapperComponent(),
			new SubwayStationMapperComponent()
		) )
			.execute();
	}
);
