<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Errors;

/**
 * Represents an enumeration of error messages of subway rails mapper errors.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
abstract class SubwayRailsMapperErrorMessages
{
	/**
	 * Represents an error if a subway rails mapper does not exist.
	 * @var string
	 */
	public const SUBWAY_RAILS_MAPPER_UNKNOWN = 'The requested subway rails mapper does not exist.';
}
