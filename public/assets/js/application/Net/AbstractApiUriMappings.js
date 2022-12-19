'use strict';

import AbstractUriMappings from '../../library/Net/AbstractUriMappings.js';

class AbstractApiUriMappings extends AbstractUriMappings
{
	__schema  = 'https';
	__host    = 'minecraft-manager.codekandis';
	__port    = 443;
	__baseUri = '/api/';
}

export default AbstractApiUriMappings;
