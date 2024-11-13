'use strict';

import { AbstractApiAjaxController } from '../../../../Net/Http/AbstractApiAjaxController.js';
import { ApiHttpRequest } from '../../../../Net/Http/ApiHttpRequest.js';
import { StationPositionsPropertyNames } from '../../Enumerations/StationPositionsPropertyNames.js';
import { ApiUriBuilder } from '../ApiUriBuilder.js';

/**
 * Represents the API AJAX controller of the subway station mapper component.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ApiAjaxController extends AbstractApiAjaxController
{
	/**
	 * Constructor method.
	 */
	constructor()
	{
		super(
			new ApiUriBuilder()
		);
	}

	/**
	 * Reads the station positions.
	 * @returns {Object} The read station properties.
	 */
	async readStationPositions()
	{
		const request = ApiHttpRequest.createGetRequest(
			this.__uriBuilder.buildStationPositionsUri()
		);

		return await request
			.send()
			.then(
				( requestResult ) =>
				{
					const jsonResponse = this._createJsonResponse( requestResult.response.payload );
					return jsonResponse.data.stationPositions;
				}
			);
	}

	/**
	 * Writes the station positions.
	 * @param {StationPositions} stationPositions The station positionst to write.
	 */
	async writeStationPositions( stationPositions )
	{
		const request   = ApiHttpRequest.createPostRequest(
			this.__uriBuilder.buildStationPositionsUri()
		);
		request.payload = this._createRequestPayload(
			{
				stationPositions: {
					[ StationPositionsPropertyNames.ORIENTATION ]:                stationPositions[ StationPositionsPropertyNames.ORIENTATION ],
					[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ]: stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_X ],
					[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ]: stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Y ],
					[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ]: stationPositions[ StationPositionsPropertyNames.STRUCTURE_BLOCK_POSITION_Z ]
				}
			}
		);

		await request.send();
	}
}
