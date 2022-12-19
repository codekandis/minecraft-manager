'use strict';

import StaticAbstract from '../../Types/StaticAbstract.js';

class HttpResponseStatusCode extends StaticAbstract
{
	static get CONTINUE()
	{
		return 100;
	}

	static get SWITCHING_PROTOCOLS()
	{
		return 101;
	}

	static get PROCESSING()
	{
		return 102;
	}

	static get EARLY_HINTS()
	{
		return 103;
	}

	static get OK()
	{
		return 200;
	}

	static get CREATED()
	{
		return 201;
	}

	static get ACCEPTED()
	{
		return 202;
	}

	static get NON_AUTHORITATIVE_INFORMATION()
	{
		return 203;
	}

	static get NO_CONTENT()
	{
		return 204;
	}

	static get RESET_CONTENT()
	{
		return 205;
	}

	static get PARTIAL_CONTENT()
	{
		return 206;
	}

	static get MULTI_STATUS()
	{
		return 207;
	}

	static get ALREADY_SORTED()
	{
		return 208;
	}

	static get IM_USED()
	{
		return 226;
	}

	static get MULTIPLE_CHOICES()
	{
		return 300;
	}

	static get MOVED_PERMANENTLY()
	{
		return 301;
	}

	static get FOUND()
	{
		return 302;
	}

	static get SEE_OTHER()
	{
		return 303;
	}

	static get NOT_MODIFIED()
	{
		return 304;
	}

	static get USE_PROXY()
	{
		return 305;
	}

	static get SWITCH_PROXY()
	{
		return 306;
	}

	static get TEMPORARY_REDIRECT()
	{
		return 307;
	}

	static get PERMANENT_REDIRECT()
	{
		return 308;
	}

	static get BAD_REQUEST()
	{
		return 400;
	}

	static get UNAUTHORIZED()
	{
		return 401;
	}

	static get PAYMENT_REQUIRED()
	{
		return 402;
	}

	static get FORBIDDEN()
	{
		return 403;
	}

	static get NOT_FOUND()
	{
		return 404;
	}

	static get METHOD_NOT_ALLOWED()
	{
		return 405;
	}

	static get NOT_ACCEPTABLE()
	{
		return 406;
	}

	static get PROXY_AUTHENTICATION_REQUIRED()
	{
		return 407;
	}

	static get REQUEST_TIMEOUT()
	{
		return 408;
	}

	static get CONFLICT()
	{
		return 409;
	}

	static get GONE()
	{
		return 410;
	}

	static get LENGTH_REQUIRED()
	{
		return 411;
	}

	static get PRECONDITION_FAILED()
	{
		return 412;
	}

	static get REQUEST_ENTITY_TOO_LARGE()
	{
		return 413;
	}

	static get URI_TOO_LONG()
	{
		return 414;
	}

	static get UNSUPPORTED_MEDIA_TYPE()
	{
		return 415;
	}

	static get REQUESTED_RANGE_NOT_SATISFIABLE()
	{
		return 416;
	}

	static get EXPECTATION_FAILED()
	{
		return 417;
	}

	static get IM_ATEAPOT()
	{
		return 418;
	}

	static get POLICY_NOT_FULFILLED()
	{
		return 420;
	}

	static get MISDIRECTED_REQUEST()
	{
		return 421;
	}

	static get UNPROCESSABLE_ENTITY()
	{
		return 422;
	}

	static get LOCKED()
	{
		return 423;
	}

	static get FAILED_DEPENDENCY()
	{
		return 424;
	}

	static get UNORDERED_COLLECTION()
	{
		return 425;
	}

	static get UPGRADE_REQUIRED()
	{
		return 426;
	}

	static get PRECONDITION_REQUIRED()
	{
		return 428;
	}

	static get TOO_MANY_REQUESTS()
	{
		return 429;
	}

	static get REQUEST_HEADER_FIELDS_TOO_LARGE()
	{
		return 431;
	}

	static get NO_RESPONSE()
	{
		return 444;
	}

	static get THE_REQUEST_SHOULD_BE_RETRIED_AFTER_DOING_THE_APPROPRIATE_ACTION()
	{
		return 449;
	}

	static get UNAVAILABLE_FOR_LEGAL_REASONS()
	{
		return 451;
	}

	static get CLIENT_CLOSED_REQUEST()
	{
		return 499;
	}

	static get INTERNAL_SERVER_ERROR()
	{
		return 500;
	}

	static get NOT_IMPLEMENTED()
	{
		return 501;
	}

	static get BAD_GATEWAY()
	{
		return 502;
	}

	static get SERVICE_UNAVAILABLE()
	{
		return 503;
	}

	static get GATEWAY_TIMEOUT()
	{
		return 504;
	}

	static get HTTP_VERSION_NOT_SUPPORTED()
	{
		return 505;
	}

	static get VARIANT_ALSO_NEGOTIATES()
	{
		return 506;
	}

	static get INSUFFICIENT_STORAGE()
	{
		return 507;
	}

	static get LOOP_DETECTED()
	{
		return 508;
	}

	static get BANDWIDTH_LIMIT_EXCEEDED()
	{
		return 509;
	}

	static get NOT_EXTENDED()
	{
		return 510;
	}

	static get NETWORK_AUTHENTICATION_REQUIRED()
	{
		return 511;
	}
}

export default HttpResponseStatusCode;
