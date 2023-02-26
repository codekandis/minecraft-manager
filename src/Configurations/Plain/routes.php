<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Configurations\Plain;

use CodeKandis\MinecraftManager\Api\Actions as Api;
use CodeKandis\MinecraftManager\Frontend\Actions as Frontend;
use CodeKandis\Tiphy\Http\Requests\Methods;

return [
	'baseRoute' => '',
	'routes'    => [
		'/'                                          => [
			Methods::GET => Frontend\Get\IndexAction::class
		],
		'/signout'                                   => [
			Methods::GET => Frontend\Get\SignoutAction::class
		],
		'/api/settings/settings'                     => [
			Methods::GET  => Api\Get\Settings\SettingsAction::class,
			Methods::POST => Api\Post\Settings\SettingsAction::class
		],
		'/api/subway-rails-mapper/lantern-positions' => [
			Methods::GET  => Api\Get\SubwayRailsMapper\LanternPositionsAction::class,
			Methods::POST => Api\Post\SubwayRailsMapper\LanternPositionsAction::class
		]
	]
];
