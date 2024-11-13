<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Configurations\Plain;

use CodeKandis\MinecraftManager\Api\Http\ApiUriNames;
use CodeKandis\MinecraftManager\Environment\Enumerations\ApplicationStageNames;
use CodeKandis\MinecraftManager\Frontend\Http\FrontendUriNames;

return [
	ApplicationStageNames::API      => [
		'schema'       => 'https',
		'host'         => 'minecraft-manager.codekandis',
		'baseUri'      => '/api/',
		'relativeUris' => [
			ApiUriNames::SETTINGS_SETTINGS                       => 'settings/settings',
			ApiUriNames::SUBWAY_RAILS_MAPPER_LANTERN_POSITIONS   => 'subway-rails-mapper/lantern-positions',
			ApiUriNames::SUBWAY_STATION_MAPPER_STATION_POSITIONS => 'subway-station-mapper/station-positions'
		]
	],
	ApplicationStageNames::FRONTEND => [
		'schema'       => 'https',
		'host'         => 'minecraft-manager.codekandis',
		'baseUri'      => '/',
		'relativeUris' => [
			FrontendUriNames::INDEX   => '',
			FrontendUriNames::SIGNOUT => 'signout'
		]
	]
];
