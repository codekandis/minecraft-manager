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
	 * Represents the URI name of the settings.
	 */
	public const SETTINGS = 'settings';

	/**
	 * Represents the URI name of the setting.
	 */
	public const SETTING = 'setting';

	/**
	 * Represents the URI name of the subwayRailsMappers.
	 */
	public const SUBWAY_RAILS_MAPPERS = 'subwayRailsMappers';

	/**
	 * Represents the URI name of the subwayRailsMapper.
	 */
	public const SUBWAY_RAILS_MAPPER = 'subwayRailsMapper';
}
