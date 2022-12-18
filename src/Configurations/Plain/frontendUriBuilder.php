<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Configurations;

use CodeKandis\MinecraftManager\Frontend\Http\FrontendUriNames;

return [
	'schema'       => 'https',
	'host'         => 'minecraft-manager.codekandis',
	'baseUri'      => '/',
	'relativeUris' => [
		FrontendUriNames::INDEX   => '',
		FrontendUriNames::SIGNOUT => 'signout'
	]
];
