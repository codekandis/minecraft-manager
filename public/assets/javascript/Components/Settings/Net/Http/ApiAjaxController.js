'use strict';

import { AbstractApiAjaxController } from '../../../../Net/Http/AbstractApiAjaxController.js';
import { ApiHttpRequest } from '../../../../Net/Http/ApiHttpRequest.js';
import { PropertyNames } from '../../Enumerations/PropertyNames.js';
import { ApiUriBuilder } from '../ApiUriBuilder.js';

/**
 * Represents the API AJAX controller of the settings component.
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
	 * Reads the settings of the javascript.
	 * @returns {Object} The read settings of the javascript.
	 */
	async readSettings()
	{
		const request = ApiHttpRequest.createGetRequest(
			this.__uriBuilder.buildSettingsUri()
		);

		return await request
			.send()
			.then(
				( requestResult ) =>
				{
					const jsonResponse = this._createJsonResponse( requestResult.response.payload );
					return jsonResponse.data.settings;
				}
			);
	}

	/**
	 * Write the settings of the javascript.
	 * @param {Settings} settings The settings of the javascript to write.
	 */
	async writeSettings( settings )
	{
		const request   = ApiHttpRequest.createPostRequest(
			this.__uriBuilder.buildSettingsUri()
		);
		request.payload = this._createRequestPayload(
			{
				settings: {
					[ PropertyNames.CHUNKSIZE ]: settings[ PropertyNames.CHUNKSIZE ]
				}
			}
		);

		await request.send();
	}
}
