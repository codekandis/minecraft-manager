<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Http;

/**
 * Represents an enumeration of API URI names.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
abstract class ApiUriNames
{
	/**
	 * Represents the URI name of the settings settings.
	 */
	public const SETTINGS_SETTINGS = 'settings.settings';

	/**
	 * Represents the URI name of the subway rails mapper lantern positions.
	 */
	public const SUBWAY_RAILS_MAPPER_LANTERN_POSITIONS = 'subwayRailsMapper.lanternPositions';

	/**
	 * Represents the URI name of the subway station mapper station positions.
	 */
	public const SUBWAY_STATION_MAPPER_STATION_POSITIONS = 'subwayStationMapper.stationPositions';
}
