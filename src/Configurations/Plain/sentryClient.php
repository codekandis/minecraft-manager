<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Configurations\Plain;

use const E_ALL;

return [
	'dsn'           => '',
	'displayErrors' => false,
	'errorTypes'    => E_ALL,
	'environment'   => 'development',
	'release'       => 'dev-development',
	'serverName'    => 'minecraft-manager.codekandis'
];
