<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Configurations\Plain;

use CodeKandis\Persistence\PersistenceDrivers;

return [
	'driver'       => PersistenceDrivers::MYSQL,
	'host'         => 'localhost',
	'databaseName' => 'minecraft-manager.codekandis',
	'username'     => 'minecraft-manager.codekandis',
	'passphrase'   => 'minecraft-manager.codekandis',
];
