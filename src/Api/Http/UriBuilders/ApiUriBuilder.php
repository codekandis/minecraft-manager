<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Http\UriBuilders;

use CodeKandis\MinecraftManager\Api\Http\ApiUriNames;
use CodeKandis\Tiphy\Http\UriBuilders\AbstractUriBuilder;

/**
 * Represents an API URI builder.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class ApiUriBuilder extends AbstractUriBuilder implements ApiUriBuilderInterface
{
	/**
	 * {@inheritDoc}
	 */
	public function buildSettingsUri(): string
	{
		return $this->build( ApiUriNames::SETTINGS );
	}

	/**
	 * {@inheritDoc}
	 */
	public function buildSettingUri(): string
	{
		return $this->build( ApiUriNames::SETTING );
	}
}
