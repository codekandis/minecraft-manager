<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Configurations\Plain;

use CodeKandis\Session\SessionOptions;

return [
	'options'  => [
		SessionOptions::COOKIE_SECURE   => 'On',
		SessionOptions::GC_MAXLIFETIME  => 43200,
		SessionOptions::COOKIE_LIFETIME => 43200
	],
	'savePath' => null
];
