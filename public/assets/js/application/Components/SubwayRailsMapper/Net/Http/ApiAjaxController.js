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

	async readSubwayRailsMapper()
	{
		const request = ApiHttpRequest.createGetRequest(
			this.__uriBuilder.buildSubwayRailsMapperUri()
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

	async writeSubwayRailsMapper( subwayRailsMapper )
	{
		const request   = ApiHttpRequest.createPostRequest(
			this.__uriBuilder.buildSubwayRailsMapperUri()
		);
		request.payload = this._createRequestPayload(
			{
				subwayRailsMapper: subwayRailsMapper
			}
		);

		await request.send();
	}
}

export default ApiAjaxController;
