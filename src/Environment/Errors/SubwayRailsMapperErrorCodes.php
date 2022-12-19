<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Errors;

/**
 * Represents an enumeration of error codes of subway rails mapper errors.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
abstract class SubwayRailsMapperErrorCodes
{
	/**
	 * Represents an error if a subway rails mapper does not exist.
	 * @var int
	 */
	public const SUBWAY_RAILS_MAPPER_UNKNOWN = 10001;
}
