<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Configurations;

use CodeKandis\MinecraftManager\Api\Http\ApiUriNames;

return [
	'schema'       => 'https',
	'host'         => 'minecraft-manager.codekandis',
	'baseUri'      => '/api/',
	'relativeUris' => [
		ApiUriNames::SETTINGS             => 'settings',
		ApiUriNames::SETTING              => 'settings',
		ApiUriNames::SUBWAY_RAILS_MAPPERS => 'subwayRailsMappers',
		ApiUriNames::SUBWAY_RAILS_MAPPER  => 'subwayRailsMappers'
	]
];
