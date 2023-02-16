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
	public function buildSettingsSettingsUri(): string
	{
		return $this->build( ApiUriNames::SETTINGS_SETTINGS );
	}

	/**
	 * {@inheritDoc}
	 */
	public function buildSubwayRailsMapperLanternPositionsUri(): string
	{
		return $this->build( ApiUriNames::SUBWAY_RAILS_MAPPER_LANTERN_POSITIONS );
	}
}
