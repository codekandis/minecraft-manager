<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Http\UriBuilders;

/**
 * Represents the interface of any API URI builder.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface ApiUriBuilderInterface
{
	/**
	 * Builds the URI of the settings settings.
	 * @return string The URI of the settings settings.
	 */
	public function buildSettingsSettingsUri(): string;

	/**
	 * Builds the URI of the subway rails mapper lantern positions.
	 * @return string The URI of the subway rails mapper lantern positions.
	 */
	public function buildSubwayRailsMapperLanternPositionsUri(): string;

	/**
	 * Builds the URI of the subway station mapper station positions.
	 * @return string The URI of the subway station mapper station positions.
	 */
	public function buildSubwayStationMapperStationPositionsUri(): string;
}
