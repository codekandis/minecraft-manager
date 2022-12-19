'use strict';

import TabControlPreparator from '../../library/Dom/Controls/TabControlPreparator.js';
import DomDocument from '../../library/Dom/DomDocument.js';
import ComponentsExecutor from '../Components/ComponentsExecutor.js';
import Setting from '../Components/Setting/Entities/Setting.js';
import SettingComponent from '../Components/Setting/SettingComponent.js';
import SubwayRailsMapperComponent from '../Components/SubwayRailsMapper/SubwayRailsMapperComponent.js';
import SubwayStationMapperComponent from '../Components/SubwayStationMapper/SubwayStationMapperComponent.js';

DomDocument.load(
	( event ) =>
	{
		( new TabControlPreparator() )
			.prepare();

		const setting = new Setting();

		( new ComponentsExecutor(
			new SubwayRailsMapperComponent( setting ),
			new SubwayStationMapperComponent( setting ),
			new SettingComponent( setting )
		) )
			.execute();
	}
);
