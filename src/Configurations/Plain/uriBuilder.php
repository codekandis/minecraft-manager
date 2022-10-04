<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Configurations;

use CodeKandis\MinecraftManager\Environment\Enumerations\UriNames;

return [
	'schema'       => 'https',
	'host'         => 'minecraft-manager.codekandis',
	'baseUri'      => '/',
	'relativeUris' => [
		UriNames::INDEX   => '',
		UriNames::SIGNOUT => 'signout'
	]
];
