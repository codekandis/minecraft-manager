'use strict';

import { AbstractApiAjaxController } from '../../../../Net/Http/AbstractApiAjaxController.js';
import { ApiHttpRequest } from '../../../../Net/Http/ApiHttpRequest.js';
import { SettingsPropertyNames } from '../../Enumerations/SettingsPropertyNames.js';
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
	 * Reads the applications' settings.
	 * @returns {Object} The read applications' settings.
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
	 * Writes the applications' settings.
	 * @param {Settings} settings The applications' settings to write.
	 */
	async writeSettings( settings )
	{
		const request   = ApiHttpRequest.createPostRequest(
			this.__uriBuilder.buildSettingsUri()
		);
		request.payload = this._createRequestPayload(
			{
				settings: {
					[ SettingsPropertyNames.CHUNKSIZE ]: settings[ SettingsPropertyNames.CHUNKSIZE ]
				}
			}
		);

		await request.send();
	}
}
