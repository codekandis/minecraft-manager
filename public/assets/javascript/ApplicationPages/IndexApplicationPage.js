'use strict';

import { TabControlPreparator } from '../../libraries/jotunheim/Dom/Controls/TabControl/TabControlPreparator.js';
import { ComponentsExecutor } from '../Components/ComponentsExecutor.js';
import { SettingsComponent } from '../Components/Settings/SettingsComponent.js';
import { SubwayRailsMapperComponent } from '../Components/SubwayRailsMapper/SubwayRailsMapperComponent.js';
import { SubwayStationMapperComponent } from '../Components/SubwayStationMapper/SubwayStationMapperComponent.js';
import { AbstractApplicationPage } from './AbstractApplicationPage.js';

/**
 * Represents the index javascript page.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IndexApplicationPage extends AbstractApplicationPage
{
	/**
	 * @inheritDoc
	 */
	execute()
	{
		( new TabControlPreparator() )
			.prepare();

		( new ComponentsExecutor(
			new SubwayRailsMapperComponent( this.__settings ),
			new SubwayStationMapperComponent( this.__settings ),
			new SettingsComponent( this.__settings )
		) )
			.execute();
	}
}
