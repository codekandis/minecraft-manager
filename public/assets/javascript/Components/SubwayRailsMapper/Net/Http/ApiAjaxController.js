'use strict';

import { AbstractApiAjaxController } from '../../../../Net/Http/AbstractApiAjaxController.js';
import { ApiHttpRequest } from '../../../../Net/Http/ApiHttpRequest.js';
import { LanternPositionsPropertyNames } from '../../Enumerations/LanternPositionsPropertyNames.js';
import { ApiUriBuilder } from '../ApiUriBuilder.js';

/**
 * Represents the API AJAX controller of the subway rails mapper component.
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
	 * Reads the lantern positions.
	 * @returns {Object} The read lantern positions.
	 */
	async readLanternPositions()
	{
		const request = ApiHttpRequest.createGetRequest(
			this.__uriBuilder.buildLanternPositionsUri()
		);

		return await request
			.send()
			.then(
				( requestResult ) =>
				{
					const jsonResponse = this._createJsonResponse( requestResult.response.payload );
					return jsonResponse.data.lanternPositions;
				}
			);
	}

	/**
	 * Writes the lantern positions.
	 * @param {LanternPositions} lanternPositions The lantern positions to write.
	 */
	async writeLanternPositions( lanternPositions )
	{
		const request   = ApiHttpRequest.createPostRequest(
			this.__uriBuilder.buildLanternPositionsUri()
		);
		request.payload = this._createRequestPayload(
			{
				lanternPositions: {
					[ LanternPositionsPropertyNames.CURRENT_X ]: lanternPositions[ LanternPositionsPropertyNames.CURRENT_X ],
					[ LanternPositionsPropertyNames.CURRENT_Y ]: lanternPositions[ LanternPositionsPropertyNames.CURRENT_Y ],
					[ LanternPositionsPropertyNames.CURRENT_Z ]: lanternPositions[ LanternPositionsPropertyNames.CURRENT_Z ]
				}
			}
		);

		await request.send();
	}
}
