'use strict';

import { Abstract } from '../../../libraries/jotunheim/Types/Abstract.js';

/**
 * Represents the base class of any API AJAX controller.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractApiAjaxController extends Abstract
{
	/**
	 * Stores the URI builder used to build the API URIs.
	 * @type {ApiUriBuilder}
	 */
	__uriBuilder;

	/**
	 * Constructor method.
	 * @param {ApiUriBuilder} uriBuilder The URI builder used to build the API URIs.
	 */
	constructor( uriBuilder )
	{
		super();

		this.__uriBuilder = uriBuilder;
	}

	/**
	 * Creates the request's payload.
	 * @param {Object} payload The payload to create the payload of the request from.
	 * @returns {String} The payload of the request.
	 */
	_createRequestPayload( payload )
	{
		return JSON.stringify( payload );
	}

	/**
	 * Creates the JSON response.
	 * @param {String} payload The payload to create the JSON response from.
	 * @returns {Object} The JSON response.
	 */
	_createJsonResponse( payload )
	{
		return JSON.parse( payload );
	}
}
