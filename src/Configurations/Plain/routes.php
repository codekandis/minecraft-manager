<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Configurations;

use CodeKandis\MinecraftManager\Frontend\Actions as Frontend;
use CodeKandis\Tiphy\Http\Requests\Methods;

return [
	'baseRoute' => '',
	'routes'    => [
		'^/$'        => [
			Methods::GET => Frontend\Get\IndexAction::class
		],
		'^/signout$' => [
			Methods::GET => Frontend\Get\SignoutAction::class
		]
	]
];
