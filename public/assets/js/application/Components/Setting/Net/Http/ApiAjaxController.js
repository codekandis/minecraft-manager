'use strict';

import AbstractApiAjaxController from '../../../../Net/Http/AbstractApiAjaxController.js';
import ApiHttpRequest from '../../../../Net/Http/ApiHttpRequest.js';
import ApiUriBuilder from '../ApiUriBuilder.js';

class ApiAjaxController extends AbstractApiAjaxController
{
	constructor()
	{
		super(
			new ApiUriBuilder()
		);
	}

	async readSetting()
	{
		const request = ApiHttpRequest.createGetRequest(
			this.__uriBuilder.buildSettingUri()
		);

		const requestResult = await request
			.send()
			.then(
				( requestResult ) =>
				{
					return requestResult;
				}
			);

		return this._createJsonResponse( requestResult.response.payload ).data;
	}

	async writeSetting( setting )
	{
		const request   = ApiHttpRequest.createPostRequest(
			this.__uriBuilder.buildSettingUri()
		);
		request.payload = this._createRequestPayload(
			{
				setting: setting
			}
		);

		await request.send();
	}
}

export default ApiAjaxController;
