'use strict';

import { AbstractStatic } from '../../Types/AbstractStatic.js';

/**
 * Represents an enumeration of HTTP response status codes.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpResponseStatusCode extends AbstractStatic
{
	/**
	 * Represents the HTTP response status code of the HTTP response status `100 Continue`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `100 Continue`.
	 */
	static get CONTINUE()
	{
		return 100;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `101 Switching Protocols`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `101 Switching Protocols`.
	 */
	static get SWITCHING_PROTOCOLS()
	{
		return 101;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `102 Processing`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `102 Processing`.
	 */
	static get PROCESSING()
	{
		return 102;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `103 Early Hints`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `103 Early Hints`.
	 */
	static get EARLY_HINTS()
	{
		return 103;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `200 Ok`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `200 Ok`.
	 */
	static get OK()
	{
		return 200;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `201 Created`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `201 Created`.
	 */
	static get CREATED()
	{
		return 201;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `202 Accepted`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `202 Accepted`.
	 */
	static get ACCEPTED()
	{
		return 202;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `203 Non-Authoritative Information`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `203 Non-Authoritative Information`.
	 */
	static get NON_AUTHORITATIVE_INFORMATION()
	{
		return 203;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `204 No Content`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `204 No Content`.
	 */
	static get NO_CONTENT()
	{
		return 204;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `205 Reset Content`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `205 Reset Content`.
	 */
	static get RESET_CONTENT()
	{
		return 205;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `206 Partial Content`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `206 Partial Content`.
	 */
	static get PARTIAL_CONTENT()
	{
		return 206;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `207 Multi-Status`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `207 Multi-Status`.
	 */
	static get MULTI_STATUS()
	{
		return 207;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `208 Already Sorted`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `208 Already Sorted`.
	 */
	static get ALREADY_SORTED()
	{
		return 208;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `226 Im Used`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `226 Im Used`.
	 */
	static get IM_USED()
	{
		return 226;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `300 Multiple Choices`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `300 Multiple Choices`.
	 */
	static get MULTIPLE_CHOICES()
	{
		return 300;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `301 Moved Permanently`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `301 Moved Permanently`.
	 */
	static get MOVED_PERMANENTLY()
	{
		return 301;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `302 Found`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `302 Found`.
	 */
	static get FOUND()
	{
		return 302;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `303 See Other`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `303 See Other`.
	 */
	static get SEE_OTHER()
	{
		return 303;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `304 Not Modified`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `304 Not Modified`.
	 */
	static get NOT_MODIFIED()
	{
		return 304;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `305 Use Proxy`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `305 Use Proxy`.
	 */
	static get USE_PROXY()
	{
		return 305;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `306 Switch Proxy`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `306 Switch Proxy`.
	 */
	static get SWITCH_PROXY()
	{
		return 306;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `307 Temporary Redirect`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `307 Temporary Redirect`.
	 */
	static get TEMPORARY_REDIRECT()
	{
		return 307;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `308 Permanent Redirect`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `308 Permanent Redirect`.
	 */
	static get PERMANENT_REDIRECT()
	{
		return 308;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `400 Bad Request`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `400 Bad Request`.
	 */
	static get BAD_REQUEST()
	{
		return 400;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `401 Unauthorized`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `401 Unauthorized`.
	 */
	static get UNAUTHORIZED()
	{
		return 401;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `402 Payment Required`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `402 Payment Required`.
	 */
	static get PAYMENT_REQUIRED()
	{
		return 402;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `403 Forbidden`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `403 Forbidden`.
	 */
	static get FORBIDDEN()
	{
		return 403;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `404 Not Found`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `404 Not Found`.
	 */
	static get NOT_FOUND()
	{
		return 404;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `405 Method_Not Allowed`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `405 Method_Not Allowed`.
	 */
	static get METHOD_NOT_ALLOWED()
	{
		return 405;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `406 Not Acceptable`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `406 Not Acceptable`.
	 */
	static get NOT_ACCEPTABLE()
	{
		return 406;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `407 Proxy_Authentication Required`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `407 Proxy_Authentication Required`.
	 */
	static get PROXY_AUTHENTICATION_REQUIRED()
	{
		return 407;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `408 Request Timeout`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `408 Request Timeout`.
	 */
	static get REQUEST_TIMEOUT()
	{
		return 408;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `409 Conflict`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `409 Conflict`.
	 */
	static get CONFLICT()
	{
		return 409;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `410 Gone`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `410 Gone`.
	 */
	static get GONE()
	{
		return 410;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `411 Length Required`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `411 Length Required`.
	 */
	static get LENGTH_REQUIRED()
	{
		return 411;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `412 Precondition Failed`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `412 Precondition Failed`.
	 */
	static get PRECONDITION_FAILED()
	{
		return 412;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `413 Request_Entity_Too Large`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `413 Request_Entity_Too Large`.
	 */
	static get REQUEST_ENTITY_TOO_LARGE()
	{
		return 413;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `414 Uri_Too Long`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `414 Uri_Too Long`.
	 */
	static get URI_TOO_LONG()
	{
		return 414;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `415 Unsupported_Media Type`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `415 Unsupported_Media Type`.
	 */
	static get UNSUPPORTED_MEDIA_TYPE()
	{
		return 415;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `416 Requested_Range_Not Satisfiable`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `416 Requested_Range_Not Satisfiable`.
	 */
	static get REQUESTED_RANGE_NOT_SATISFIABLE()
	{
		return 416;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `417 Expectation Failed`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `417 Expectation Failed`.
	 */
	static get EXPECTATION_FAILED()
	{
		return 417;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `418 Im Ateapot`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `418 Im Ateapot`.
	 */
	static get IM_ATEAPOT()
	{
		return 418;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `420 Policy_Not Fulfilled`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `420 Policy_Not Fulfilled`.
	 */
	static get POLICY_NOT_FULFILLED()
	{
		return 420;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `421 Misdirected Request`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `421 Misdirected Request`.
	 */
	static get MISDIRECTED_REQUEST()
	{
		return 421;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `422 Unprocessable Entity`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `422 Unprocessable Entity`.
	 */
	static get UNPROCESSABLE_ENTITY()
	{
		return 422;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `423 Locked`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `423 Locked`.
	 */
	static get LOCKED()
	{
		return 423;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `424 Failed Dependency`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `424 Failed Dependency`.
	 */
	static get FAILED_DEPENDENCY()
	{
		return 424;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `425 Unordered Collection`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `425 Unordered Collection`.
	 */
	static get UNORDERED_COLLECTION()
	{
		return 425;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `426 Upgrade Required`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `426 Upgrade Required`.
	 */
	static get UPGRADE_REQUIRED()
	{
		return 426;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `428 Precondition Required`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `428 Precondition Required`.
	 */
	static get PRECONDITION_REQUIRED()
	{
		return 428;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `429 Too_Many Requests`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `429 Too_Many Requests`.
	 */
	static get TOO_MANY_REQUESTS()
	{
		return 429;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `431 Request_Header_Fields_Too Large`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `431 Request_Header_Fields_Too Large`.
	 */
	static get REQUEST_HEADER_FIELDS_TOO_LARGE()
	{
		return 431;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `444 No Response`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `444 No Response`.
	 */
	static get NO_RESPONSE()
	{
		return 444;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `449 The_Request_Should_Be_Retried_After_Doing_The_Appropriate Action`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `449 The_Request_Should_Be_Retried_After_Doing_The_Appropriate Action`.
	 */
	static get THE_REQUEST_SHOULD_BE_RETRIED_AFTER_DOING_THE_APPROPRIATE_ACTION()
	{
		return 449;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `451 Unavailable_For_Legal Reasons`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `451 Unavailable_For_Legal Reasons`.
	 */
	static get UNAVAILABLE_FOR_LEGAL_REASONS()
	{
		return 451;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `499 Client_Closed Request`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `499 Client_Closed Request`.
	 */
	static get CLIENT_CLOSED_REQUEST()
	{
		return 499;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `500 Internal_Server Error`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `500 Internal_Server Error`.
	 */
	static get INTERNAL_SERVER_ERROR()
	{
		return 500;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `501 Not Implemented`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `501 Not Implemented`.
	 */
	static get NOT_IMPLEMENTED()
	{
		return 501;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `502 Bad Gateway`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `502 Bad Gateway`.
	 */
	static get BAD_GATEWAY()
	{
		return 502;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `503 Service Unavailable`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `503 Service Unavailable`.
	 */
	static get SERVICE_UNAVAILABLE()
	{
		return 503;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `504 Gateway Timeout`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `504 Gateway Timeout`.
	 */
	static get GATEWAY_TIMEOUT()
	{
		return 504;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `505 Http_Version_Not Supported`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `505 Http_Version_Not Supported`.
	 */
	static get HTTP_VERSION_NOT_SUPPORTED()
	{
		return 505;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `506 Variant_Also Negotiates`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `506 Variant_Also Negotiates`.
	 */
	static get VARIANT_ALSO_NEGOTIATES()
	{
		return 506;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `507 Insufficient Storage`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `507 Insufficient Storage`.
	 */
	static get INSUFFICIENT_STORAGE()
	{
		return 507;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `508 Loop Detected`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `508 Loop Detected`.
	 */
	static get LOOP_DETECTED()
	{
		return 508;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `509 Bandwidth_Limit Exceeded`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `509 Bandwidth_Limit Exceeded`.
	 */
	static get BANDWIDTH_LIMIT_EXCEEDED()
	{
		return 509;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `510 Not Extended`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `510 Not Extended`.
	 */
	static get NOT_EXTENDED()
	{
		return 510;
	}

	/**
	 * Represents the HTTP response status code of the HTTP response status `511 Network_Authentication Required`.
	 * @returns {Number} The HTTP response status code of the HTTP response status `511 Network_Authentication Required`.
	 */
	static get NETWORK_AUTHENTICATION_REQUIRED()
	{
		return 511;
	}
}
